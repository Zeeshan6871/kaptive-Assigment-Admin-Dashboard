import React from "react";
import { Chart } from "./Chart";
import { DataTable } from "./Table";

import ElementHighlights from "./MUIChart";
import banner from "../assets/banner.jpeg";
import StickyHeadTable from "./MUITable";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <img
        src={banner}
        alt="banner"
        style={{ width: "100%", height: "100px" }}
      />
      {/* <div id="charts"><Chart data={data.Sheet1} /></div> */}
      <div style={{ overflow: "scroll", height: "80vh", margin: "0" }}>
        <div id="charts">
          <ElementHighlights />
        </div>
        {/* <div id="tables"><DataTable data={data.Sheet1} /></div> */}
        <div id="tables">
          <StickyHeadTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
