import React from "react";

function GetSomeone() {
  return (
    <div className="App">
      <section className="call-to-action ptb-70" style={{backgroundImage: "url(img/cta-bg.jpg)", backgroundPosition:"no-repeat",backgroundPosition: "center",backgroundSize: "cover"}}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-9">
                    <div className="section-heading text-center text-white mb-2">
                        <h2 className="text-white">Should You Get Help With Psychology Assignment From The Assignment Writing?</h2>
                        <p className="lead">Assignment Help is the leading provider of psychology homework help. That’s because we know how what students want when they ask, “do my psychology homework.” If you want to feel confident that your submission meets all of your school’s requirements, then get in contact with us right away. Unlike some other writing services, which have ESL writers on the team, we’ll provide high quality cheap content from English speaking natives. You deserve to get good grades without all the hard work. When you’re ready to get your work done, order through us!</p>
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
