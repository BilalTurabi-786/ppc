import React from "react";
import CallToActionVideo from "./CallToActionVideo";

import WhatClientSay from "./WhatClientSay";
import WhyChooseUs from "./WhyChooseUs";
import ClientSection from "./ClientSection";
import HeaderSection from "./HeaderSection";
import HeroSection from "./HeroSection";
import CopyRights from './CopyRights'

function MarketingComp() {
  return (
    <div className="App">
      
      <HeaderSection/>
       <HeroSection/>
      <ClientSection/>
        <WhatClientSay/>
        <WhyChooseUs/>
        <CallToActionVideo/>
        <CopyRights/>
    </div>
  );
}

export default MarketingComp;
