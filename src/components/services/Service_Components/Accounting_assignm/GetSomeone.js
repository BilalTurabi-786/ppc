import React from "react";

function GetSomeone() {
  return (
    <div className="App">
      <section className="call-to-action ptb-70" style={{backgroundImage: "url(img/cta-bg.jpg)", backgroundPosition:"no-repeat",backgroundPosition: "center",backgroundSize: "cover"}}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-9">
                    <div className="section-heading text-center text-white mb-2">
                        <h2 className="text-white">Get Help With Your Accounting Assignment Online</h2>
                        <p className="lead">Let us guess – you’ve taken an accounting course at your college or university, and while it is really rewarding, it is also extremely hard. Chances are, you are struggling with homework tasks to no avail, and desperately want to get accounting homework help from the esteemed experts. But now you can forget your worries, as it’s easy to find accounting the assignment writing online with Assignment Help. That’s because our writers understand how to complete complex account problems and balance your books. Whether you’re dealing with accounts receivable or accounts payable, we know the exact steps that need to be taken to solve your work problem. We’ll give you the accounting the assignment writing you need in a timely manner. Hundreds of students and professional workers from around the world turn to us for help with accounting assignment.</p>
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
