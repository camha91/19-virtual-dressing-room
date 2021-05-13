import React from "react";
import dataDressing from "../Data/Data.json";

export default function DressingHandbags() {
  const renderHandbags = () => {
    return dataDressing.tabPanes[3].handbags.map((handbag, index) => {
      return (
        <div key={index} className="col-md-4">
          <div className="card text-center">
            <img src={handbag.imgSrc_jpg} alt={handbag.imgSrc_jpg} />
            <h4>
              <b>{handbag.desc}</b>
            </h4>
            <button>Try on</button>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <div className="row">{renderHandbags()}</div>
    </div>
  );
}
