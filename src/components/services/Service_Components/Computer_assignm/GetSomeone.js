import React from "react";

function GetSomeone() {
  return (
    <div className="App">
      <section className="call-to-action ptb-70" style={{backgroundImage: "url(img/cta-bg.jpg)", backgroundPosition:"no-repeat",backgroundPosition: "center",backgroundSize: "cover"}}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-9">
                    <div className="section-heading text-center text-white mb-2">
                        <h2 className="text-white">Help with Writing Biology Homework</h2>
                        <p className="lead">The writers at The Assignment Writing are very discreet and will be sure to send you your paper directly to your email. This means that only you will know that you have purchased a paper to turn in as your own. Additionally, all of the work we provide is written entirely from scratch, so you can be sure that what you get won’t be plagiarized or come from a huge database of previously used papers like the ones that some of our competitors provide. The quality and price for the help with biology assignments we provide is what sets us apart. We understand the value of great service and aim to meet all of your expectations.</p>
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
