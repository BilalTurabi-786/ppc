import React from "react";

function GetSomeone() {
  return (
    <div className="App">
      <section className="call-to-action ptb-70" style={{backgroundImage: "url(img/cta-bg.jpg)", backgroundPosition:"no-repeat",backgroundPosition: "center",backgroundSize: "cover"}}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-9">
                    <div className="section-heading text-center text-white mb-2">
                        <h2 className="text-white">Chemical Engineering Homework Help</h2>
                        <p >Students of chemical engineering need to study chemistry and physics in addition to engineering. This makes for a heavy workload and difficult tasks. Our team of experts specialize in nanotechnology, chemical reactors, biotechnology, and many other topics. They will work with you to ensure you have a good understanding of the underlying principles. Our engineering homework help service will support you in everything from answering specific questions for short homework tasks to passing your final examinations.</p>
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
