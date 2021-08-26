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
                        <h2 className="text-white">Hire a Chemistry Expert Just Now!s</h2>
                        <span className="animate-border mb-4"></span>
                        <p>So, are you still wondering “Who will do my chemistry assignment?” Hopefully not — as the answer is quite clear. Assignment Help will go above and beyond to provide you with top-notch homework assistance you won’t be able to find anywhere else. Before you become inundated with assignments or fall behind in class, give us a call and get set up with some help. Our customer support team is always on standby to answer all of your questions and get you started down the right path towards higher grades and academic success.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

        </>
    )
}

