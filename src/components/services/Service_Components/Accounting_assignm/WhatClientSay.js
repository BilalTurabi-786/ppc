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
                <div className="col-md-6 col-lg-5">
                    <div className="testimonial-heading text-white">
                        <h2 className="text-white">TrustAssignment Writing To Be Your Accounting Homework Helper!</h2>
                        <span className="animate-border mb-4"></span>
                        {/* <p>Collaboratively actualize excellent schemas without effective models. Synergistically
                            engineer functionalized applications rather than backend e-commerce.</p> */}
                    </div>
                </div>
                <div className="col-md-6 col-lg-6">
                    <div className="testimonial-content-wrap">
                        <img src="/img/testimonial-arrow-top.png" className="img-fluid testimonial-tb-shape shape-top"
                             alt="testimonial shape"/>
                        <div className="owl-carousel owl-theme client-testimonial-1 custom-dot testimonial-shape">
                        <div>
                        <Carousel>
                            <Carousel.Item>
                               
                                <div className="testimonial-quote-wrap">
                                    <div className="media author-info mb-3">
                                        {/* <div className="author-img mr-3">
                                            <img src="img/client-1.jpg" alt="client" className="img-fluid"/>
                                        </div> */}
                                        <div className="media-body text-white">
                                            {/* <h5 className="mb-0 text-white">John Charles</h5>
                                            <span>BizBite</span> */}
                                        </div>
                                        <span className="fa fa-quote-right icon-md text-white" style={{fontSize:50}}></span>
                                    </div>
                                    <div className="client-say text-white">
                                        <p>Are you looking for incredible service? Do you want access to experts that understand business math and writing? If you’ve said yes to these questions, then you should go with our assistance now! </p>
                                    </div>
                                </div>
                            
                            </Carousel.Item>
                            <Carousel.Item>
                                
                             <div className="item">
                                <div className="testimonial-quote-wrap">
                                    <div className="media author-info mb-3">
                                        {/* <div className="author-img mr-3">
                                            <img src="img/client-2.jpg" alt="client" className="img-fluid"/>
                                        </div> */}
                                        <div className="media-body text-white">
                                            {/* <h5 className="mb-0 text-white">Arabella Ora</h5>
                                            <span>BizBite</span> */}
                                        </div>
                                        <span className="fa fa-quote-right icon-md text-white"style={{fontSize:50}}></span>
                                    </div>
                                    <div className="client-say text-white">
                                        <p> We provide affordable help that’s guaranteed to be quality. There’s no place else with better content. We make the whole process of getting your work done effortless, and we know you’ll have a wonderful experience or your money back.</p>
                                    </div>
                                </div>
                            </div>
                               
                            </Carousel.Item>
                            <Carousel.Item>
                            <div className="item">
                                <div className="testimonial-quote-wrap">
                                    <div className="media author-info mb-3">
                                        {/* <div className="author-img mr-3">
                                            <img src="img/client-3.jpg" alt="client" className="img-fluid"/>
                                        </div> */}
                                        <div className="media-body text-white">
                                            {/* <h5 className="mb-0 text-white">Jeremy Jere</h5>
                                            <span>BizBite</span> */}
                                        </div>
                                        <span className="fa fa-quote-right icon-md text-white"style={{fontSize:50}}></span>
                                    </div>
                                    <div className="client-say text-white">
                                        <p>Try us out risk free and quit struggling to complete your work. Give us a call or email us today to get in touch with our professional writers. Don’t wait until your assignment is almost due, act today!</p>
                                    </div>
                                </div>
                            </div>

                            </Carousel.Item>

                           

                        </Carousel>
                            </div>

                            {/* <div className="item">
                                <div className="testimonial-quote-wrap">
                                    <div className="media author-info mb-3">
                                        <div className="author-img mr-3">
                                            <img src="img/client-1.jpg" alt="client" className="img-fluid"/>
                                        </div>
                                        <div className="media-body text-white">
                                            <h5 className="mb-0 text-white">John Charles</h5>
                                            <span>BizBite</span>
                                        </div>
                                        <span className="fas fa-quote-right icon-md text-white"></span>
                                    </div>
                                    <div className="client-say text-white">
                                        <p>Interactively optimize
                                            fully researched expertise vis-a-vis plug-and-play relationships.
                                            Intrinsicly
                                            develop viral core competencies for fully tested customer service.
                                            Enthusiastically create next-generation growth strategies and.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonial-quote-wrap">
                                    <div className="media author-info mb-3">
                                        <div className="author-img mr-3">
                                            <img src="img/client-2.jpg" alt="client" className="img-fluid"/>
                                        </div>
                                        <div className="media-body text-white">
                                            <h5 className="mb-0 text-white">Arabella Ora</h5>
                                            <span>BizBite</span>
                                        </div>
                                        <span className="fas fa-quote-right icon-md text-white"></span>
                                    </div>
                                    <div className="client-say text-white">
                                        <p>Rapidiously develop user
                                            friendly growth strategies after extensive initiatives. Conveniently grow
                                            innovative benefits through fully tested deliverables. Rapidiously utilize
                                            focused platforms through end-to-end schemas.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonial-quote-wrap">
                                    <div className="media author-info mb-3">
                                        <div className="author-img mr-3">
                                            <img src="img/client-3.jpg" alt="client" className="img-fluid"/>
                                        </div>
                                        <div className="media-body text-white">
                                            <h5 className="mb-0 text-white">Jeremy Jere</h5>
                                            <span>BizBite</span>
                                        </div>
                                        <span className="fas fa-quote-right icon-md text-white"></span>
                                    </div>
                                    <div className="client-say text-white">
                                        <p>Objectively synthesize
                                            client-centered e-tailers for maintainable channels. Holisticly administrate
                                            customer directed vortals whereas tactical functionalities. Energistically
                                            monetize reliable imperatives through client-centric best practices.
                                            Collaboratively.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonial-quote-wrap">
                                    <div className="media author-info mb-3">
                                        <div className="author-img mr-3">
                                            <img src="img/client-4.jpg" alt="client" className="img-fluid"/>
                                        </div>
                                        <div className="media-body text-white">
                                            <h5 className="mb-0 text-white">John Charles</h5>
                                            <span>BizBite</span>
                                        </div>
                                        <span className="fas fa-quote-right icon-md text-white"></span>
                                    </div>
                                    <div className="client-say text-white">
                                        <p>Enthusiastically innovate
                                            B2C data without clicks-and-mortar convergence. Monotonectally deliver
                                            compelling testing procedures vis-a-vis B2B testing procedures. Competently
                                            evisculate integrated resources whereas global processes.
                                            Enthusiastically.</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <img src="./img/testimonial-arrow-bottom.png" className="img-fluid testimonial-tb-shape shape-bottom"
                             alt="testimonial shape"/>
                    </div>
                </div>
            </div>
        </div>
    </section>

        </>
    )
}

