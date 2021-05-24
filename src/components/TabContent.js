import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { animated, useSpring } from "react-spring";
import { tryOnAction } from "../redux/actions/VirtualDressingRoomAction";
import { adjustCoordinate } from "../utils/adjustCoordinate";
import { getItemCoordinates } from "../utils/coordinates";
import { getRoomChangingItemRef } from "./DressingRoom";

const state = {
    indexAnimation: -1,
    imgSrc: "",
    imgAlt: "",
    enter_x: 0,
    enter_y: 0,
    enter_scale: 1,
    dispatchData: {},
};

export default function TabContent(props) {
    const { tabItems } = props;

    const currentActiveTab = useSelector(
        (state) => state.VirtualDressingRoomReducer.currentActiveTab
    );
    useSelector((state) => state.VirtualDressingRoomReducer.currentDressingSet);

    const dispatch = useDispatch();
    const tryingItemRef = useRef({});
    const changeItem = useRef(state);

    const [countForceReRender, setCountForceReRender] = useState(0);
    console.log("You have forced update ", countForceReRender, " times");

    const movingItemAnim = useSpring({
        config: { duration: 500 },
        from: {
            transform: `translate3d(0px,0px,0px) scale(1)`,
        },
        to: {
            transform: `translate3d(${changeItem.current.enter_x}px,${changeItem.current.enter_y}px,0px) scale(${changeItem.current.enter_scale})`,
        },
        onRest: () => {
            console.log("-----Right After Animation----");
            const dispatchData = { ...changeItem.current.dispatchData };
            changeItem.current = state; // must reset changeItem before dispatch data to Global redux state
            dispatch(tryOnAction(dispatchData));
        },
    });

    const renderDressingItem = () => {
        return tabItems.map((tabPaneItem, index) => {
            if (tabPaneItem.type === currentActiveTab.type) {
                return (
                    <div key={index} className="col-md-4">
                        <div className="card text-center">
                            <animated.img
                                ref={(elem) =>
                                    (tryingItemRef.current[index] = elem)
                                }
                                style={
                                    changeItem.current.indexAnimation === index
                                        ? movingItemAnim
                                        : {}
                                }
                                src={tabPaneItem.imgSrc_jpg}
                                alt={tabPaneItem.name}
                            />

                            <h4>
                                <b>{tabPaneItem.name}</b>
                            </h4>
                            <button
                                onClick={() => {
                                    console.log("Button Try On is clicked!");
                                    // renderNewDressingRoomItemSet(
                                    //     tabPaneItem,
                                    //     index,
                                    // );
                                    const changingItemRefElem =
                                        getRoomChangingItemRef();
                                    const chaningItemCoordinates =
                                        getItemCoordinates(changingItemRefElem);
                                    // console.log("changingItemRefElem", changingItemRefElem);
                                    // console.log("changingItem coordinate", chaningItemCoordinates);
                                    // console.log(changingItemStyle.top, changingItemStyle.left);

                                    console.log(tryingItemRef);
                                    const tryingItemRefElem =
                                        tryingItemRef.current[index];
                                    const tryingItemRefCoordinates =
                                        getItemCoordinates(tryingItemRefElem);
                                    // console.log("tryingItemRefElem", tryingItemRefElem);
                                    // console.log("tryingItem coordinates", tryingItemRefCoordinates);

                                    const coordinateAdjustment =
                                        adjustCoordinate(tabPaneItem.type);

                                    const newData = {
                                        indexAnimation: index,
                                        imgSrc: tabPaneItem.imgSrc_jpg,
                                        imgAlt: tabPaneItem.name,
                                        enter_x:
                                            chaningItemCoordinates.right -
                                            tryingItemRefCoordinates.right +
                                            coordinateAdjustment[0],
                                        enter_y:
                                            chaningItemCoordinates.top -
                                            tryingItemRefCoordinates.top +
                                            coordinateAdjustment[1],
                                        enter_scale:
                                            1 * coordinateAdjustment[2],
                                        dispatchData: {
                                            [tabPaneItem.type]:
                                                tabPaneItem.imgSrc_png,
                                        },
                                    };

                                    // use useRef instead of useState to avoid unnecessary re-render
                                    changeItem.current = newData;
                                    // Forcing re-render to update animated img with new movingItemAnim
                                    setCountForceReRender((count) => count + 1);
                                }}
                            >
                                Try on
                            </button>
                        </div>
                    </div>
                );
            }
            return null;
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
