import React from "react";
import TabContent from "./TabContent";
import dataTabs from "../Data/Data.json";

export default function CategoryTabs() {
  const renderTabsName = () => {
    return dataTabs.navPills.map((tab, index) => {
      return (
        <li key={index} className="nav-item">
          <a
            className="nav-link btn-success"
            data-toggle="pill"
            href={tab.tabName}
          >
            {tab.showName}
          </a>
        </li>
      );
    });
  };
  return (
    <div className="col-md-8">
      <ul className="nav nav-pills">{renderTabsName()}</ul>

      <div className="well">
        {/* <!-- Tab panes --> */}
        <TabContent />
      </div>
    </div>
  );
}
