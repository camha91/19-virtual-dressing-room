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
        tabBotClothes
        <DressingBottoms />
      </div>
      <div className="tab-pane container fade" id="tabShoes">
        tabShoes
        <DressingShoes />
      </div>
      <div className="tab-pane container fade" id="tabHandBags">
        tabHandBags
        <DressingHandbags />
      </div>
      <div className="tab-pane container fade" id="tabNecklaces">
        tabNecklaces
        <DressingNecklaces />
      </div>
      <div className="tab-pane container fade" id="tabHairStyle">
        tabHairStyle
        <DressingHairStyle />
      </div>
      <div className="tab-pane container fade" id="tabBackground">
        tabBackground
        <DressingBackground />
      </div>
    </div>
  );
}
