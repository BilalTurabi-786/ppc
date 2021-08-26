
import React from "react";
import Typical from 'react-typical'

export default function HeroSection() {
  return (
    <>
    
      <section className="ptb-70" style={{backgroundImage: 'url(img/Writing-Your-Paper.jpg)',backgroundPosition:'cover',backgroundRepeat:'no-repeat',backgroundSize:'cover',position:'relative'}}>
      
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-12 col-lg-8">
                    <div className="hero-slider-content text-white pt-5">
                        
                        <h1 className="text-white">Get Help from {"  "}
                        <Typical 
                        loop={Infinity} wrapper ='p' steps={['the free Samples',2500, 'delievered by',2000,'Our Expert Writers',2000]}/>
                        </h1>

                        <br></br> 
                        <strong>Quality Assignment Help By Expert Writers</strong>
                        <br></br> <br></br>
                        <bold>100+ Students Support Executive to Listen Students Requirement</bold> <br></br>
                        <bold>Highest Grade for All Academic Needs</bold> <br></br>
                        <bold>10+ Years Of Experience in Academic Writing</bold> <br></br>
                        <bold>Best Assignment Writer</bold> <br></br>
                        <bold>Global Assignment Helper</bold> <br></br>
                        <bold>5,067 Academic Assignment Writers</bold> <br></br>
                        <br></br> 
                        <h1 className="text-white">4.9</h1>

                        <div className="action-btns mt-3">
                          <button href="#" className="secondary-solid-btn-1">Start Now</button>   
                        </div>
                    </div>
                </div>
                {/* <div className="col-md-12 col-lg-4">
                    <div className="image-wrap pt-5">
                        <img src="img/hero-bg-1.jpg" className="img-fluid custom-width" alt="hero"/>
                        
                    </div>
                </div> */}
            </div>
        </div>
    </section>
    
    </>
  );
}


