import React from "react";
import TabContent from "./TabContent";

export default function CategoryTabs() {
  return (
    <div className="col-md-8">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a
            className="nav-link active btn-default"
            data-toggle="pill"
            href="#tabTopClothes"
          >
            TOPS
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link btn-default"
            data-toggle="pill"
            href="#tabBotClothes"
          >
            PANTS
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="pill" href="#tabShoes">
            SHOES
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="pill" href="#tabHandBags">
            BAGS
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="pill" href="#tabNecklaces">
            ACCESSORIES
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="pill" href="#tabHairStyle">
            HAIR STYLES
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="pill" href="#tabBackground">
            BACKGROUND
          </a>
        </li>
      </ul>

      <div className="well">
        {/* <!-- Tab panes --> */}
        <TabContent />
      </div>
    </div>
  );
}
