import React from "react";
import CardSection from "./CardSection";
import Promosection from "./Promosection";
import WhatClientSay from "./WhatClientSay";
import ClientSection from "./ClientSection";
import GetSomeone from "./GetSomeone";
import HeaderSection from "./HeaderSection";
import HeroSection from "./HeroSection";
import CopyRights from './CopyRights'

function PsychologyComp() {
  return (
    <div className="App">
      
      <HeaderSection/>
      <HeroSection/>
        <ClientSection/>
        <GetSomeone/>
        <Promosection/>
        <WhatClientSay/>
        <CardSection/>
        <CopyRights/>
        
    </div>
  );
}

export default PsychologyComp;
