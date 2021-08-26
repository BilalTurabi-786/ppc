import React from "react";
import ClientSection from "./ClientSection";
import CardSection from "./CardSection";
import WhyChooseUsCopy from "./WhyChooseUsCopy";
import WhatClientSay from "./WhatClientSay";
import WhyChooseUs from "./WhyChooseUs";
import HeaderSection from "./HeaderSection";
import HeroSection from "./HeroSection";
import CopyRights from './CopyRights'

function ITComp() {
  return (
    <div className="App">
        <HeaderSection/>
        <HeroSection/>
        <WhatClientSay/>
        <WhyChooseUsCopy/>
        <CardSection/>
        <ClientSection/>
        <WhyChooseUs/>
        <CopyRights/>
    </div>
  );
}

export default ITComp;
