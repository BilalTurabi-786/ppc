import React from "react";
import { Carousel } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";

export default function StudentTestimonials() {
  //     const [value, setValue] = useState(0);

  //         const onChange = value => {
  //         setValue(value);
  //   }
  return (
    <>
      <section
        className="testimonial-section ptb-100"
        style={{
          backgroundImage: "url(img/testimonial-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "center cover",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-lg-5">
              <div className="testimonial-heading text-white">
                <h2 className="text-white">STUDENT TESTIMONIALS</h2>
                <span className="animate-border mb-4"></span>
                <p>
                  Find out what students from all over the globe say about our
                  online academic writing services.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="testimonial-content-wrap">
                <img
                  src="/img/testimonial-arrow-top.png"
                  className="img-fluid testimonial-tb-shape shape-top"
                  alt="testimonial shape"
                />
                <div className="owl-carousel owl-theme client-testimonial-1 custom-dot testimonial-shape">
                  <div>
                    <Carousel nextIcon="" prevIcon="">
                      <Carousel.Item>
                        <div className="testimonial-quote-wrap">
                          <div className="media author-info mb-3">
                            <div className="author-img mr-3">
                              <img
                                src="img/1490948836 (1).jpg"
                                alt="client"
                                className="img-fluid"
                              />
                            </div>
                            <div className="media-body text-white">
                              <h6 className="mb-0 text-white">John Doe</h6>
                                <span>CEO</span>
                            </div>
                            <span
                              className="fa fa-quote-right icon-md text-white"
                              style={{ fontSize: 50 }}
                            ></span>
                          </div>
                          <div className="client-say text-white">
                            <p>
                              I was looking for someone who could do my
                              assignment on a complex topic. On a recommendation
                              of a friend, I hired an online expert from this
                              website. He was incredibly talented! I couldn’t
                              ask for more.
                            </p>
                          </div>
                        </div>
                      </Carousel.Item>
                      <Carousel.Item>
                        <div className="item">
                          <div className="testimonial-quote-wrap">
                            <div className="media author-info mb-3">
                              <div className="author-img mr-3">
                                <img
                                  src="img/1487845223 (1).jpg"
                                  alt="client"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="media-body text-white">
                                <h6 className="mb-0 text-white">Noha Claven</h6>
                                  {/* <span>BizBite</span> */}
                              </div>
                              <span
                                className="fa fa-quote-right icon-md text-white"
                                style={{ fontSize: 50 }}
                              ></span>
                            </div>
                            <div className="client-say text-white">
                              <p>
                                Thank you for the help. I have received my paper
                                and read it twice, haven’t found any
                                mistake...Looking forward for decent marks. I
                                will let you know my grades once the result is
                                announced.
                              </p>
                            </div>
                          </div>
                        </div>
                      </Carousel.Item>
                      <Carousel.Item>
                        <div className="item">
                          <div className="testimonial-quote-wrap">
                            <div className="media author-info mb-3">
                              <div className="author-img mr-3">
                                <img
                                  src="img/1573818426 (1).jpg"
                                  alt="client"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="media-body text-white">
                                <h6 className="mb-0 text-white">Joshu Wu</h6>
                                  <span>CEO</span>
                              </div>
                              <span
                                className="fa fa-quote-right icon-md text-white"
                                style={{ fontSize: 50 }}
                              ></span>
                            </div>
                            <div className="client-say text-white">
                              <p>
                                I wasn’t able to cope with the tricky topic that
                                I was assigned, so asked them for the
                                assistance. They were quick to respond and
                                assured me quality work on time. Thankfully they
                                were true to their words. Maintain the same!
                              </p>
                            </div>
                          </div>
                        </div>
                      </Carousel.Item>

                      {/* <Carousel.Item>
                            <div className="item">
                                <div className="testimonial-quote-wrap">
                                    <div className="media author-info mb-3">
                                        <div className="author-img mr-3">
                                            <img src="img/client-4.jpg" alt="client" className="img-fluid"/>
                                        </div>
                                        <div className="media-body text-white">
                                            <h5 className="mb-0 text-white">John Charles</h5>
                                            <span>BizBite</span>
                                        </div>
                                        <span className="fa fa-quote-right icon-md text-white"style={{fontSize:50}}></span>
                                    </div>
                                    <div className="client-say text-white">
                                        <p>Enthusiastically innovate
                                            B2C data without clicks-and-mortar convergence. Monotonectally deliver
                                            compelling testing procedures vis-a-vis B2B testing procedures. Competently
                                            evisculate integrated resources whereas global processes.
                                            Enthusiastically.</p>
                                    </div>
                                </div>
                            </div>

                            </Carousel.Item> */}
                    </Carousel>
                  </div>

                  {/* <div className="item">
                                <div className="testimonial-quote-wrap">
                                    <div className="media author-info mb-3">
                                        <div className="author-img mr-3">
                                            <img src="img/client-1.jpg" alt="client" className="img-fluid"/>
                                        </div>
                                        <div className="media-body text-white">
                                            <h5 className="mb-0 text-white">John Charles</h5>
                                            <span>BizBite</span>
                                        </div>
                                        <span className="fas fa-quote-right icon-md text-white"></span>
                                    </div>
                                    <div className="client-say text-white">
                                        <p>Interactively optimize
                                            fully researched expertise vis-a-vis plug-and-play relationships.
                                            Intrinsicly
                                            develop viral core competencies for fully tested customer service.
                                            Enthusiastically create next-generation growth strategies and.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonial-quote-wrap">
                                    <div className="media author-info mb-3">
                                        <div className="author-img mr-3">
                                            <img src="img/client-2.jpg" alt="client" className="img-fluid"/>
                                        </div>
                                        <div className="media-body text-white">
                                            <h5 className="mb-0 text-white">Arabella Ora</h5>
                                            <span>BizBite</span>
                                        </div>
                                        <span className="fas fa-quote-right icon-md text-white"></span>
                                    </div>
                                    <div className="client-say text-white">
                                        <p>Rapidiously develop user
                                            friendly growth strategies after extensive initiatives. Conveniently grow
                                            innovative benefits through fully tested deliverables. Rapidiously utilize
                                            focused platforms through end-to-end schemas.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonial-quote-wrap">
                                    <div className="media author-info mb-3">
                                        <div className="author-img mr-3">
                                            <img src="img/client-3.jpg" alt="client" className="img-fluid"/>
                                        </div>
                                        <div className="media-body text-white">
                                            <h5 className="mb-0 text-white">Jeremy Jere</h5>
                                            <span>BizBite</span>
                                        </div>
                                        <span className="fas fa-quote-right icon-md text-white"></span>
                                    </div>
                                    <div className="client-say text-white">
                                        <p>Objectively synthesize
                                            client-centered e-tailers for maintainable channels. Holisticly administrate
                                            customer directed vortals whereas tactical functionalities. Energistically
                                            monetize reliable imperatives through client-centric best practices.
                                            Collaboratively.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonial-quote-wrap">
                                    <div className="media author-info mb-3">
                                        <div className="author-img mr-3">
                                            <img src="img/client-4.jpg" alt="client" className="img-fluid"/>
                                        </div>
                                        <div className="media-body text-white">
                                            <h5 className="mb-0 text-white">John Charles</h5>
                                            <span>BizBite</span>
                                        </div>
                                        <span className="fas fa-quote-right icon-md text-white"></span>
                                    </div>
                                    <div className="client-say text-white">
                                        <p>Enthusiastically innovate
                                            B2C data without clicks-and-mortar convergence. Monotonectally deliver
                                            compelling testing procedures vis-a-vis B2B testing procedures. Competently
                                            evisculate integrated resources whereas global processes.
                                            Enthusiastically.</p>
                                    </div>
                                </div>
                            </div> */}
                </div>
                <img
                  src="./img/testimonial-arrow-bottom.png"
                  className="img-fluid testimonial-tb-shape shape-bottom"
                  alt="testimonial shape"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
