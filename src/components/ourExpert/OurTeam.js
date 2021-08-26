import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import { Image } from 'react-bootstrap';
import Typical from 'react-typical'


export default function OurTeam(){

    return(
        <>
         <section className="team-two-section ptb-100">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-8">
                    <div className="section-heading text-center mb-5">
                        <strong className="color-primary">Our Experts</strong>
                        <h2>Choose the {" "} <Typical 
                        loop={Infinity} wrapper ='b' steps={[500,'BEST',2000, 'BEST Expert',2000]}/>   Near Your Location
                        
                        </h2>
                        <span className="animate-border mr-auto ml-auto mb-4"></span>
                        {/* <p className="lead">Distinctively grow go forward manufactured products and optimal networks.
                            Enthusiastically
                            disseminate user-centric outsourcing.</p> */}
                    </div>
                </div>
            </div>
            <div className="row " style={{justifyContent:'center'}}>
                <div className="col-md-6 col-lg-3">
                    <div className="staff-member my-md-3 my-lg-3 my-sm-0">
                        <div className="card text-center" style={{borderRadius:20}}>
                            <Image src="img/1573818426.jpg" roundedCircle alt="team image" width="150" className="img-fluid m-auto pt-4"/>
                         
                            <div className="card-body">
                                <h5 className="teacher mb-0">Michelle Meng</h5>
                                <span>Master's from University of Singapore</span>
                                <p className="teacher-quote pt-3">Dramatically leverage existing fully researched
                                    platforms. </p>
                                <ul className="list-inline pt-2 social">
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-facebook"></span></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-linkedin"></span></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-dribbble"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="overlay d-flex align-items-center justify-content-center" style={{borderRadius:20}}>
                            <div className="overlay-inner" >
                                <p className="teacher-quote">"Dramatically leverage existing fully researched platforms
                                    vis-a-vis viral." </p><a
                                    href="#" className="teacher-name">
                                <h5 className="mb-0 teacher text-white">Michelle Meng</h5></a>
                                <span className="teacher-field text-white">Master's from University of Singapore</span>
                                <ul className="list-inline py-4 social">
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-facebook"></span></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-linkedin"></span></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-dribbble"></span></a></li>
                                </ul>
                                <p className="teacher-see-profile">
                                    <a href="#" className="btn outline-white-btn">Hire Me</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="staff-member my-md-3 my-lg-3 my-sm-0">
                        <div className="card text-center" style={{borderRadius:20}}>
                            <Image src="img/1490951383.jpg" roundedCircle alt="team image" width="150" className="img-fluid m-auto pt-4"/>
                            <div className="card-body">
                                <h5 className="teacher mb-0">John Perna</h5>
                                <span>PhD in Economics</span>
                                <p className="teacher-quote pt-3">Compellingly strategize covalent e-services rather
                                    than </p>
                                <ul className="list-inline pt-2 social">
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-facebook"></span></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-linkedin"></span></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-dribbble"></span></a></li>
                                </ul><br></br>
                            </div>
                            
                        </div>
                        <div className="overlay d-flex align-items-center justify-content-center" style={{borderRadius:20}}>
                            <div className="overlay-inner">
                                <p className="teacher-quote">"Credibly extend high-payoff web-readiness via top-line
                                    relationships." </p><a
                                    href="#" className="teacher-name">
                                <h5 className="mb-0 teacher text-white">John Perna</h5></a><span
                                    className="teacher-field text-white">PhD in Economics</span>
                                <ul className="list-inline py-4 social">
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-facebook"></span></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-linkedin"></span></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-dribbble"></span></a></li>
                                </ul>
                                <p className="teacher-see-profile">
                                    <a href="#" className="btn outline-white-btn">Hire Me</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="staff-member my-md-3 my-lg-3 my-sm-0">
                        <div className="card text-center" style={{borderRadius:20}}>
                            <Image src="img/1490867383.jpg" roundedCircle alt="team image"  width="150" className="img-fluid m-auto pt-4"/>
                            {/* <img /> */}
                            <div className="card-body">
                                <h5 className="teacher mb-0">Daphne Lip</h5>
                                <span>Graduated from Campion College at the University of Regina</span>
                                <p className="teacher-quote pt-3">Credibly extend high-payoff web-readiness via
                                    top-line.</p>
                                <ul className="list-inline pt-2 social">
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-facebook"></span></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-linkedin"></span></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-dribbble"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="overlay d-flex align-items-center justify-content-center" style={{borderRadius:20}}>
                            <div className="overlay-inner">
                                <p className="teacher-quote">"Authoritatively evolve stand-alone e-tailers whereas
                                    prospective partnerships." </p><a
                                    href="#" className="teacher-name">
                                <h5 className="mb-0 teacher text-white">Daphne Lip</h5></a>
                                <span className="teacher-field text-white">Graduated from Campion College at the University of Regina</span>
                                <ul className="list-inline py-4 social">
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-facebook"></span></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-linkedin"></span></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-dribbble"></span></a></li>
                                </ul>
                                <p className="teacher-see-profile">
                                    <a href="#" className="btn outline-white-btn">Hire Me</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
            <div className="row" style={{justifyContent:'center'}}>
                <div className="col-md-6 col-lg-3">
                    <div className="staff-member my-md-3 my-lg-3 my-sm-0">
                        <div className="card text-center" style={{borderRadius:20}}>
                            <Image src="img/1490869031.jpg" roundedCircle alt="team image" width="150" className="img-fluid m-auto pt-4"/>
                            <div className="card-body">
                                <h5 className="teacher mb-0">Anderson</h5>
                                <span>Master's from University of Singapore</span>
                                <p className="teacher-quote pt-3">Dramatically leverage existing fully researched
                                    platforms. </p>
                                <ul className="list-inline pt-2 social">
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-facebook"></span></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-linkedin"></span></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-dribbble"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="overlay d-flex align-items-center justify-content-center" style={{borderRadius:20}}>
                            <div className="overlay-inner">
                                <p className="teacher-quote">"Dramatically leverage existing fully researched platforms
                                    vis-a-vis viral." </p><a
                                    href="#" className="teacher-name">
                                <h5 className="mb-0 teacher text-white">Michelle Meng</h5></a>
                                <span className="teacher-field text-white">Master's from University of Singapore</span>
                                <ul className="list-inline py-4 social">
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-facebook"></span></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-linkedin"></span></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-dribbble"></span></a></li>
                                </ul>
                                <p className="teacher-see-profile">
                                    <a href="#" className="btn outline-white-btn">Hire Me</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="staff-member my-md-3 my-lg-3 my-sm-0">
                        <div className="card text-center" style={{borderRadius:20}}>
                            <Image src="img/1490868163.jpg" roundedCircle alt="team image" width="150" className="img-fluid m-auto pt-4"/>
                            <div className="card-body">
                                <h5 className="teacher mb-0">Claudia Jamie</h5>
                                <span>PhD in Economics</span>
                                <p className="teacher-quote pt-3">Compellingly strategize covalent e-services rather
                                    than </p>
                                <ul className="list-inline pt-2 social">
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-facebook"></span></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-linkedin"></span></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-dribbble"></span></a></li>
                                </ul><br></br>
                            </div>
                            
                        </div>
                        <div className="overlay d-flex align-items-center justify-content-center" style={{borderRadius:20}}>
                            <div className="overlay-inner">
                                <p className="teacher-quote">"Credibly extend high-payoff web-readiness via top-line
                                    relationships." </p><a
                                    href="#" className="teacher-name">
                                <h5 className="mb-0 teacher text-white">John Perna</h5></a><span
                                    className="teacher-field text-white">PhD in Economics</span>
                                <ul className="list-inline py-4 social">
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-facebook"></span></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-linkedin"></span></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-dribbble"></span></a></li>
                                </ul>
                                <p className="teacher-see-profile">
                                    <a href="#" className="btn outline-white-btn">Hire Me</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="staff-member my-md-3 my-lg-3 my-sm-0">
                        <div className="card text-center" style={{borderRadius:20}}>
                            <Image src="img/1490862217.jpg" roundedCircle alt="team image" width="150" className="img-fluid m-auto pt-4"/>
                            <div className="card-body">
                                <h5 className="teacher mb-0">Grace Ling</h5>
                                <span>Graduated from Campion College at the University of Regina</span>
                                <p className="teacher-quote pt-3">Credibly extend high-payoff web-readiness via
                                    top-line.</p>
                                <ul className="list-inline pt-2 social">
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-facebook"></span></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-linkedin"></span></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-dribbble"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="overlay d-flex align-items-center justify-content-center" style={{borderRadius:20}}>
                            <div className="overlay-inner">
                                <p className="teacher-quote">"Authoritatively evolve stand-alone e-tailers whereas
                                    prospective partnerships." </p><a
                                    href="#" className="teacher-name">
                                <h5 className="mb-0 teacher text-white">Daphne Lip</h5></a>
                                <span className="teacher-field text-white">Graduated from Campion College at the University of Regina</span>
                                <ul className="list-inline py-4 social">
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-facebook"></span></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-linkedin"></span></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-dribbble"></span></a></li>
                                </ul>
                                <p className="teacher-see-profile">
                                    <a href="#" className="btn outline-white-btn">Hire Me</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>



            <div className="row" style={{justifyContent:'center'}}>
                <div className="col-md-6 col-lg-3">
                    <div className="staff-member my-md-3 my-lg-3 my-sm-0">
                        <div className="card text-center" style={{borderRadius:20}}>
                            <Image src="img/1487845223.jpg" roundedCircle alt="team image" width="150" className="img-fluid m-auto pt-4"/>
                            <div className="card-body">
                                <h5 className="teacher mb-0">Karen Betty</h5>
                                <span>MPA in Accounting researcher UK HIRE ME</span>
                                <p className="teacher-quote pt-3">Professionally engage clicks-and-mortar customer</p>
                                <ul className="list-inline pt-2 social">
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-facebook"></span></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-linkedin"></span></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-dribbble"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="overlay d-flex align-items-center justify-content-center" style={{borderRadius:20}}>
                            <div className="overlay-inner">
                                <p className="teacher-quote">"Authoritatively evolve stand-alone e-tailers whereas
                                    prospective partnerships." </p><a
                                    href="#" className="teacher-name">
                                <h5 className="mb-0 teacher text-white">Karen Betty</h5></a>
                                <span className="teacher-field text-white">MPA in Accounting researcher UK HIRE ME</span>
                                <ul className="list-inline py-4 social">
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-facebook"></span></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-linkedin"></span></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-dribbble"></span></a></li>
                                </ul>
                                <p className="teacher-see-profile">
                                    <span href="#" className="btn outline-white-btn">Hire Me</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3">
                    <div className="staff-member my-md-3 my-lg-3 my-sm-0">
                        <div className="card text-center" style={{borderRadius:20}}>
                            <Image src="img/1490948836.jpg" roundedCircle alt="team image" width="150" className="img-fluid m-auto pt-4"/>
                            <div className="card-body">
                                <h5 className="teacher mb-0">Daphne Lip</h5>
                                <span>Graduated from Campion College at the University of Regina</span>
                                <p className="teacher-quote pt-3">Credibly extend high-payoff web-readiness via
                                    top-line.</p>
                                <ul className="list-inline pt-2 social">
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-facebook"></span></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-linkedin"></span></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-dribbble"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="overlay d-flex align-items-center justify-content-center" style={{borderRadius:20}}>
                            <div className="overlay-inner">
                                <p className="teacher-quote">"Authoritatively evolve stand-alone e-tailers whereas
                                    prospective partnerships." </p><a
                                    href="#" className="teacher-name">
                                <h5 className="mb-0 teacher text-white">Daphne Lip</h5></a>
                                <span className="teacher-field text-white">Graduated from Campion College at the University of Regina</span>
                                <ul className="list-inline py-4 social">
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-facebook"></span></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-linkedin"></span></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-dribbble"></span></a></li>
                                </ul>
                                <p className="teacher-see-profile">
                                    <a href="#" className="btn outline-white-btn">Hire Me</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="staff-member my-md-3 my-lg-3 my-sm-0">
                        <div className="card text-center" style={{borderRadius:20}}>
                            <Image src="img/1487844011.jpg"roundedCircle alt="team image" width="150" className="img-fluid m-auto pt-4"/>
                            <div className="card-body">
                                <h5 className="teacher mb-0">Alexis Jiang</h5>
                                <span>MPA in Accounting researcher UK HIRE ME</span>
                                <p className="teacher-quote pt-3">Professionally engage clicks-and-mortar customer</p>
                                <ul className="list-inline pt-2 social">
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-facebook"></span></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-linkedin"></span></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-dribbble"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="overlay d-flex align-items-center justify-content-center" style={{borderRadius:20}}>
                            <div className="overlay-inner">
                                <p className="teacher-quote">"Authoritatively evolve stand-alone e-tailers whereas
                                    prospective partnerships." </p><a
                                    href="#" className="teacher-name">
                                <h5 className="mb-0 teacher text-white">Karen Betty</h5></a>
                                <span className="teacher-field text-white">MPA in Accounting researcher UK HIRE ME</span>
                                <ul className="list-inline py-4 social">
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-facebook"></span></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-linkedin"></span></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank"><span
                                            className="fa fa-dribbble"></span></a></li>
                                </ul>
                                <p className="teacher-see-profile">
                                    <span href="#" className="btn outline-white-btn">Hire Me</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>

        </>
    )
}