import { AgGridReact } from "ag-grid-react";
import { useMemo } from "react";
import * as XLSX from "xlsx";

import { Button } from "../../components/Button";
import { Pill } from "../../components/Pill";
import { Sidebar } from "../../components/Sidebar";
import { payments } from "../../constants";
import {
  PaymentsButton,
  PaymentsDescription,
  PaymentsHeader,
  PaymentsHeading,
  PaymentsTable,
  StyledPayments,
} from "./styles";

export function Payments() {
  const colDefs = useMemo(() => {
    return [
      { field: "name", flex: 1 },
      { field: "email", flex: 1 },
      { field: "amount", flex: 1 },

      { field: "currency", flex: 1 },
      {
        field: "status",
        flex: 1,
        cellStyle: {
          display: "flex",
          alignItems: "center",
          height: "100%",
        },
        cellRenderer: (props) => (
          <Pill variant={props?.value} label={props?.value} />
        ),
      },
      { field: "date", flex: 1 },
    ];
  }, []);

  const handleExport = () => {
    const exportData = payments.map((payment) => ({
      Name: payment.name,
      Email: payment.email,
      Amount: payment.amount,
      Currency: payment.currency,
      Status: payment.status,
      Date: payment.date,
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Payments");

    XLSX.writeFile(workbook, "payments.xlsx");
  };

  return (
    <StyledPayments>
      <Sidebar />
      <PaymentsTable>
        <PaymentsHeader>
          <PaymentsHeading>Payments</PaymentsHeading>
          <PaymentsDescription>
            View and manage all payments.
          </PaymentsDescription>
        </PaymentsHeader>
        <PaymentsButton>
          <Button
            type="button"
            icon="download"
            variant="primary"
            label="Export All"
            handleClick={handleExport}
          />
        </PaymentsButton>
        <AgGridReact
          pagination={true}
          paginationPageSize={10}
          rowData={payments}
          columnDefs={colDefs}
          domLayout="autoHeight"
        />
      </PaymentsTable>
    </StyledPayments>
  );
}
