import React from "react";
import OurService from "./OurServices";
import WhatClientSay from "./WhatClientSay";
import ClientSection from "./ClientSection";
import HeaderSection from "./HeaderSection";
import HeroSection from "./HeroSection";
import CopyRights from './CopyRights'
import OurServicesCopy from "./OurServicesCopy";

function GeographyComp() {
  return (
    <div className="App">
      <HeaderSection/>
      <HeroSection/>
       <WhatClientSay/>
       <ClientSection/>
        <OurService/>
        <OurServicesCopy/>
        <CopyRights/>
    
    </div>
  );
}

export default GeographyComp;
