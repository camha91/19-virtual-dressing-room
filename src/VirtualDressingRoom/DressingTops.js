import React from "react";
import dataDressing from "../Data/Data.json";

export default function DressingTops() {
  const renderTops = () => {
    return dataDressing.tabPanes[0].tops.map((top, index) => {
      console.log(dataDressing.tabPanes);
      return (
        <div key={index} className="col-md-4">
          <div className="card text-center">
            <img src={top.imgSrc_jpg} alt={top.imgSrc_jpg} />
            <h4>
              <b>{top.desc}</b>
            </h4>
            <button>Try on</button>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container">
      <div className="row">{renderTops()}</div>
    </div>
  );
}
