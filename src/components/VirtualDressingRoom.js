import React from "react";
import Drawer from "./Drawer";
import DressingRoom from "./DressingRoom";
import { default as data } from "../data/Data.json";
import Banner from "./Banner";
import "../assets/css/style.css";

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
