import React from "react";

function GetSomeone() {
  return (
    <div className="App">
      <section className="call-to-action ptb-70" style={{backgroundImage: "url(img/cta-bg.jpg)", backgroundPosition:"no-repeat",backgroundPosition: "center",backgroundSize: "cover"}}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-9">
                    <div className="section-heading text-center text-white mb-2">
                        <h2 className="text-white">Is Programming Assignment Help Worth It?</h2>
                        <p>We work to order to fit the needs of each individual student; however, services have a couple of things in common:</p>
                        <p>Programming assignment help always is carried out by qualified professionals</p>
                        <p>Help with programming assignment is always affordable — cheap enough for any student budget</p>
                        <p className="lead">If you request our help, in addition to the coding part of your homework, our writers can provide you with a custom written summary of the work. This will help you understand the process behind the programming, useful both for examinations and future tasks. We can also add comments to the code to help you understand the most important sections and to allow you to make additions later on. Finally, our programming assignment help includes providing test cases for you to check the code on an individual level. Equipped with our custom written test cases, you can easily create more of your own — for the same code or for other pieces of code in the same programming language</p>
                        <p className="lead">When you first start programming, you may find the process quite time-consuming, but with practice, you will become faster. The problem is, early on, you may not always f dedicate enough time to programming due to various other commitments. Our team of professionals have been programming for years and will complete the task in no time, giving you the chance to learn at your own speed without worrying about missed deadlines</p>
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
