import React from "react";


function CardSection() {
  return (
    <div className="App">
      
      <section className="promo-section ptb-100">
        <div className="container">
               <h2 className="text-center mb-5">What Are Some Sample Psychology Assignment Topics?</h2>
               <p>Some common topics are on mental and emotional problems, as well as normal and abnormal functioning of the brain. Because this subject is all about studying how the brain behaves and misbehaves, there are many serious and potentially sensitive subjects you can include in this category. Here’s some samples:</p>
            <div className="row">
                <div className="col-md-4 col-lg-3">
                    <a >
                        <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-5 h-100">
                            {/* <div className="circle-icon">
                                <span className="ti-music-alt text-white"></span>
                            </div> */}
                            {/* <h5>Market Research</h5> */}
                            <p>Aging, children, and education are all great topics for psychology homework assignments</p>
                        </div>
                    </a>
                </div>
                <div className="col-md-4 col-lg-3">
                    <a >
                        <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-5 h-100">
                            {/* <div className="circle-icon">
                                <span className="ti-dashboard text-white"></span>
                            </div>
                            <h5>Content Marketing</h5> */}
                            <p>Are human rights being met in today’s society?</p>
                        </div>
                    </a>
                </div>
                <div className="col-md-4 col-lg-3">
                    <a >
                        <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-5 h-100">
                            {/* <div className="circle-icon">
                                <span className="ti-headphone-alt text-white"></span>
                            </div>
                            <h5>Email Marketing</h5> */}
                            <p>Are we failing people who don’t receive humanitarian aid?</p>
                        </div>
                    </a>
                </div>

                <div className="col-md-4 col-lg-3">
                    <a >
                        <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-5 h-100">
                            {/* <div className="circle-icon">
                                <span className="ti-headphone-alt text-white"></span>
                            </div>
                            <h5>Email Marketing</h5> */}
                            <p>Are there really differences between men and women?</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
      
    </div>
  );
}

export default CardSection;
