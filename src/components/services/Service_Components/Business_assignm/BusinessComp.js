import React from "react";

import Promosection from "./Promosection";
import WhatClientSay from "./WhatClientSay";
import WhyChooseUs from "./WhyChooseUs";
import CardSection from "./CardSection";
import ClientSection from "./ClientSection";
import HeaderSection from "./HeaderSection";
import HeroSection from "./HeroSection";
import CopyRights from './CopyRights'

function BusinessComp() {
  return (
    <div className="App">
        <HeaderSection/>
        <HeroSection/>
        <CardSection/>
       
        <Promosection/>
        <WhatClientSay/>
        <WhyChooseUs/>
        <ClientSection/>
        <CopyRights/>
    </div>
  );
}

export default BusinessComp;
