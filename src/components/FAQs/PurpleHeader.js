
import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {Link} from 'react-router-dom'


export default function PurpleHeader() {
  return (
    <div className="App">
     {/* <!--loader start--> */}
{/*      
<div id="preloader">
    <div className="loader1">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</div> */}

{/* <!--loader end--> */}

{/* <!--header section start--> */}
<header className="header">
    {/* <!--topbar start--> */}
    
    {/* <!--topbar end-->
    <!--start navbar--> */}
    <section>
    <div id="header-top-bar" className="py-0"style={{ backgroundImage: `linear-gradient(to right, black, #4A2D1F`, }}>
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-md-7 col-lg-7 d-none d-md-block d-lg-block">
                    <div className="topbar-text text-white">
                        <ul className="list-inline">
                            <li style={{paddingTop: 11}} className="list-inline-item"><bold className="fa fa-headphones-alt"></bold> <bold className="pt-1">24x7 Technical Support</bold></li>
                            <li style={{paddingTop: 11}} className="list-inline-item"><span className="fa fa-phone-alt"></span> <bold className="pt-1">883-4565-123456</bold></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4 col-lg-4">
                    <div className="topbar-text text-white">
                        <ul className="list-inline text-md-right text-lg-right text-left  mb-0">
                            <li className="list-inline-item">
                                <a href="#" className="rounded"><span className="fa fa-facebook-f"></span></a>
                            </li>
                            <li className="list-inline-item"><a href="#" className="rounded"><span
                                    className="fa fa-twitter"></span></a>
                            </li>
                            <li className="list-inline-item"><a href="#" className="rounded"><span
                                    className="fa fa-linkedin"></span></a>
                            </li>
                            <li className="list-inline-item"><a href="#" className="rounded"><span
                                    className="fa fa-dribbble"></span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
   
</header>
{/* <!--header section end--> */}

    </div>
  );
}

