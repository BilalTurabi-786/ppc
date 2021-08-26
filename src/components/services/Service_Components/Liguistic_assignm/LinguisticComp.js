import React from "react";
import WhatClientSay from "./WhatClientSay";
import WhyChooseUs from "./WhyChooseUs";
import HeaderSection from "./HeaderSection";
import HeroSection from "./HeroSection";
import CopyRights from './CopyRights'

function LinguisticComp() {
  return (
    <div className="App">
        <HeaderSection/>
        <HeroSection/>
        <WhyChooseUs/>
        <WhatClientSay/>
        <CopyRights/>
    </div>
  );
}

export default LinguisticComp;
