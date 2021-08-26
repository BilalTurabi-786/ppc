import React from "react";


function CardSection() {
  return (
    <div className="App">
      
      <section className="promo-section ptb-100">
        <div className="container">
               <h2 className="text-center mb-5">What You Will Get</h2>
               
            <div className="row mb-3">
            <div className="col-md-4 col-lg-4">
                    <a >
                        <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-5 h-100">
                            {/* <div className="circle-icon">
                                <span className="ti-dashboard text-white"></span>
                            </div> */}
                            <h5>Provision for revisions</h5>
                            <p> Since we believe in the relentless hard work and strive to perfection, students are free to send back their assignments for modification. Our experts are committed to flawless assignments; therefore, students are welcome to ask for revisions as much as they wish until they get a satisfying copy.</p>
                        </div>
                    </a>
                </div>

                <div className="col-md-4 col-lg-4">
                    <a >
                        <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-5 h-100">
                            {/* <div className="circle-icon">
                                <span className="ti-headphone-alt text-white"></span>
                            </div> */}
                            <h5>No tolerance for plagiarism</h5>
                            <p> All students, seeking our help, can rest assured that the assignment they receive is original, free from any plagiarism. Our authenticity and legitimacy as a business assignment help provider cannot be questioned.</p>
                        </div>
                    </a>
                </div>
                <div className="col-md-4 col-lg-4">
                    <a >
                        <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-5 h-100">
                            {/* <div className="circle-icon">
                                <span className="ti-music-alt text-white"></span>
                            </div> */}
                            <h5>Money-back guarantee.</h5>
                            <p> We appreciate that the students looking for homework assistance have their expectations. Although our only goal is to deliver satisfactory and most appropriate solutions, we may fall short of the students’ desires or expectations. In such a case, Assignment Help will swiftly refund cash as our guarantee policy states, even though the work has already been completed.</p>
                        </div>
                    </a>
                </div>
              
          </div>

            <div className="row ">
                <div className="col-md-4 col-lg-4">
                    <a >
                        <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-5 h-100">
                            {/* <div className="circle-icon">
                                <span className="ti-headphone-alt text-white"></span>
                            </div> */}
                            <h5>Order tracking</h5>
                            <p>Staying in the dark, not knowing the actual state of the order – all these can cause unnecessary anxiety and panic. It also leaves students little room to take alternative actions should the assignment delay or fail to be delivered. Students have direct access to the experts serving them, hence, able to follow the progress on the orders any time they want. There is also a free SMS service available to the students for tracking the orders.</p>
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
