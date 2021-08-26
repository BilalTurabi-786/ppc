import React from "react";

import Promosection from "./Promosection";
import WhatClientSay from "./WhatClientSay";
import WhyChooseUs from "./WhyChooseUs";
import ContactUs from "./ContactUs";
import ClientSection from "./ClientSection";
import HeaderSection from "./HeaderSection";
import HeroSection from "./HeroSection";
import CopyRights from './CopyRights'

function HistoryComp() {
  return (
    <div className="App">
        <HeaderSection/>
        <HeroSection/>
        <Promosection/>
        <WhyChooseUs/>
        <WhatClientSay/>
        <ContactUs/>
        <ClientSection/>
        <CopyRights/>
    </div>
  );
}

export default HistoryComp;
