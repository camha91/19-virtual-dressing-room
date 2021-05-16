import React from "react";
import { useSelector } from "react-redux";

export default function DressingRoom() {
  const currentDressingRoomSet = useSelector((state) => {
    return state.VirtualDressingRoomReducer.currentDressingSet;
  });

  return (
    <div className="col-md-4">
      <div className="contain">
        <div className="body"></div>
        <div className="model"></div>

        <div
          className="hairstyle"
          style={{
            backgroundImage: `url(${currentDressingRoomSet.hairStyle})`,
          }}
        ></div>
        <div
          className="necklace"
          style={{
            backgroundImage: `url(${currentDressingRoomSet.necklaces})`,
          }}
        ></div>
        <div
          className="topWear"
          style={{
            backgroundImage: `url(${currentDressingRoomSet.topClothes})`,
          }}
        ></div>
        <div
          className="botWear"
          style={{
            backgroundImage: `url(${currentDressingRoomSet.botClothes})`,
          }}
        ></div>
        <div
          className="handbag"
          style={{ backgroundImage: `url(${currentDressingRoomSet.handbags})` }}
        ></div>
        <div
          className="feet"
          style={{ backgroundImage: `url(${currentDressingRoomSet.shoes})` }}
        ></div>
        <div
          className="background"
          style={{
            backgroundImage: `url(${currentDressingRoomSet.background})`,
          }}
        ></div>
      </div>
    </div>
  );
}
