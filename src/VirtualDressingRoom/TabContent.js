import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { tryOnAction } from "../redux/Actions/VirtualDressingRoomAction";

export default function TabContent(props) {
  const { tabItems } = props;

  const currentActiveTab = useSelector(
    (state) => state.VirtualDressingRoomReducer.currentActiveTab
  );

  const dispatch = useDispatch();

  const renderDressingItem = () => {
    return tabItems.map((tabPaneItem, index) => {
      if (tabPaneItem.type === currentActiveTab.type) {
        return (
          <div key={index} className="col-md-4">
            <div className="card text-center">
              <img src={tabPaneItem.imgSrc_jpg} alt={tabPaneItem.name} />
              <h4>
                <b>{tabPaneItem.desc}</b>
              </h4>
              <button
                onClick={() => {
                  dispatch(tryOnAction(tabPaneItem));
                }}
              >
                Try on
              </button>
            </div>
          </div>
        );
      }
    });
  };

  return (
    <div className="tab-content">
      <div className="container">
        <div className="row">{renderDressingItem()}</div>
      </div>
    </div>
  );
}
