import React from "react";

function WritingCategories() {
  return (
    <div className="App">
      <section className="promo-section ptb-100">
        <div className="container">

          <div className="row mb-5">
            <div className="col-md-4 col-lg-3">
              <a>
                <div className=" single-promo-hover rounded text-center white-bg p-5 h-70">
                  <div class="elementor-text-editor elementor-clearfix">
                    <h5>Business Writing</h5>
                    <br></br>
                    <p>
                      Bussines Proposal Writing<br></br>Bussines Plan Writing
                      <br></br>Bussines Presentation<br></br>Reports/Case
                      Studies<br></br>Corporate Profiles<br></br>Email Writing
                      <br></br>Bussines Letter Writing
                      <br></br>Speech Writing<br></br>Script Analysis<br></br>
                      Script Editing
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-3">
              <a>
                <div className=" single-promo-hover rounded text-center white-bg p-5 h-70">
                <div class="elementor-text-editor elementor-clearfix">
                <h5>Web Content Writing</h5>
                <br></br>
                  <p>
                    <p>
                      Web Copy Writing<br></br>Product Description<br></br>White
                      Paper Writing<br></br>Amazon Product description<br></br>
                      Landing Page Copywriting<br></br>Website Content Revamp
                    </p>
                  </p>
                </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-3">
              <a>
                <div className=" single-promo-hover rounded text-center white-bg p-5 h-70">
                <div class="elementor-text-editor elementor-clearfix">
                <h5>SEO Content Writing</h5>
                <br></br>
                  <p>
                    Article Writing<br></br>Product Reviews<br></br>SEO Blog
                    Writing<br></br>SEO Newsletter Writing<br></br>web Page SEO
                    <br></br>Blog Management
                  </p>
                </div>
                </div>
              </a>
            </div>

            <div className="col-md-4 col-lg-3">
              <a>
                <div className=" single-promo-hover rounded text-center white-bg p-5 h-70">
                <div class="elementor-text-editor elementor-clearfix">
                <h5>Personal Writing</h5>
                <br></br>
                  <p>
                    Resume Writing<br></br>Cover Letters<br></br>Linkedin
                    Profile Writing<br></br>Linkedin Profile Optimization
                    <br></br>Online Digital Resume<br></br>Personal/Job
                    statement<br></br>Professional Biography
                    <br></br>Follow up letter<br></br>Thankyou letter
                  </p>
                </div>
                </div>
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 col-lg-3">
              <a>
                <div className=" single-promo-hover rounded text-center white-bg p-5 h-70">
                  <div class="elementor-text-editor elementor-clearfix">
                  <h5>Marketing Content Writing</h5>
                  <br></br>
                    <p>
                      Brochure Writing<br></br>Newsletter Writing<br></br>Press
                      Release Writing<br></br>Facebook Posts<br></br>Linkedin
                      Profile Creation
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-3">
              <a>
                <div className=" single-promo-hover rounded text-center white-bg p-5 h-70">
                <div class="elementor-text-editor elementor-clearfix">
                <h5>Creative Writing</h5> <br></br>
                  <p>
                    <p>
                      Ebook Writing<br></br>Editing<br></br>Proof Reading
                      <br></br>Infographs<br></br>Slogan Writing<br></br>Video
                      Script Writing
                    </p>
                  </p>
                </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-3">
              <a>
                <div className=" single-promo-hover rounded text-center white-bg p-5 h-70">
                <div class="elementor-text-editor elementor-clearfix">
                <h5>Other Services</h5> <br></br>
                  <p>
                    Editing and Proofreading<br></br>Samples
                  </p>
                </div>
                </div>
              </a>
            </div>

            <div className="col-md-4 col-lg-3">
              <a>
                <div className=" single-promo-hover rounded text-center white-bg p-5 h-70">
                  <div className="elementor-social-icons-wrapper">
                  <h5>Social Media</h5> <br></br>
                    <a
                      className="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-repeater-item-ec805a7"
                      href="#"
                      target="_blank"
                      style={{textDecoration:'none',fontSize:25}}
                    >
                      {/* <span className="elementor-screen-only">Facebook</span> */}
                      <i className="fa fa-facebook"></i>{" "}&emsp;
                    </a>
                    <a
                      className="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-repeater-item-1918afb"
                      href="#"
                      target="_blank"
                      style={{textDecoration:'none',fontSize:25}}
                    >
                      {/* <span className="elementor-screen-only">Twitter</span> */}
                      <i className="fa fa-twitter"></i>{" "}&emsp;
                    </a>
                    <a
                      className="elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-repeater-item-2e5a2db"
                      href="#"
                      target="_blank"
                      style={{fontSize:25}}
                    >
                      {/* <span className="elementor-screen-only">Youtube</span> */}
                      <i className="fa fa-youtube"></i>{" "}
                    </a>
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

export default WritingCategories;
