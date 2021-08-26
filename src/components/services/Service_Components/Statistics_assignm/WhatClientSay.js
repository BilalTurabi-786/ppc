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
                        <h2 className="text-white">Best Statistics Assignment Writing At Your Disposal</h2>
                        <span className="animate-border mb-4"></span>
                        <p>At The Assignment Writing we offer statistical homework writing help for students from all academic levels – high school, college or graduate school, no matter what degree you are working towards, you can be certain that we have the experts who are willing and ready to help. Our team consists of highly qualified professional writers who have all studied statistics and have years of experience writing papers and providing statistics homework help. Each year we help thousands of students from all over the world earn higher grades on their assignments. Whether you need statistics papers written, solutions to world problems, paper review or editing, we are the last statistics The Assignment Writing service you will ever need</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

        </>
    )
}

