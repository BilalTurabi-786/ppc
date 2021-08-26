import React from "react";
import GetSomeone from "./GetSomeone";
import OurService from "./OurServices";
import Promosection from "./Promosection";
import WhatClientSay from "./WhatClientSay";
import WhyChooseUs from "./WhyChooseUs";
import HeaderSection from "./HeaderSection";
import HeroSection from "./HeroSection";
import CopyRights from './CopyRights'

function BiologyComp() {
  return (
    <div className="App">
        <HeaderSection/>
        <HeroSection/>
        <GetSomeone/>
        <OurService/>
        <Promosection/>
        <WhatClientSay/>
        <WhyChooseUs/>
        <CopyRights/>
    </div>
  );
}

export default BiologyComp;
