import React from "react";
import {Link} from 'react-router-dom'


function CardSection() {
  return (
    <div className="App">
      
      <section className="promo-section ptb-100">
        <div className="container">
               <h2 className="text-center mb-5"> Get the Best Samples to Improve Your Grade </h2>
               
            <div className="row mb-4">
                <div className="col-md-4 col-lg-4">
                    
                    
                        <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-5 h-100">
                            {/* <div className="circle-icon">
                                <span className="ti-music-alt text-white"></span>
                            </div> */}
                            {/* <h5>Market Research</h5> */}
                            <h2 className="mb-4">A</h2>
                            
                            <Link to="/AccountCardComp"><h5 className="mb-4">Accounting</h5> </Link><hr></hr>
                            <Link to="/ArchitecCardComp"> <h5 className="mb-4">Architecture</h5></Link><hr></hr>
                            <Link to="/ArtsCardComp"><h5 className="mb-4"> Arts</h5></Link>
                        </div>
                    
                </div>
                <div className="col-md-4 col-lg-4">
                    
                        <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-5 h-100">
                            {/* <div className="circle-icon">
                                <span className="ti-dashboard text-white"></span>
                            </div>
                            
                            <h5>Content Marketing</h5> */}
                            <h2 className="mb-4">B</h2>
                            <Link to="/BiologyCardComp"><h5 className="mb-4">Biology</h5></Link><hr></hr>
                            <Link to="/BusinessCardComp"> <h5 className="mb-4">Business</h5></Link>
                        </div>
                    
                </div>
                <div className="col-md-4 col-lg-4">
                    
                        <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-5 h-100">
                            {/* <div className="circle-icon">
                                <span className="ti-headphone-alt text-white"></span>
                            </div>
                            <h5>Email Marketing</h5> */}
                           <h2 className="mb-4">C</h2>
                           <Link to="/ChildcareCardComp"> <h5 className="mb-4">Childcare</h5></Link> <hr></hr>
                           <Link to="/CommerceCardComp"> <h5 className="mb-4">Commerce</h5> </Link><hr></hr>
                           <Link to="/ComputerScienceCardComp"> <h5 className="mb-4">Computer Science</h5></Link> 
                        </div>
                    
                </div>
            </div>


            <div className="row  mb-4">
                <div className="col-md-4 col-lg-4">
                    
                    
                        <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-5 h-100">
                            {/* <div className="circle-icon">
                                <span className="ti-music-alt text-white"></span>
                            </div> */}
                            {/* <h5>Market Research</h5> */}
                            <h2 className="mb-4 ">D</h2>
                            <Link to="/DesignCardComp"> <h5 className="mb-4">Design</h5> </Link><hr></hr> 
                        </div>
                    
                </div>
                <div className="col-md-4 col-lg-4">
                    
                        <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-5 h-100">
                            {/* <div className="circle-icon">
                                <span className="ti-dashboard text-white"></span>
                            </div>
                            
                            <h5>Content Marketing</h5> */}
                             <h2 className="mb-4">E</h2>
                             <Link to="/EconomicsCardComp">  <h5 className="mb-4">Economics</h5></Link><hr></hr>
                             <Link to="/EducationCardComp">  <h5 className="mb-4">Education</h5> </Link><hr></hr>
                             <Link to="/EmployeeRelationCardComp">    <h5 className="mb-4">Employee relations</h5></Link><hr></hr>  
                             <Link to="/EngineeringCardComp">   <h5 className="mb-4">Engineering</h5> </Link>  
                        </div>
                    
                </div>
                <div className="col-md-4 col-lg-4">
                    
                        <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-5 h-100">
                            {/* <div className="circle-icon">
                                <span className="ti-headphone-alt text-white"></span>
                            </div>
                            <h5>Email Marketing</h5> */}
                            <h2 className="mb-4">F</h2>
                            <Link to="/FashionCardComp">   <h5 className="mb-4">Fashion</h5></Link><hr></hr>
                            <Link to="/FinanceCardComp">    <h5 className="mb-4">Finance</h5></Link>  <hr></hr>
                            <Link to="/FoodSafetyManageCardComp">   <h5 className="mb-4">Food safety management</h5></Link>  
                        </div>
                    
                </div>
            </div>


            <div className="row  mb-4">
                <div className="col-md-4 col-lg-4">
                    
                    
                        <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-5 h-100">
                            {/* <div className="circle-icon">
                                <span className="ti-music-alt text-white"></span>
                            </div> */}
                            {/* <h5>Market Research</h5> */}
                            <h2 className="mb-4">G</h2>
                            <Link to="/GeneralStudiesCardComp">  <h5 className="mb-4">A General Studies</h5></Link> <hr></hr> 
                            <Link to="/GeographyCardComp">  <h5 className="mb-4">Geography</h5> </Link>   
                        </div>
                    
                </div>
                <div className="col-md-4 col-lg-4">
                    
                        <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-5 h-100">
                            {/* <div className="circle-icon">
                                <span className="ti-dashboard text-white"></span>
                            </div>
                            
                            <h5>Content Marketing</h5> */}
                             <h2 className="mb-4">H</h2>
                             <Link to="/HealthCardComp">   <h5 className="mb-4">Health</h5></Link> <hr></hr>
                             <Link to="/HealthandSocialCareCardComp">  <h5 className="mb-4">Health & Social Care</h5></Link>  <hr></hr>
                             <Link to="/HumanRightCardComp">    <h5 className="mb-4">Human Right</h5></Link>  
                        </div>
                    
                </div>
                <div className="col-md-4 col-lg-4">
                    
                        <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-5 h-100">
                            {/* <div className="circle-icon">
                                <span className="ti-headphone-alt text-white"></span>
                            </div>
                            <h5>Email Marketing</h5> */}
                            <h2 className="mb-4">I</h2>
                            <Link to="/IndustrialRelationCardComp"> <h5 className="mb-4">Industrial Relation</h5></Link> <hr></hr> 
                            <Link to="/InformationSystemCardComp"> <h5 className="mb-4">Information Systems</h5> </Link>
                        </div>
                    
                </div>
            </div>

            <div className="row  mb-4">
                <div className="col-md-4 col-lg-4">
                    
                    
                        <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-5 h-100">
                            {/* <div className="circle-icon">
                                <span className="ti-music-alt text-white"></span>
                            </div> */}
                            {/* <h5>Market Research</h5> */}
                            <h2 className="mb-4 ">L</h2>
                            <Link to="/LanguagesCardComp">  <h5 className="mb-4">Languages</h5></Link>  <hr></hr>
                            <Link to="/LawCardComp">  <h5 className="mb-4">Law</h5></Link> <hr></hr>
                            <Link to="/LeadershipCardComp">  <h5 className="mb-4">Leadership</h5></Link> 
                        </div>
                    
                </div>
                <div className="col-md-4 col-lg-4">
                    
                        <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-5 h-100">
                            {/* <div className="circle-icon">
                                <span className="ti-dashboard text-white"></span>
                            </div>
                            
                            <h5>Content Marketing</h5> */}
                             <h2 className="mb-4">M</h2>
                             <Link to="/ManagementCardComp">   <h5 className="mb-4">Management</h5></Link>  <hr></hr>
                             <Link to="/ManagingPeopleCareersCardComp">  <h5 className="mb-4">Managing People and Careers</h5></Link>  <hr></hr>
                             <Link to="/MathematicsCardComp">  <h5 className="mb-4">Mathematics</h5></Link>  
                        </div>
                    
                </div>
                <div className="col-md-4 col-lg-4">
                    
                        <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-5 h-100">
                            {/* <div className="circle-icon">
                                <span className="ti-headphone-alt text-white"></span>
                            </div>
                            <h5>Email Marketing</h5> */}
                            <h2 className="mb-4">N</h2>
                            <Link to="/NetworkingCardComp">  <h5 className="mb-4">Networking</h5></Link><hr></hr> 
                            <Link to="/NursingCardComp"> <h5 className="mb-4">Nursing</h5> </Link> 
                        </div>
                    
                </div>
            </div>

            <div className="row  mb-4">
                <div className="col-md-4 col-lg-4">
                    
                    
                        <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-5 h-100">
                            {/* <div className="circle-icon">
                                <span className="ti-music-alt text-white"></span>
                            </div> */}
                            {/* <h5>Market Research</h5> */}
                            <h2 className="mb-4 ">O</h2>
                            <Link to="/Organiz_behaviourCardComp">  <h5 className="mb-4">Organisational Behaviour</h5></Link> <hr></hr>
                        </div>
                    
                </div>
                <div className="col-md-4 col-lg-4">
                    
                        <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-5 h-100">
                            {/* <div className="circle-icon">
                                <span className="ti-dashboard text-white"></span>
                            </div>
                            
                            <h5>Content Marketing</h5> */}
                             <h2 className="mb-4">P</h2>
                             <Link to="/PersonalProfessionalDevCardComp"> <h5 className="mb-4">Personal & Professional development</h5></Link> <hr></hr>
                             <Link to="/PhilosophyCardComp"> <h5 className="mb-4">Philosophy</h5></Link> <hr></hr> 
                             <Link to="/PlanningforGrowthCardComp"> <h5 className="mb-4">Planning for growth</h5></Link>  
                        </div>
                    
                </div>
                <div className="col-md-4 col-lg-4">
                    
                        <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-5 h-100">
                            {/* <div className="circle-icon">
                                <span className="ti-headphone-alt text-white"></span>
                            </div>
                            <h5>Email Marketing</h5> */}
                            <h2 className="mb-4">R</h2>
                            <Link to="/ReligionCardComp"> <h5 className="mb-4">Religion</h5></Link><hr></hr> 
                        </div>
                    
                </div>
            </div>


            <div className="row  mb-4">
                <div className="col-md-4 col-lg-4">
                    
                    
                        <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-5 h-100">
                            {/* <div className="circle-icon">
                                <span className="ti-music-alt text-white"></span>
                            </div> */}
                            {/* <h5>Market Research</h5> */}
                            <h2 className="mb-4 ">S</h2>
                            <Link to="/SocialMediaCardComp"> <h5 className="mb-4">Social Media</h5></Link><hr></hr>  
                            <Link to="/SocialPolicyCardComp"> <h5 className="mb-4">Social Policy</h5> </Link> <hr></hr> 
                            <Link to="/SociologyCardComp"> <h5 className="mb-4">Sociology</h5></Link>   
                        </div>
                    
                </div>
                <div className="col-md-4 col-lg-4">
                    
                        <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-5 h-100">
                            {/* <div className="circle-icon">
                                <span className="ti-dashboard text-white"></span>
                            </div>
                            
                            <h5>Content Marketing</h5> */}
                             <h2 className="mb-4">T</h2>
                             <Link to="/TeachingCardComp"> <h5 className="mb-4">Teaching</h5></Link>  <hr></hr>
                             <Link to="/TheologyCardComp">  <h5 className="mb-4">Theology</h5></Link> <hr></hr> 
                             <Link to="/TourismCardComp">  <h5 className="mb-4">Tourism</h5> </Link> 
                        </div>
                    
                </div>
                <div className="col-md-4 col-lg-4">
                    
                        <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-5 h-100">
                            {/* <div className="circle-icon">
                                <span className="ti-headphone-alt text-white"></span>
                            </div>
                            <h5>Email Marketing</h5> */}
                            <h2 className="mb-4">U</h2>
                            <Link to="/UnderstandSelfOthersCardComp"> <h5 className="lead mb-4">Understanding Self and Others</h5></Link> <hr></hr>
                        </div>
                    
                </div>
            </div>
        </div>
    </section>
      
    </div>
  );
}

export default CardSection;
