import React from "react";
import {Carousel} from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';


export default function WhatClientSay()
{
//     const [value, setValue] = useState(0);

//         const onChange = value => {
//         setValue(value);
//   }
    return(
        <>
        <section className="testimonial-section ptb-100"
             style={{backgroundImage: "url(img/testimonial-bg.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center",backgroundSize: "center cover"}}> 
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6 col-lg-10">
                    <div className="testimonial-heading text-white">
                        <h2 className="text-white">Professional Experts To Help With Business Assignment At Your Service</h2>
                        <span className="animate-border mb-4"></span>
                        <p>Feel stuck on how to approach the topic? That is a common challenge to many students that major in business studies. A comfortable topic will make a significant difference in how a research paper is written. Our writing experts use reputable sites and resources to collect data. Our team is made up of eminent writers that know the exact requirements for a business assignment that students are usually given. Whether you are looking for business finance or business law assignment help, Assignment Help team is well able to deliver.</p>

                        <p>The many years in the writing and business field has equipped our experts with the mastery to produce flawless assignments for students, bound to impress their respective teachers. Our services enable you to fetch excellent grades while you attend to other things besides business homework.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

        </>
    )
}

