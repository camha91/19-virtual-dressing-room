import React from "react";
import dataDressing from "../Data/Data.json";

export default function DressingNecklaces() {
  const renderNecklaces = () => {
    return dataDressing.tabPanes[4].necklaces.map((necklace, index) => {
      return (
        <div key={index} className="col-md-4">
          <div className="card text-center">
            <img src={necklace.imgSrc_jpg} alt={necklace.imgSrc_jpg} />
            <h4>
              <b>{necklace.desc}</b>
            </h4>
            <button>Try on</button>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container">
      <div className="row">{renderNecklaces()}</div>
    </div>
  );
}
