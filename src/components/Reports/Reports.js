import React from "react";
import "./Reports.css";
import * as AiIcons from "react-icons/ai";

function Reports() {
  return (
    <div className="reports">
      <h1 className="reports-header">Reports</h1>
      <div className="dashboard">
        <div className="report-1">
          <div className="report-heading">TOTAL TASKS COMPLETED</div>
          <p className="report-number">345</p>
          <p className="report-info">
            <AiIcons.AiOutlineArrowDown />
          </p>
        </div>
        <div className="report-2">
          <div className="report-heading">ACTIVE USERS</div>
          <p className="report-number">987</p>
          <p className="report-info">
            <AiIcons.AiOutlineArrowUp />
          </p>
        </div>
        <div className="report-3">
          <div className="report-heading">PERFORMANCE</div>
          <p className="report-number">5%</p>
          <p className="report-info">
            <AiIcons.AiOutlineArrowUp />
          </p>
        </div>
        <div className="report-4">
          <div className="report-heading">ISSUES</div>
          <p className="report-number">248</p>
          <p className="report-info">
            <AiIcons.AiOutlineArrowDown />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Reports;
