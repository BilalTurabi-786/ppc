import React from "react";
import CallToActionVideo from "./CallToActionVideo";
import GetSomeone from "./GetSomeone";
import ClientSection from "./ClientSection";
import WhatClientSay from "./WhatClientSay";
import HeaderSection from "./HeaderSection";
import HeroSection from "./HeroSection";
import CopyRights from './CopyRights'

function PhysicsComp() {
  return (
    <div className="App">
      
      <HeaderSection/>
      <HeroSection/>
      <CallToActionVideo/>
      <WhatClientSay/>
      <ClientSection/>
      <GetSomeone/>
      <CopyRights/>
    </div>
  );
}

export default PhysicsComp;
