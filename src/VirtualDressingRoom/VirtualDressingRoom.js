import React from "react";

export default function VirtualDressingRoom() {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="text-center">
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
      <div class="row">
        <div class="col-md-8">
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a
                class="nav-link active btn-default"
                data-toggle="pill"
                href="#tabTopClothes"
              >
                TOPS
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link btn-default"
                data-toggle="pill"
                href="#tabBotClothes"
              >
                PANTS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" href="#tabShoes">
                SHOES
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" href="#tabHandBags">
                BAGS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" href="#tabNecklaces">
                ACCESSORIES
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" href="#tabHairStyle">
                HAIR STYLES
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" href="#tabBackground">
                BACKGROUND
              </a>
            </li>
          </ul>

          <div class="well">
            {/* <!-- Tab panes --> */}
            <div class="tab-content">
              <div class="tab-pane container active" id="tabTopClothes">
                <div class="container">
                  <div class="row">
                    <div class="col-md-3">
                      <div class="card text-center">
                        <img src="assets/images/clothes/topcloth1_show.jpg" />
                        <h4>
                          <b>Top Cloth 1</b>
                        </h4>
                        <button>Try on</button>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="card text-center">
                        <img src="assets/images/clothes/topcloth1_show.jpg" />
                        <h4>
                          <b>Top Cloth 1</b>
                        </h4>
                        <button>Try on</button>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="card text-center">
                        <img src="assets/images/clothes/topcloth1_show.jpg" />
                        <h4>
                          <b>Top Cloth 1</b>
                        </h4>
                        <button>Try on</button>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="card text-center">
                        <img src="assets/images/clothes/topcloth1_show.jpg" />
                        <h4>
                          <b>Top Cloth 1</b>
                        </h4>
                        <button>Try on</button>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="card text-center">
                        <img src="assets/images/clothes/topcloth1_show.jpg" />
                        <h4>
                          <b>Top Cloth 1</b>
                        </h4>
                        <button>Try on</button>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="card text-center">
                        <img src="assets/images/clothes/topcloth1_show.jpg" />
                        <h4>
                          <b>Top Cloth 1</b>
                        </h4>
                        <button>Try on</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane container fade" id="tabBotClothes">
                tabBotClothes
              </div>
              <div class="tab-pane container fade" id="tabShoes">
                tabShoes
              </div>
              <div class="tab-pane container fade" id="tabHandBags">
                tabHandBags
              </div>
              <div class="tab-pane container fade" id="tabNecklaces">
                tabNecklaces
              </div>
              <div class="tab-pane container fade" id="tabHairStyle">
                tabHairStyle
              </div>
              <div class="tab-pane container fade" id="tabBackground">
                tabBackground
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
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
                backgroundImage:
                  'url("assets/images/background/background5.jpg")',
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
