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
                        <h2 className="text-white">Quality And Affordable - Hire Our Experts Today</h2>
                        <span className="animate-border mb-4"></span>
                        <p>Our assistance comes with the best possible rates. Unlike sociology homework helpers that charge a flat rate before even looking at your assignment, we provide a quote based on your assignment’s specifications and requirements. There the top-notch quality we provide, there simply is no other company out there that can give you a better sociology paper. In fact, we are so confident in our services, if you’re not completely satisfied with our work we will revise your paper free of charge until you get exactly what you expect and require</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

        </>
    )
}

