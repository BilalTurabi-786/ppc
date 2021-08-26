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
                        <h2 className="text-white">Your Top Option for Programming Homework Help</h2>
                        <span className="animate-border mb-4"></span>
                        <p>Today, programming is present in a huge number of courses, degrees, and classes. Programming ranges from basic, such as HTML and C, to high-level, including PHP, Java, Python, and Pascal. If you are new to programming or a programming language, it may take you hours or even weeks to complete a project. Worst of all, if you make a mistake, you may need to start all over again. Unless of course, you enlist the help of professional programmers who can accomplish the task for you in a short span of time. Now, there is a way to connect with them: through our programming The Assignment Writing service.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

        </>
    )
}

