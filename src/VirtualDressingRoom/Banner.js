import React from "react";

export default function Banner() {
  return (
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
  );
}
