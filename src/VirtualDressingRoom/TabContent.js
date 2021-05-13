import React from "react";
import DressingBackground from "./DressingBackground";
import DressingBottoms from "./DressingBottoms";
import DressingHairStyle from "./DressingHairStyle";
import DressingHandbags from "./DressingHandbags";
import DressingNecklaces from "./DressingNecklaces";
import DressingShoes from "./DressingShoes";
import DressingTops from "./DressingTops";

export default function Tab() {
  return (
    <div className="tab-content">
      <div className="tab-pane container active" id="tabTopClothes">
        <DressingTops />
      </div>
      <div className="tab-pane container fade" id="tabBotClothes">
        <DressingBottoms />
      </div>
      <div className="tab-pane container fade" id="tabShoes">
        <DressingShoes />
      </div>
      <div className="tab-pane container fade" id="tabHandBags">
        <DressingHandbags />
      </div>
      <div className="tab-pane container fade" id="tabNecklaces">
        <DressingNecklaces />
      </div>
      <div className="tab-pane container fade" id="tabHairStyle">
        <DressingHairStyle />
      </div>
      <div className="tab-pane container fade" id="tabBackground">
        <DressingBackground />
      </div>
    </div>
  );
}
