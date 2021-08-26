import React from "react";
import OurService from "./OurServices";
import Promosection from "./Promosection";
import WhatClientSay from "./WhatClientSay";
import WhyChooseUs from "./WhyChooseUs";
import ClientSection from "./ClientSection";
import HeaderSection from "./HeaderSection";
import HeroSection from "./HeroSection";
import CopyRights from './CopyRights'

function FinanceComp() {
  return (
    <div className="App">
        <HeaderSection/>
        <HeroSection/>
      <Promosection/>
      <WhyChooseUs/>
        <OurService/>
        <WhatClientSay/>
        <ClientSection/>
        <CopyRights/>
    </div>
  );
}

export default FinanceComp;
