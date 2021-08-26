import React from "react";
import { Image } from "react-bootstrap";

export default function PortfolioCards() {
  return (
    <div className="App">
      <section className="promo-section ptb-100">
        <div className="container">
          <h2 className="text-center mb-1">Video Portfolio</h2>
          <span className="animate-border mr-auto ml-auto mb-4"></span>

          {/* For Videos */}
          <div className="row mb-4">
            <div className="col-md-4 col-lg-4">
              <a>
                <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-0 h-60">
                  {/* <div className="circle-icon">
                                <span className="ti-music-alt text-white"></span>
                            </div> */}
                  {/* <h5>Market Research</h5> */}
                  <video
                    src="img/WhatsApp Video 2020-07-10 at 10.27.13 PM.mp4"
                    controls
                    width="350"
                    height="220"
                    poster="img/1.PNG"
                  ></video>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-4">
              <a>
                <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-0 h-60">
                  {/* <div className="circle-icon">
                                <span className="ti-dashboard text-white"></span>
                            </div>
                            <h5>Content Marketing</h5> */}
                  <video
                    src="img/WhatsApp Video 2020-07-12 at 3.45.50 AM.mp4"
                    controls
                    width="350"
                    height="220"
                    poster="img/2.PNG"
                  ></video>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-4">
              <a>
                <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-0 h-60">
                  {/* <div className="circle-icon">
                                <span className="ti-headphone-alt text-white"></span>
                            </div>
                            <h5>Email Marketing</h5> */}
                  <video
                    src="img/WhatsApp Video 2020-07-12 at 3.48.04 AM.mp4"
                    controls
                    width="350"
                    height="220"
                    poster="img/3.PNG"
                  ></video>
                </div>
              </a>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-md-4 col-lg-4">
              <a>
                <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-0 h-60">
                  {/* <div className="circle-icon">
                                <span className="ti-music-alt text-white"></span>
                            </div> */}
                  {/* <h5>Market Research</h5> */}
                  <video
                    src="img/WhatsApp Video 2020-07-14 at 4.28.11 AM.mp4"
                    controls
                    width="350"
                    height="220"
                    poster="img/4.PNG"
                  ></video>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-4">
              <a>
                <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-0 h-60">
                  {/* <div className="circle-icon">
                                <span className="ti-dashboard text-white"></span>
                            </div>
                            <h5>Content Marketing</h5> */}
                  <video
                    src="img/WhatsApp Video 2020-07-22 at 6.34.45 AM.mp4"
                    controls
                    width="350"
                    height="220"
                    poster="img/5.PNG"
                  ></video>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-4">
              <a>
                <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-0 h-60">
                  {/* <div className="circle-icon">
                                <span className="ti-headphone-alt text-white"></span>
                            </div>
                            <h5>Email Marketing</h5> */}
                  <video
                    src="img/WhatsApp Video 2021-02-10 at 9.15.42 PM.mp4"
                    controls
                    width="350"
                    height="220"
                    poster="img/6.PNG"
                  ></video>
                </div>
              </a>
            </div>
          </div>

          <h2 className="text-center mb-3">Images Portfolio</h2>
          <span className="animate-border mr-auto ml-auto mb-4"></span>

          <div className="row mb-4">
            <div className="col-md-4 col-lg-4">
              <a>
                <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-0 h-100">
                  {/* <div className="circle-icon">
                                <span className="ti-music-alt text-white"></span>
                            </div> */}
                  {/* <h5>Market Research</h5> */}
                  <Image src="img/1.jpg" width="350" height="450" thumbnail />
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-4">
              <a>
                <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-0 h-100">
                  {/* <div className="circle-icon">
                                <span className="ti-dashboard text-white"></span>
                            </div>
                            <h5>Content Marketing</h5> */}
                  <Image src="img/2.jpg" width="350" height="450" thumbnail />
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-4">
              <a>
                <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-0 h-100">
                  {/* <div className="circle-icon">
                                <span className="ti-headphone-alt text-white"></span>
                            </div>
                            <h5>Email Marketing</h5> */}
                  <Image src="img/3.jpg" width="350" height="450" thumbnail />
                </div>
              </a>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-4 col-lg-4">
              <a>
                <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-0 h-100">
                  {/* <div className="circle-icon">
                                <span className="ti-music-alt text-white"></span>
                            </div> */}
                  {/* <h5>Market Research</h5> */}
                  <Image src="img/4.jpg" width="350" height="450" thumbnail />
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-4">
              <a>
                <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-0 h-100">
                  {/* <div className="circle-icon">
                                <span className="ti-dashboard text-white"></span>
                            </div>
                            <h5>Content Marketing</h5> */}
                  <Image src="img/5.jpg" width="350" height="450" thumbnail />
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-4">
              <a>
                <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-0 h-100">
                  {/* <div className="circle-icon">
                                <span className="ti-headphone-alt text-white"></span>
                            </div>
                            <h5>Email Marketing</h5> */}
                  <Image src="img/6.jpg" width="350" height="450" thumbnail />
                </div>
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 col-lg-4">
              <a>
                <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-0 h-100">
                  {/* <div className="circle-icon">
                                <span className="ti-music-alt text-white"></span>
                            </div> */}
                  {/* <h5>Market Research</h5> */}
                  <Image src="img/7.jpg" width="350" height="450" thumbnail />
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-4">
              <a>
                <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-0 h-100">
                  {/* <div className="circle-icon">
                                <span className="ti-dashboard text-white"></span>
                            </div>
                            <h5>Content Marketing</h5> */}
                  <Image src="img/8.jpg" width="350" height="450" thumbnail />
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-4">
              <a>
                <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-0 h-100">
                  {/* <div className="circle-icon">
                                <span className="ti-headphone-alt text-white"></span>
                            </div>
                            <h5>Email Marketing</h5> */}
                  <Image src="img/2.jpg" width="350" height="450" thumbnail />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
