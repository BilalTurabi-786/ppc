import React from "react";
import { Image } from "react-bootstrap";

export default function NumberSayItAll() {
  return (
    <div className="App">
      <section
        className="call-to-action ptb-100"
        style={{
          background: "url(img/ctg-bg-2.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundPosition: "cover",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-8">
              <div className="call-to-action-content text-white text-center mb-4">
                <h2 className="text-white mb-1">THE NUMBERS SAY IT ALL</h2>
                <p className="lead"></p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="single-counter p-4 text-center text-white">
                <span class="elementor-icon elementor-animation-">
                  <i aria-hidden="true" className="fa fa-truck"></i>{" "}
                </span>
                <span className="ti-medall-alt icon-md"></span>
                <h1 style={{ fontSize: 60 }} className="mb-2 text-white">
                  6583
                </h1>
                <h5 className="text-white">DELIVERED ORDERS</h5>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="single-counter p-4 text-center text-white">
                <span class="elementor-icon elementor-animation-">
                  <i aria-hidden="true" className="fa fa-user-circle"></i>{" "}
                </span>
                <span className="ti-headphone-alt icon-md"></span>
                <h1 style={{ fontSize: 60 }} className="mb-2 text-white">
                  2000
                </h1>
                <h5 className="text-white">AUTHORS</h5>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="single-counter p-4 text-center text-white">
                <span class="elementor-icon elementor-animation-">
                  <i aria-hidden="true" className="fa fa-users"></i>{" "}
                </span>
                <span className="ti-cup icon-md"></span>
                <h1 style={{ fontSize: 60 }} className="mb-2 text-white">
                  4.9/5
                </h1>
                <h5 className="text-white">CLIENT RATING</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
