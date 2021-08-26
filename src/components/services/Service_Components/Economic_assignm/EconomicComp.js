import React from "react";
import GetSomeone from "./GetSomeone";
import Promosection from "./Promosection";

import WhyChooseUs from "./WhyChooseUs";
import CardSection from "./CardSection";
import HeaderSection from "./HeaderSection";
import HeroSection from "./HeroSection";
import CopyRights from './CopyRights'

function EconomicComp() {
  return (
    <div className="App">
        <HeaderSection/>
        <HeroSection/>

         <Promosection/>
        <GetSomeone/>
        <CardSection/>
        <WhyChooseUs/>
        <CopyRights/>
    </div>
  );
}

export default EconomicComp;
