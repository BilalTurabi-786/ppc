import React from "react";
import OurService from "./OurServices";
import Promosection from "./Promosection";
import WhatClientSay from "./WhatClientSay";
import WhyChooseUs from "./WhyChooseUs";
import ClientSection from "./ClientSection";
import HeaderSection from "./HeaderSection";
import HeroSection from "./HeroSection";
import CopyRights from './CopyRights'

function LawComp() {
  return (
    <div className="App">
        <HeaderSection/>
        <HeroSection/>
        <OurService/>
        <WhyChooseUs/>
        <ClientSection/>
        <Promosection/>
        <WhatClientSay/>
        <CopyRights/>
    </div>
  );
}

export default LawComp;
