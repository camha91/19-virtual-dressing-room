import React from "react";
import dataDressing from "../Data/Data.json";

export default function DressingBackground() {
  const renderBackgrounds = () => {
    return dataDressing.tabPanes[6].backgrounds.map((background, index) => {
      return (
        <div key={index} className="col-md-4">
          <div className="card text-center">
            <img src={background.imgSrc_jpg} alt={background.imgSrc_jpg} />
            <h4>
              <b>{background.desc}</b>
            </h4>
            <button>Try on</button>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <div className="container">
        <div className="row">{renderBackgrounds()}</div>
      </div>
    </div>
  );
}
