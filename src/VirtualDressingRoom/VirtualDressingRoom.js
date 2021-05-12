import React from "react";
import CategoryTabs from "./CategoryTabs";
import Model from "./Model";

export default function VirtualDressingRoom() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="text-center">
              <img
                style={{ height: "100px" }}
                src="assets/images/fashionLogo.png"
                alt="Card"
              />
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div className="row">
        <CategoryTabs />
        <Model />
      </div>
    </div>
  );
}
