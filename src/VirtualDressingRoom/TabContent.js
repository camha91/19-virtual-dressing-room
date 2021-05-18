import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    animated,
    useChain,
    useSpring,
    useSpringRef,
    useTransition,
} from "react-spring";
import { tryOnAction } from "../redux/Actions/VirtualDressingRoomAction";
import { getCurrentRef } from "./DressingRoom";

export default function TabContent(props) {
    const { tabItems } = props;

    // const [isClicked, setClicked] = useState(false);

    const currentActiveTab = useSelector(
        (state) => state.VirtualDressingRoomReducer.currentActiveTab
    );

    const dispatch = useDispatch();

    const propsUseSpring = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        config: { duration: 1000 },
        reset: true,
    });

    // const propsUseTransition = useTransition(
    //   tabItems,
    //   (tabPaneItem) => tabPaneItem.id,
    //   {
    //     from: { transform: "translate3d(0,-40px, 0)" },
    //     enter: { transform: "translate3d(0, 0px, 0)" },
    //     leave: { transform: "translate3d(0,-40px, 0)" },
    //   }
    // );

    const renderDressingItem = () => {
        // return propsUseTransition.map((propsAnim, index) => {
        //   console.log(propsAnim);
        return tabItems.map((tabPaneItem, index) => {
            if (tabPaneItem.type === currentActiveTab.type) {
                return (
                    <div key={index} className="col-md-4">
                        <div className="card text-center">
                            <animated.img
                                style={propsUseSpring}
                                src={tabPaneItem.imgSrc_jpg}
                                alt={tabPaneItem.name}
                            />
                            <h4>
                                <b>{tabPaneItem.name}</b>
                            </h4>
                            <button
                                // style={{ propsUseTransition }}
                                onClick={() => {
                                    const element = getCurrentRef();
                                    console.log(element);
                                    const rect =
                                        element.getBoundingClientRect();
                                    console.log(rect.top, rect.left);
                                    // setClicked(!isClicked);
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
