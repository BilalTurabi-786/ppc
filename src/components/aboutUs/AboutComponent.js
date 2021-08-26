import React from 'react'
import AboutUsNew from './AboutUsNew'
import CheatingFraud from './CheatingFraud'
import HeaderBackground from './HeaderBackground'
import HeaderNavbar from './HeaderNavbar'
import OurExpertwriter from './OurExpertwriter'
import OurMission from './OurMission'
import WhatforStudent from './WhatforStudent'
import 'bootstrap/dist/css/bootstrap.min.css';
import CopyRights from './CopyRights'
import PurpleHeader from './PurpleHeader'

export default function AboutComponent()
{
    return(
        <>
         <PurpleHeader/>
         <HeaderNavbar/>
         <HeaderBackground/>
        <AboutUsNew/>
         <OurExpertwriter/>
         <OurMission/>
         <WhatforStudent/>
        <CheatingFraud/>
        <CopyRights/>
        
     
        </>
    )
}