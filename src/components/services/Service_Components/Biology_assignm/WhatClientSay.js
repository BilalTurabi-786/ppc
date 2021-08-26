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
                        <h2 className="text-white">Biology Homework Experts</h2>
                        <span className="animate-border mb-4"></span>
                        <p>If you aren’t 100% satisfied with the content we provide we will do as many revisions as it takes to meet your requirements, absolutely free of charge. Just be sure to give us a call early so that our writers have the time they need to finish the revisions. Though we are happy to take on rush jobs, they don’t leave enough room for thorough revisions. So don’t hesitate if you have a biology assignment due in the next few days. Stop asking, “Who will do my biology homework?” Give The Assignment Writing a call today and speak to one of our customer representatives. You’ll be so happy that you did.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

        </>
    )
}

