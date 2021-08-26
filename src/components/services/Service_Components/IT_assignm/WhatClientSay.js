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
                        <h2 className="text-white">Our Experts Provide Best Help With Your IT Assignments</h2>
                        <span className="animate-border mb-4"></span>
                        <p>Are you having a hard time dealing with numerous assignments because of their complexity or lack of time? Maybe, you are sitting on an assignment with a fast-approaching deadline, and there are still concepts that you do not fully understand? Well, you are not alone. More than half of college students admit that they struggle a lot with their assignments and wish they could get assistance in handling some of the work. If you are looking for the perfect project, IT assignment assistance may come in handy. So, here are some reasons to consider our IT The assignment writing services</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

        </>
    )
}

