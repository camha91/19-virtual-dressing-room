import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { tryOnAction } from "../redux/Actions/VirtualDressingRoomAction";
import { useSpring, animated } from "react-spring";

export default function TabContent(props) {
  const { tabItems } = props;

  const currentActiveTab = useSelector(
    (state) => state.VirtualDressingRoomReducer.currentActiveTab
  );

  const dispatch = useDispatch();

  const propsImage = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 1000 },
    reset: true,
  });

  const renderDressingItem = () => {
    return tabItems.map((tabPaneItem, index) => {
      if (tabPaneItem.type === currentActiveTab.type) {
        return (
          <div key={index} className="col-md-4">
            <div className="card text-center">
              <animated.img
                style={propsImage}
                src={tabPaneItem.imgSrc_jpg}
                alt={tabPaneItem.name}
              />
              <h4>
                <b>{tabPaneItem.desc}</b>
              </h4>
              <animated.button
                onClick={() => {
                  dispatch(tryOnAction(tabPaneItem));
                }}
              >
                Try on
              </animated.button>
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
