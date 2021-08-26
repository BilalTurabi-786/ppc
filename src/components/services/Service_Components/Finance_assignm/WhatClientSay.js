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
                        <h2 className="text-white">Our Team</h2>
                        <span className="animate-border mb-4"></span>
                        <p>Our dedicated team of experts come from various financial backgrounds. We will pair you with whoever has the most relevant knowledge and experience for the task at hand. Most of our professionals hold a Master’s or Doctorate degree in finance, meaning they have had to sift through exactly the same assignments as you are working on now. Our team members also have years of experience providing finance homework help to students, such as doing research on complex subjects, providing tips and advice, and offering support in writing papers.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

        </>
    )
}

