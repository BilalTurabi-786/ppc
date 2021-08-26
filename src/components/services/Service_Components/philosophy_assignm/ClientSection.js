
import React from "react"

export default function ClientSection()
{
    return(
        <>
         <div className="client-section ptb-100" style={{"backgroundImage": "url('img/client-bg.jpg')","backgroundPosition": "no-repeat", "backgroundPosition": "center","backgroundPosition": "center / cover"}}>
 <div className="container">
     <div className="row">
         <div className="col-md-6 col-lg-6">
             <div className="client-heading-wrap">
                 <h3>“Will You Do My Philosophy Homework” Is A Question We Get A Lot</h3>
             </div>
         </div>
         <div className="col-md-6 col-lg-6">
             <div className="client-para">
                 <p>Do you know what the answer to “will you do my philosophy homework” is? Yes! We would absolutely love to get your assignment out of the way for you. It’s really simple to purchase through us, and the process is hassle-free. Give us a try, and we’ll help you secure a winning submission. We’ll also show you why thousands of students across the world favor our service over our competition. </p>
             </div>
         </div>
     </div>
     {/* <!--clients logo start--> */}
     <div className="row align-items-center justify-content-center mb-4">
         <div className="col-md-10 col-lg-9">
             <div className="owl-carousel owl-theme clients-carousel dot-indicator client-logo-wrap">
                
             </div>
         </div>
     </div>
     {/* <!--clients logo end--> */}
 </div>
</div>

        </>
    )
}

