import React from "react";

export default function Model() {
  return (
    <div className="col-md-4">
      <div class="contain">
        <div class="body"></div>
        <div class="model"></div>
        <div
          class="hairstyle"
          style={{
            width: "1000px",
            height: "1000px",
            background: 'url("assets/images/hairstyle/hairstyle2.png")',
            position: "absolute",
            top: "-75%",
            right: "-57%",
            transform: "scale(0.15)",
            zIndex: "4",
          }}
        ></div>
        <div
          class="necklace"
          style={{
            width: "500px",
            height: "1000px",
            background: 'url("assets/images/necklaces/necklace1.png")',
            position: "absolute",
            bottom: "-40%",
            right: "-3.5%",
            transform: "scale(0.5)",
            zIndex: "4",
          }}
        ></div>
        <div
          class="bikinitop"
          style={{
            width: "500px",
            height: "500px",
            background: 'url("assets/images/clothes/topcloth6.png")',
            position: "absolute",
            top: "-9%",
            left: "-5%",
            transform: "scale(0.5)",
            zIndex: "3",
          }}
        ></div>
        <div
          class="bikinibottom"
          style={{
            width: "500px",
            height: "1000px",
            background: 'url("assets/images/clothes/botcloth2.png")',
            position: "absolute",
            top: "-30%",
            left: "-5%",
            transform: "scale(0.5)",
            zIndex: "2",
          }}
        ></div>
        <div
          class="handbag"
          style={{
            width: "500px",
            height: "1000px",
            background: 'url("assets/images/handbags/handbag2.png")',
            position: "absolute",
            bottom: "-40%",
            right: "-3.5%",
            transform: "scale(0.5)",
            zIndex: "4",
          }}
        ></div>
        <div
          class="feet"
          style={{
            width: "500px",
            height: "1000px",
            background: 'url("assets/images/shoes/shoes1.png")',
            position: "absolute",
            bottom: "-37%",
            right: "-3.5%",
            transform: "scale(0.5)",
            zIndex: "1",
          }}
        ></div>
        <div
          class="background"
          style={{
            backgroundImage: 'url("assets/images/background/background5.jpg")',
          }}
        ></div>
      </div>
    </div>
  );
}
