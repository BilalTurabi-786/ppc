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
                        <h2 className="text-white">Experience With Providing Help With English Assignment</h2>
                        <span className="animate-border mb-4"></span>
                        <p>Perhaps one of the most obvious questions you need to ask is how much and what type of experience the company has in offering English homework help online. In order to get the most value for money, it is always best to make an order with somebody that may not be the cheapest, but has years of experience. We can offer you lots of discounts and still provide you with top quality English assignments online.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

        </>
    )
}

