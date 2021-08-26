import React from "react";

function GetSomeone() {
  return (
    <div className="App">
      <section className="call-to-action ptb-70" style={{backgroundImage: "url(img/cta-bg.jpg)", backgroundPosition:"no-repeat",backgroundPosition: "center",backgroundSize: "cover"}}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-9">
                    <div className="section-heading text-center text-white mb-2">
                        <h2 className="text-white">Where can I find someone reliable to do my economics homework?</h2>
                        <p className="mb-2">This is a question we hear all the time. And we’re happy to say that the answer is actually quite simple. The Assignment Writing is the #1 solution for your economics assignment help. We provide imaginative and unique economics papers that you can submit as your own. Our writing, editing and proofreading services cater to a large client base at different academic levels throughout the world. We fully understand that the various pressures faced by students today can be quite overwhelming..</p>

                        <p>Here’s where The Assignment Writing can help with economy homework. We can write your economics term papers, research papers, and research reports for you for one low price. No matter what your reason for hiring us, doing so will save you valuable time and stress. Unlike some of our competitors who will write economics papers without making any communication or providing any support, The Assignment Writing prides itself on customer satisfaction through all our services.</p>
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
