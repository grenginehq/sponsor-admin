import { AgGridReact } from "ag-grid-react";
import { useMemo } from "react";
import { Button } from "../../components/Button";
import { Sidebar } from "../../components/Sidebar";
import { users } from "../../constants";
import {
  UsersButton,
  UsersDescription,
  UsersHeader,
  UsersHeading,
  UsersTable,
  StyledUsers,
} from "./styles";

export function Users() {
  const colDefs = useMemo(() => {
    return [
      { field: "name", flex: 1 },
      { field: "email", flex: 1 },
      {
        field: "countryCode",
        flex: 1,
      },
      { field: "mobileNumber", flex: 1 },
    ];
  }, []);
  return (
    <StyledUsers>
      <Sidebar />
      <UsersTable>
        <UsersHeader>
          <UsersHeading>Users</UsersHeading>
          <UsersDescription>View and manage all users.</UsersDescription>
        </UsersHeader>
        <UsersButton>
          <Button
            type="button"
            icon="download"
            variant="primary"
            label="Export All"
          />
        </UsersButton>
        <AgGridReact
          pagination={true}
          paginationPageSize={10}
          rowData={users}
          columnDefs={colDefs}
          domLayout="autoHeight"
        />
      </UsersTable>
    </StyledUsers>
  );
}
