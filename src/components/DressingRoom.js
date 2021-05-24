import React, { useRef } from "react";
import { useSelector } from "react-redux";

let roomChangingItemRef;

export default function DressingRoom() {
    const currentDressingRoomSet = useSelector((state) => {
        return state.VirtualDressingRoomReducer.currentDressingSet;
    });
    const currentActiveTab = useSelector((state) => {
        return state.VirtualDressingRoomReducer.currentActiveTab;
    });

    const changeRef = useRef();

    roomChangingItemRef = changeRef;

    return (
        <div className="col-md-4">
            <div className="contain">
                <div
                    className="body"
                    style={{
                        backgroundImage: "url(./img/allbody/bodynew.png)",
                    }}
                ></div>
                <div
                    className="model"
                    style={{
                        backgroundImage: "url(./img/model/1000new.png)",
                    }}
                ></div>

                {Object.keys(currentDressingRoomSet).map((k, index) => {
                    // Get the keys from the currentDressingRoomSet then map each key
                    const v = currentDressingRoomSet[k];
                    if (k === currentActiveTab.type) {
                        return (
                            <div
                                ref={changeRef}
                                className={k}
                                style={{ backgroundImage: `url(${v})` }}
                                key={index}
                            ></div>
                        );
                    }
                    return (
                        <div
                            className={k}
                            style={{ backgroundImage: `url(${v})` }}
                            key={index}
                        ></div>
                    );
                })}
            </div>
        </div>
    );
}

export const getRoomChangingItemRef = () => {
    return roomChangingItemRef.current;
};
