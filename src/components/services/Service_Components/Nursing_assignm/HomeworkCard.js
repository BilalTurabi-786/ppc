import React from "react";

function HomeworkCard() {
  return (
      <div className="App">
    <section className="services-section ptb-100 gray-light-bg">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="section-heading text-center mb-5">
                        {/* <strong className="color-secondary">Our Services</strong> */}
                        <h2>You'd Better Prioritize Your Computer Science Homework</h2>
                        <span className="animate-border mr-auto ml-auto mb-4"></span>
                        <p className="lead">When you go with us, you get much more than you do with other content providers. We work hard to go above and beyond the work that other people create. That’s because we’ve worked in this field for many years, and understand what it is that our clients need. We’ll give you the best content, 100% of the time. That’s why we provide services that include:</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div  className="services-single text-center p-5 my-md-3 my-lg-3 my-sm-0 shadow-sm white-bg " style={{borderRadius:20}}>
                        <span className="ti-announcement icon-lg color-secondary d-block mb-4"></span>
                        {/* <h5>Digital Marketing</h5> */}
                        <p className="mb-4">Covering all nursing assignment topics</p>
                       <br></br>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="services-single text-center p-5 my-md-3 my-lg-3 my-sm-0 shadow-sm white-bg " style={{borderRadius:10}}>
                        <span className="ti-light-bulb icon-lg color-secondary d-block mb-4"></span>
                        {/* <h5>Content Marketing</h5> */}
                        <p className="mb-0">Looking over your writing assignment syllabus to ensure we cover all topics</p>
                       
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="services-single text-center p-5 my-md-3 my-lg-3 my-sm-0 shadow-sm white-bg " style={{borderRadius:20}}>
                        <span className="ti-headphone-alt icon-lg color-secondary d-block mb-4"></span>
                        {/* <h5>Social Media Marketing</h5> */}
                        <p className="mb-0">Verifying with you any revisions that need to be completed</p>
                        <br></br>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="services-single text-center p-5 my-md-3 my-lg-3 my-sm-0 shadow-sm white-bg " style={{borderRadius:20}}>
                        <span className="ti-headphone-alt icon-lg color-secondary d-block mb-4"></span>
                        {/* <h5>Social Media Marketing</h5> */}
                        <p className="mb-0">Producing unique and quality service that’s affordable</p>
                        <br></br>
                    </div>
                </div>
              
            </div>
        </div>
    </section>
       </div>
  );
}

export default HomeworkCard;
