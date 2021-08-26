import React from "react";

function GetSomeone() {
  return (
    <div className="App">
      <section className="call-to-action ptb-70" style={{backgroundImage: "url(img/cta-bg.jpg)", backgroundPosition:"no-repeat",backgroundPosition: "center",backgroundSize: "cover"}}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-9">
                    <div className="section-heading text-center text-white mb-2">
                        <h2 className="text-white">Order Your Physics Homework Help In A Few Simple Steps</h2>
                        <p >Ordering physics assignment help from Assignment Help is extremely easy. Simply contact our customer support, available 24/7. Give us the details of your assignment – everything from page length, deadline, question requirements and specifications, and anything else we need to know to provide you a no-obligation quote. If you decide to hire our physics homework helpers, we will provide you with a list of the most qualified writers from which you will choose your favorite. We’ll put you in direct contact with your writer so that you can go over any details. Then just sit back and let us do the rest! We promise you won’t be disappointed!</p>
                        <p>If you aren’t completely satisfied with your paper or feel that your writer hasn’t met all of the assignment’s requirements, he or she will make revisions free of charge. Of course, you’ll want to leave enough time to give us the opportunity to revise before your deadline, but that doesn’t mean we won’t do all we can to ensure your satisfaction. We want you to come back to Assignment Help whenever you need help with physics homework, so we’ll do all we can to make your experience with us a great one</p>
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
