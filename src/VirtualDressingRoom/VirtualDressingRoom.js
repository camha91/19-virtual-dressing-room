import React from "react";
import Drawer from "./Drawer";
import DressingRoom from "./DressingRoom";
import { default as data } from "../Data/Data.json";
import Banner from "./Banner";

const { navPills, tabPanes } = data;

export default function VirtualDressingRoom() {
  return (
    <div className="container-fluid">
      <Banner />
      <hr />
      <div className="row">
        <Drawer navPills={navPills} tabPanes={tabPanes} />
        <DressingRoom />
      </div>
    </div>
  );
}
