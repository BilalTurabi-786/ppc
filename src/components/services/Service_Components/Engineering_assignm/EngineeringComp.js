import React from "react";
import GetSomeone from "./GetSomeone";
import OurService from "./OurServices";
import Promosection from "./Promosection";
import WhatClientSay from "./WhatClientSay";
import ClientSection from "./ClientSection";
import HeaderSection from "./HeaderSection";
import HeroSection from "./HeroSection";
import CopyRights from './CopyRights'

function EngineeringComp() {
  return (
    <div className="App">
      <HeaderSection/>
      <HeroSection/>
       <Promosection/>
        <GetSomeone/>
        <OurService/>
        <ClientSection/>
        <WhatClientSay/>
        <CopyRights/>
   
    </div>
  );
}

export default EngineeringComp;
