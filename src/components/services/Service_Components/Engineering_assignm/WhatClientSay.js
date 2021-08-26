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
                        <h2 className="text-white">Electrical Engineering Homework Help</h2>
                        <span className="animate-border mb-4"></span>
                        <p>Our team includes qualified professionals in all areas of electrical engineering. Whether your assignment relates to heating and cooling systems, hybrid vehicles, or anything else that requires a knowledge of electricity or electromagnetism, we will ensure that your work is completed to the highest standards and displays your in-depth understanding of the topic.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

        </>
    )
}

