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
                        <h2 className="text-white">Learn About Our Marketing The Assignment Writing</h2>
                        <span className="animate-border mb-4"></span>
                        <p>Marketing has evolved to include a lot more than cold calling and poster boarding. Now, Google Adwords and Facebook Ads plays a huge role in online advertising. Meanwhile, online video platforms are being used as much or more than Google for simple “how to” searches. If you have a marketing plan assignment, even if it does not directly concern digital, it must make room for digital components. Event planning, for example, depends heavily on promotion through social media. When we sit down to begin work on your project, we do so with this kind of knowledge at the ready</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

        </>
    )
}

