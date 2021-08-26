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
                        <h2 className="text-white">That's Your Place To Get Help With History Homework</h2>
                        <span className="animate-border mb-4"></span>
                        <p>Come and have a look at our page to get a little bit more information about what we offer. Here you will be able to see the discounts that we offer and the type of product we provide. However, if you can’t see an example that seems similar to your task, don’t worry – we offer all sorts of history The assignment writing. It would be impossible for us to show you the thousands of projects we have carried out, so just tell us about yours and we will explain how we can go about doing it. Our professional writers are able to handle your history assignment regardless of the topic or the level of difficulty. Whether you want us to write your history assignment about Reformation in Europe, political stability in Germany, or Nazism and democracy – be sure that our writers are up to this challenge!</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

        </>
    )
}

