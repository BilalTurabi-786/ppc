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
                        <h2 className="text-white">Our Project Management Homework Help Experts Are Reliable</h2>
                        <span className="animate-border mb-4"></span>
                        <p>One of the things which students dread the most when asking someone to help with a project is giving their assignment to an unreliable expert and ending up with a poorly written paper. We do not allow anyone to sign up as a tutor for our services. We take time and vet their academic qualifications. We ensure that the qualifications are certified.</p>
                        <p>Moreover, we give our tutors written and timed tests to ascertain that they are competent in their respective areas of expertise. Our risk management experts must have at least a bachelor’s degree in financial management. Thus, we take all measures to control the quality of output that we’re giving to you.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

        </>
    )
}

