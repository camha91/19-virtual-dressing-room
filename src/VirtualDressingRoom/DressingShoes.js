import React from "react";
import dataDressing from "../Data/Data.json";

export default function DressingShoes() {
  const renderShoes = () => {
    return dataDressing.tabPanes[2].shoes.map((shoe, index) => {
      return (
        <div key={index} className="col-md-4">
          <div className="card text-center">
            <img src={shoe.imgSrc_jpg} alt={shoe.imgSrc_jpg} />
            <h4>
              <b>{shoe.desc}</b>
            </h4>
            <button>Try on</button>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container">
      <div className="row">{renderShoes()}</div>
    </div>
  );
}
