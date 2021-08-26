import React from "react";

export default function ClientSection() {
  return (
    <>
      <div
        className="client-section ptb-100"
        style={{
          backgroundImage: "url('img/client-bg.jpg')",
          backgroundPosition: "no-repeat",
          backgroundPosition: "center",
          backgroundPosition: "center / cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-9">
              <div className="client-heading-wrap mb-5">
                <h3 className="mb-0">
                  <span>
                    <b>72%</b>
                  </span>
                  &nbsp;of students use assignment help services at least once.
                  You just have to choose a quality writing company.
                </h3>
              </div>
            </div>
          </div>
          <div className="row  ">
            <div className="col-md-6 col-lg-6">
              <div className=" client-para">
                  <img src="img/icon-benefits-1-1.png" width="60" height="50"/>
                <div class="elementor-image-box-content">
                  <h3 class="elementor-image-box-title">UK Team</h3>
                  <p class="elementor-image-box-description">
                    We've been called the UK's premier essay writing service for
                    a good reason: our dedication to providing students with an
                    affordable, quality service
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6">
              <div className=" client-para">
              <img src="img/icon-benefits-2-1.png" width="50" height="50"/>
                <div class="elementor-image-box-content">
                  <h3 class="elementor-image-box-title">Guarantees</h3>
                  <p class="elementor-image-box-description">
                    Our quality guarantees offer you peace of mind about the
                    work you receive from us and assurance that your personal
                    and payment details are safe and secure.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row ">
            <div className="col-md-6 col-lg-6">
              <div className=" client-para">
              <img src="img/icon-benefits-3-1.png" width="50" height="50"/>
                <div class="elementor-image-box-content">
                  <h3 class="elementor-image-box-title">Writers testing</h3>
                  <p class="elementor-image-box-description">
                    We rigorously test our writers and check their
                    qualifications and experience before engaging them and
                    periodically review their work to ensure the highest
                    standards are maintained.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6">
              <div className=" client-para">
              <img src="img/icon-benefits-4-1.png" width="60" height="50"/>
                <div class="elementor-image-box-content">
                  <h3 class="elementor-image-box-title">Care Centre</h3>
                  <p class="elementor-image-box-description">
                    We have a dedicated team of customer representatives
                    available 24/7 to any your questions about any aspect of our
                    products and services.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!--clients logo start--> */}
          {/* <div className="row align-items-center justify-content-center mb-4">
            <div className="col-md-10 col-lg-9">
              <div className="owl-carousel owl-theme clients-carousel dot-indicator client-logo-wrap"> */}
                {/* <div className="item single-client">
                     <img src="img/clients-logo-01.png" alt="client logo" className="client-img"/>
                 </div>
                 <div className="item single-client">
                     <img src="img/clients-logo-02.png" alt="client logo" className="client-img"/>
                 </div>
                 <div className="item single-client">
                     <img src="img/clients-logo-03.png" alt="client logo" className="client-img"/>
                 </div>
                 <div className="item single-client">
                     <img src="img/clients-logo-04.png" alt="client logo" className="client-img"/>
                 </div>
                 <div className="item single-client">
                     <img src="img/clients-logo-05.png" alt="client logo" className="client-img"/>
                 </div>
                 <div className="item single-client">
                     <img src="img/clients-logo-06.png" alt="client logo" className="client-img"/>
                 </div>
                 <div className="item single-client">
                     <img src="img/clients-logo-07.png" alt="client logo" className="client-img"/>
                 </div>
                 <div className="item single-client">
                     <img src="img/clients-logo-08.png" alt="client logo" className="client-img"/>
                 </div> */}
              {/* </div>
            </div>
          </div> */}
          {/* <!--clients logo end--> */}
        </div>
      </div>
    </>
  );
}
