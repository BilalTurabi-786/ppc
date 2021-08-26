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
                        <h2 className="text-white">Immediately Improve Your Law Assignment Writing With Us</h2>
                        <span className="animate-border mb-4"></span>
                        <p>Regardless of the marks you have been getting prior to making an order with Assignment Help, we can guarantee that we will better them. Our law writing assistance can promise you the top grade you have been hoping for; just let us know if you would rather us gradually increase your grades when we do my law assignment, instead of jumping straight to the top. If you have been doing well in school, our experts will use their knowledge to maintain your high standards and keep your grades at the top of the class.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

        </>
    )
}

