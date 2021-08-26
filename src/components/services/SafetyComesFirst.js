import React from "react";
import { Image } from "react-bootstrap";

export default function PortfolioCards() {
  return (
    <div className="App">
      <section className="promo-section ptb-100">
        <div className="container">
          <h2 className="text-center mb-3">Your Safety Comes First</h2>
          {/* <span className="animate-border mr-auto ml-auto mb-4"></span> */}
          <p className="text-center mb-5">
            Thousands of students trust Theassignmentwriting.com with their
            work. Here’s why.
          </p>
          <div className="row mb-4" style={{ justifyContent: "center" }}>
            <div className="col-md-4 col-lg-1">
              <img src="img/SS2Se.png" />
            </div>

            <div className="col-md-4 col-lg-6">
              <a>
                <div
                  className="single-promo-2 single-promo-hover rounded white-bg p-0 h-100"
                >
                  <div class="elementor-image-box-content">
                    <h3 class="elementor-image-box-title">Secure Payments</h3>
                    <p class="elementor-image-box-description">
                      Sleep tight: PayPal watches over your rights.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="row mb-4" style={{ justifyContent: "center" }}>
            <div className="col-md-4 col-lg-1">
              <img src="img/SSS3e.png" />
            </div>

            <div className="col-md-4 col-lg-6">
              <a>
                <div className="single-promo-2 single-promo-hover rounded white-bg p-0 h-100">
                  <div class="elementor-image-box-content">
                    <h3 class="elementor-image-box-title">Data Protection</h3>
                    <p class="elementor-image-box-description">
                      We encrypt everything. It's all confidential.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="row mb-4" style={{ justifyContent: "center" }}>
            <div className="col-md-4 col-lg-1">
              <img src="img/Untissdsadtled-2.png" />
            </div>
            <div className="col-md-4 col-lg-6">
              <a>
                <div className="single-promo-2 single-promo-hover rounded white-bg p-0 h-100">
                  <div class="elementor-image-box-content">
                    <h3 class="elementor-image-box-title">
                      Guaranteed Originality
                    </h3>
                    <p class="elementor-image-box-description">
                      Get a free plagiarism report upon request.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
