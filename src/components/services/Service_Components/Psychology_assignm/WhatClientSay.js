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
                        <h2 className="text-white">What Makes Assignment Writing The Best Place To Get Psychology Homework Help?</h2>
                        <span className="animate-border mb-4"></span>
                        <p>Needless to say, but hands down – we have the best writing team available online. Apart from the exceptional paper quality, we boast the most affordable rates in the market. In particular, we’ll provide discounts to students that work with us throughout the school year, which is something that other companies can’t match. If you purchase our psychology assignment, you can not only enjoy the on time (or even before the deadline) submission, but you’ll work directly with one of our highly qualified writers who has a comprehensive understanding of psychology</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

        </>
    )
}

