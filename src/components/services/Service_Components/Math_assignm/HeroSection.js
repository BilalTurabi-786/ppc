
import React from "react";
import Typical from 'react-typical'

export default function HeroSection() {
  return (
    <>
    
      <section className="ptb-100" style={{backgroundImage: 'url(img/photo-open-book.jpg)',backgroundPosition:'cover',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
      
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-12 col-lg-10">
                    <div className="hero-slider-content text-white pt-5">
                        
                        <h1 className="text-white mb-5">The <Typical loop={Infinity} wrapper ='b' steps={[500,'Fast',500,'Fastest' ]}/>  way to Better Grades
                        </h1>

                        <br></br> 
                        <strong>Quality Assignment Help By Expert Writers</strong>
                        <br></br> <br></br>
                        <bold >100+ Students Support Executive to Listen Students Requirement</bold> <br></br>
                        <bold>Highest Grade for All Academic Needs</bold> <br></br>
                        <bold style={{color:'black'}}>10+ Years Of Experience in Academic Writing</bold> <br></br>
                        <bold style={{color:'black'}}>Best Assignment Writer</bold> <br></br>
                        <bold style={{color:'black'}}>Global Assignment Helper</bold> <br></br>
                        <bold style={{color:'black'}}>5,067 Academic Assignment Writers</bold> <br></br>
                        <br></br> 
                        {/* <h1 className="text-white">4.9</h1> */}

                        {/* <div className="action-btns mt-3">
                          <button href="#" className="secondary-solid-btn-1">Start Now</button>   
                        </div> */}
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


