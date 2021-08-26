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
                        <h2 className="text-white">Which Is The Best Type Of Geography Assignment Help For You?</h2>
                        <span className="animate-border mb-4"></span>
                       
                        <p>Assignment Help offers all types of geography homework help, regardless of whether it is a small task or long-term project. It doesn’t matter to us when the deadline is coming up or how frequently you would like our assistance, as we have a large team of experts that are used to working to high standards even when under pressure. You can buy the geography assignment help you need – whatever it is.</p>
                      
                    </div>
                </div>
                        <img src="./img/testimonial-arrow-bottom.png" className="img-fluid testimonial-tb-shape shape-bottom"
                             alt="testimonial shape"/>
                   
               
            </div>
        </div>
    </section>

        </>
    )
}

