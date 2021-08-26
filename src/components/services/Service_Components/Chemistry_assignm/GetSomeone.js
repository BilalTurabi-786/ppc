import React from "react";

function GetSomeone() {
  return (
    <div className="App">
      <section className="call-to-action ptb-70" style={{backgroundImage: "url(img/cta-bg.jpg)", backgroundPosition:"no-repeat",backgroundPosition: "center",backgroundSize: "cover"}}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-9">
                    <div className="section-heading text-center text-white mb-2">
                        <h2 className="text-white">Chemistry Assignment Assistance</h2>
                        <p className="lead">Simply give us a call, and a member of our friendly support team will provide you a quote based on the type of chemistry the assignment writing you need. Our customer support is available any time, day or night, so you can expect assistance even when working into the early hours of the morning trying to have your assignments completed. Unlike other homework help companies, before hiring one of our chemistry helpers you will receive a list of qualified experts aimed to assure that you will work with someone you feel confident about. Your grade and peace of mind are our main concern, so if you receive an assignment you aren’t completely happy with, we will gladly revise the content to your specifications at no charge.</p>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="cta-image d-none d-lg-block d-md-block">
            <img src="img/cta-1-man.svg" width="200" className="img-left" alt="cta"/>
            {/* <img src="img/cta-1-mike.svg" width="200" className="img-right" alt="cta"/> */}
        </div>
    </section>

    </div>
  );
}

export default GetSomeone;
