import React from "react";
import dataDressing from "../Data/Data.json";

export default function DressingHairStyle() {
  const renderHairStyles = () => {
    return dataDressing.tabPanes[5].hairStyles.map((hairStyle, index) => {
      return (
        <div key={index} className="col-md-4">
          <div className="card text-center">
            <img src={hairStyle.imgSrc_jpg} alt={hairStyle.imgSrc_jpg} />
            <h4>
              <b>{hairStyle.desc}</b>
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
        <div className="row">{renderHairStyles()}</div>
      </div>
    </div>
  );
}
