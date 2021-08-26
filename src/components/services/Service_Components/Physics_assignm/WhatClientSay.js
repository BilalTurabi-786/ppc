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
                        <h2 className="text-white">Our Physics Assignment Writing Services Are Best - And Here's Why</h2>
                        <span className="animate-border mb-4"></span>
                        <p>Needless to say – we research and write every paper from scratch. Unlike most of our competitors, we don’t keep databases filled with previously used essays for resale. This guarantees that your paper will be 100% unique and original and will not be suspected of being plagiarized from any published source. While other students may fall into the trap of purchasing physics essays that have been previously used, the assistance you receive from us can have details of your personal writing style to truly get that customized work.</p>
                        <p>Our physics homework helpers aren’t just native-English writers trained in academic essay writing, they are also experts in the field of physics, having studied the subject for several years and having written hundreds of papers on the topic. We select our physics writers with great care, taking into consideration their academic background, experience, and writing skills. And again, they write everything from scratch, working with you to develop a new topic or giving you a list of suggestions to choose from if you have no idea what you want the paper to about. This is just one of the many reasons students in every academic level make us the preferred choice when they need help with physics homework</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

        </>
    )
}

