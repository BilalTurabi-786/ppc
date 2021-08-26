import React from "react";
import GetSomeone from "./GetSomeone";
import OurServices from "./OurServices";
import WhatClientSay from "./WhatClientSay";
import WhyChooseUs from "./WhyChooseUs";
import ClientSection from "./ClientSection";
import HeaderSection from "./HeaderSection";
import HeroSection from "./HeroSection";
import CopyRights from './CopyRights'

function EnglishComp() {
  return (
    <div className="App">
        <HeaderSection/>
        <HeroSection/>
        <WhyChooseUs/>
        <WhatClientSay/>
        <OurServices/>
        <GetSomeone/>
        <ClientSection/>
        <CopyRights/>
    </div>
  );
}

export default EnglishComp;
