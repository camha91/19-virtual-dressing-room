import React from "react";
import TabContent from "./TabContent";
import { useDispatch, useSelector } from "react-redux";

export default function Drawer(props) {
  const { navPills, tabPanes } = props;

  const currentActiveTab = useSelector(
    (state) => state.VirtualDressingRoomReducer.currentActiveTab
  );

  const dispatch = useDispatch();

  const renderNavbar = () => {
    return navPills.map((navItem, index) => {
      let aClassName = "nav-link btn-success";
      if (navItem.tabName === currentActiveTab.tabName) {
        aClassName = "nav-link btn-success active";
      }
      return (
        <li
          key={index}
          className="nav-item"
          onClick={() =>
            dispatch({
              type: "CHANGE_ACTIVE_TAB",
              currentActiveTab: { ...navItem },
            })
          }
        >
          <a className={aClassName} data-toggle="pill" href={navItem.tabName}>
            {navItem.showName}
          </a>
        </li>
      );
    });
  };
  return (
    <div className="col-md-8">
      <ul className="nav nav-pills">{renderNavbar()}</ul>

      <div className="well">
        {/* <!-- Tab panes --> */}
        <TabContent tabItems={tabPanes} />
      </div>
    </div>
  );
}
