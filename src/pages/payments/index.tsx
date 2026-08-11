import { AgGridReact } from "ag-grid-react";
import { useMemo } from "react";
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
