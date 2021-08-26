import React from "react";

export default function OurExpertwriter() {
  return (
    <div className="App">
      <section className="call-to-action ptb-70" style={{backgroundImage: "url(img/cta-bg.jpg)", backgroundPosition:"no-repeat",backgroundPosition: "center",backgroundSize: "cover"}}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-9">
                    <div className="section-heading text-center text-white mb-5">
                        <h2 className="text-white">Our Expert Writers</h2>
                        <p className="lead">Our professional team consists of highly skilled and professional assignment writers who have relevant subject degrees in hand with the strong passion for academic writing. <br></br> With all their devotion and professionalism, our team of 200+  professional experts ensures that the best assignment writing service is provided to the scholars looking for assistance in any subject or field.</p>
                       
                    </div>
                </div>
            </div>
            {/* <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8">
                    <div className="analysis-form-wrap text-center">
                        <div className="col-lg-4 col-md-12 p-0">
                            <div className="form-group analysis-form-group">
                                <span className="analysis-form-input">
                                    <input type="url" name="url" size="40" className="form-control" placeholder="Type website URL"/>
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 p-0">
                            <div className="form-group analysis-form-group analysis-form-border">
                                <span className="analysis-form-input">
                                    <input type="email" name="email" size="40" className="form-control" placeholder="Your Email"/>
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 p-0">
                            <div className="form-group">
                                <input type="submit" value="Check Now"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
        <div className="cta-image d-none d-lg-block d-md-block">
            <img src="img/cta-1-man.svg" width="200" className="img-left" alt="cta"/>
            {/* <img src="img/cta-1-mike.svg" width="200" className="img-right" alt="cta"/> */}
        </div>
    </section>

    </div>
  );
}


