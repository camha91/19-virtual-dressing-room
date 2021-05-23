import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { animated, useSpring } from "react-spring";
import { tryOnAction } from "../redux/actions/VirtualDressingRoomAction";
import { getRoomChangingItemRef } from "./DressingRoom";
import { adjustCoordinate } from "../utils/adjustCoordinate";
import { getItemCoordinates } from "../utils/coordinates";

const state = [
    {
        indexAnimation: -1,
        imgSrc: "",
        imgAlt: "",
        enter_x: 0,
        enter_y: 0,
        enter_scale: 1,
        dispatchData: {},
    },
];

export default function TabContent(props) {
    const { tabItems } = props;

    const currentActiveTab = useSelector(
        (state) => state.VirtualDressingRoomReducer.currentActiveTab
    );

    const dispatch = useDispatch();
    const tryingItemRef = useRef();

    const [isFinishedAnimation, setIsFinishedAnimation] = useState(false);
    const [changeItem, setChangeItem] = useState(state);

    const movingItemAnim = useSpring({
        config: { duration: 500 },
        from: {
            transform: `translate3d(0px,0px,0px) scale(1)`,
        },
        to: {
            transform: `translate3d(${changeItem[0].enter_x}px,${changeItem[0].enter_y}px,0px) scale(${changeItem[0].enter_scale})`,
        },
        onRest: () => setIsFinishedAnimation(true),
    });

    const renderNewDressingRoomItemSet = (tabPaneItem, index) => {
        const changingItemRefElem = getRoomChangingItemRef();
        const changingItemStyle = getComputedStyle(changingItemRefElem);
        const chaningItemCoordinates = getItemCoordinates(changingItemRefElem);
        console.log("changingItemRefElem", changingItemRefElem);
        console.log("changingItem coordinate", chaningItemCoordinates);
        console.log(changingItemStyle.top, changingItemStyle.left);

        console.log(tryingItemRef);
        const tryingItemRefElem = tryingItemRef.current[index];
        const tryingItemRefCoordinates = getItemCoordinates(tryingItemRefElem);
        console.log("tryingItemRefElem", tryingItemRefElem);
        console.log("tryingItem coordinates", tryingItemRefCoordinates);

        const coordinateAdjustment = adjustCoordinate(tabPaneItem.type);

        const newData = [
            {
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
                enter_scale: 1 * coordinateAdjustment[2],
                dispatchData: {
                    [tabPaneItem.type]: tabPaneItem.imgSrc_jpg,
                },
            },
        ];
        setChangeItem(newData);
    };

    const propsUseSpringImage = useSpring({
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
                                ref={(elem) =>
                                    (tryingItemRef.current[index] = elem)
                                }
                                style={
                                    changeItem[0].indexAnimation === index
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
                                    renderNewDressingRoomItemSet(
                                        tabPaneItem,
                                        index
                                    );
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

    // component did update
    useEffect(
        (dispatch, changeItem) => {
            // dispatch(tryOnAction(changeItem));
            dispatch({
                type: "TRY_ON",
                tryItem: changeItem[0].dispatchData,
            });

            if (isFinishedAnimation) {
                setIsFinishedAnimation(false);
                setChangeItem(state);
            }

            return () => {
                // Clean up step
            };
        },
        [isFinishedAnimation]
    );

    return (
        <div className="tab-content">
            <div className="container">
                <div className="row">{renderDressingItem()}</div>
            </div>
        </div>
    );
}
