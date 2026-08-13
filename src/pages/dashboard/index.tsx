import { AgGridReact } from "ag-grid-react";
import { useMemo } from "react";
import * as XLSX from "xlsx";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Button } from "../../components/Button";
import { Sidebar } from "../../components/Sidebar";
import SummaryCard from "../../components/SummaryCard";
import { payments, users } from "../../constants";
import {
  DashboardCharts,
  DashboardChartsHeading,
  DashboardHeading,
  DashboardHeadingContainer,
  DashboardHeadingDescription,
  DashboardMainContent,
  DashboardSponsors,
  DashboardSponsorsHeading,
  StyledDashboard,
  SummaryCardContainer,
} from "./styles";

export function Dashboard() {
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

  const topSponsors = useMemo(() => users?.slice(0, 5), [users]);

  const handleExport = () => {
    const exportData = topSponsors.map((user) => ({
      Name: user.name,
      Email: user.email,
      Amount: user.amount,
      Currency: user.currency,
      Status: user.status,
      Date: user.date,
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Sponsors");

    XLSX.writeFile(workbook, "top_sponsors.xlsx");
  };

  return (
    <StyledDashboard>
      <Sidebar />
      <DashboardMainContent>
        <DashboardHeadingContainer>
          <DashboardHeading>Home</DashboardHeading>
          <DashboardHeadingDescription>
            Hello Admin, how are you doing today?
          </DashboardHeadingDescription>
        </DashboardHeadingContainer>
        <SummaryCardContainer>
          <SummaryCard
            icon="totalPayments"
            metric="£89,000"
            title="Total Payments"
            metricDescription="Down from yesterday"
            metricPercentage={4.3}
            status="down"
          />
          <SummaryCard
            icon="totalSponsorEvents"
            metric="10293"
            title="Total Sponsor Events"
            metricDescription="Up from past week"
            metricPercentage={1.3}
            status="down"
          />
          <SummaryCard
            icon="totalUsers"
            metric="40,689"
            title="Total Users"
            metricDescription="Up from yesterday"
            metricPercentage={8.5}
            status="up"
          />
        </SummaryCardContainer>
        <DashboardCharts>
          <DashboardChartsHeading>Payments</DashboardChartsHeading>
          <AreaChart
            style={{ width: "100%", maxHeight: "60vh", aspectRatio: 1.618 }}
            responsive
            data={payments}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient
                id="colorAmount"
                x1="200.443"
                y1="97.1783"
                x2="200.443"
                y2="194.357"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#5C247F" stop-opacity="0.16" />
                <stop offset="1" stop-color="white" stop-opacity="0.176942" />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={false}
              horizontal={true}
              strokeDasharray="3 0"
              stroke="#EAEAEA"
            />

            <XAxis
              tick={{ fill: "rgba(0, 0, 0, 0.40)" }}
              dataKey="date"
              tickFormatter={(value) =>
                new Date(value).toLocaleDateString("en-GB", {
                  weekday: "short",
                })
              }
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fill: "rgba(0, 0, 0, 0.40)" }}
              tickFormatter={(value) => `£${value / 1000}k`}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip />
            <Area
              type="linear"
              dataKey="amount"
              stroke="#5c247f"
              fillOpacity={1}
              fill="url(#colorAmount)"
            />
          </AreaChart>
        </DashboardCharts>
        <DashboardSponsors>
          <DashboardSponsorsHeading>Top 5 Sponsors</DashboardSponsorsHeading>
          <Button
            type="button"
            icon="download"
            variant="primary"
            label="Export All"
            handleClick={handleExport}
          />
        </DashboardSponsors>
        <AgGridReact
          pagination={true}
          paginationPageSize={10}
          rowData={topSponsors}
          columnDefs={colDefs}
          domLayout="autoHeight"
        />
      </DashboardMainContent>
    </StyledDashboard>
  );
}
