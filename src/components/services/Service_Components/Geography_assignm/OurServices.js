import React from "react";

function OurService() {
  return (
      <div className="App">
    <section className="services-section ptb-100 gray-light-bg">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="section-heading text-center mb-5">
                        {/* <strong className="color-secondary">Our Services</strong> */}
                        <h2>Need Support With Your Geography Homework Assignments?</h2>
                        <span className="animate-border mr-auto ml-auto mb-4"></span>
                       
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-6 col-sm-6">
                    <div  className="services-single text-center p-5 my-md-3 my-lg-3 my-sm-0 shadow-sm white-bg " style={{borderRadius:30}}>
                        <span className="ti-announcement icon-lg color-secondary d-block mb-4"></span>
                        {/* <h5>On Time Delivery</h5> */}
                        <p className="mb-3">Sometimes it seems as though a school year is going well and ticking along quite nicely – and then you receive a project that is just that little bit too much for you. Assignment Help can take on this type of custom work, as we have a huge group of individuals with years of experience in providing help with geography homework. Our affordable service means that we can take the task on for you and help you manage your workload – or simply just get one really good grade to be proud of.</p>
                        {/* <a href="services-details.html" target="_blank" className="detail-link mt-4">Read more <span
                                className="ti-arrow-right"></span></a> */}
                    </div>
                </div>
               
            </div>
        </div>
    </section>
       </div>
  );
}

export default OurService;
