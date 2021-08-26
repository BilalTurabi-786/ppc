import React from "react";
import WhyChooseUs from "./WhyChooseUs";
import WhatClientSay from "./WhatClientSay";
import ClientSection from "./ClientSection";
import Promosection from "./Promosection";
import CallToActionVideo from "./CallToActionVideo";
import HeaderSection from "./HeaderSection";
import HeroSection from "./HeroSection";
import CopyRights from './CopyRights'

function ManagementComp() {
  return (
    <div className="App">
        <HeaderSection/>
        <HeroSection/>
        <WhyChooseUs/>  
        <ClientSection/>
        <WhatClientSay/>
        
        <Promosection/>  
        <CallToActionVideo/>
        <CopyRights/>
    </div>
  );
}

export default ManagementComp;
