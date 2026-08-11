import { Global } from "@emotion/react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { normalize } from "./styles/base/reset";
import { AllCommunityModule } from "ag-grid-community";
import { AgGridProvider } from "ag-grid-react";
import { Payments } from "./pages/payments";
import { Users } from "./pages/users";
import { Events } from "./pages/events";

const modules = [AllCommunityModule];

function App() {
  return (
    <AgGridProvider modules={modules}>
      <Global styles={normalize} />
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/users" element={<Users />} />
        <Route path="/sponsor-events" element={<Events />} />
      </Routes>
    </AgGridProvider>
  );
}

export default App;
