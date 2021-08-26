import React from "react";
import GetSomeone from "./GetSomeone";
import WhatClientSay from "./WhatClientSay";
import WhyChooseUs from "./WhyChooseUs";
import ClientSection from "./ClientSection";
import HeaderSection from "./HeaderSection";
import HeroSection from "./HeroSection";
import CopyRights from './CopyRights'


function StatisticsComp() {
  return (
    <div className="App">
      <HeaderSection/>
      <HeroSection/>
      <GetSomeone/>
       <ClientSection/>
        <WhatClientSay/>
        <WhyChooseUs/>
        <CopyRights/>
    </div>
  );
}

export default StatisticsComp;
