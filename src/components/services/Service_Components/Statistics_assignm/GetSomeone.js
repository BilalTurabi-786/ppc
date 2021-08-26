import React from "react";

function GetSomeone() {
  return (
    <div className="App">
      <section className="call-to-action ptb-70" style={{backgroundImage: "url(img/cta-bg.jpg)", backgroundPosition:"no-repeat",backgroundPosition: "center",backgroundSize: "cover"}}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-9">
                    <div className="section-heading text-center text-white mb-2">
                        <h2 className="text-white">Online Statistics Homework Help</h2>
                        <p className="lead">College life may be hectic – we all know that. However, it doesn’t mean that there’s no escape from the piles of assignments and lots of college events to be attended. Do you need help with statistical assignment? Do you spend hours each night struggling to complete your assignments? Are you having a hard time keeping up with the lessons in class? Do you stay up late or lose sleep wondering “Who will do my statistics assignment?”</p>

                      <p className="lead">Well, the good news is you won’t have to stress-out any longer because The Assignment Writing has all the solutions to your problems. If you’ve always dreamed to be the top of your class, that’s where your dreams may come true, as the best statistics assignment writers are here to help you. They have years of experience in the field of statistics, and will nail any assignment you have with ease</p>
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
