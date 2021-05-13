import React from "react";
import dataDressing from "../Data/Data.json";

export default function DressingBottoms() {
  const renderBottoms = () => {
    return dataDressing.tabPanes[1].bottoms.map((bottom, index) => {
      return (
        <div key={index} className="col-md-4">
          <div className="card text-center">
            <img src={bottom.imgSrc_jpg} alt={bottom.imgSrc_jpg} />
            <h4>
              <b>{bottom.desc}</b>
            </h4>
            <button>Try on</button>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <div className="row">{renderBottoms()}</div>
    </div>
  );
}
