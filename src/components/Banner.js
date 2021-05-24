import React from "react";

export default function Banner() {
    return (
        <div className="row">
            <div className="col-4 text-right">
                <img
                    style={{ width: "180px" }}
                    src="./img/fashionLogo.png"
                    alt="Card"
                />
            </div>
            <div className="col-8 pt-5">
                <h3 className="display-4">Virtual Dressing Room</h3>
            </div>
            <hr />
        </div>
    );
}
