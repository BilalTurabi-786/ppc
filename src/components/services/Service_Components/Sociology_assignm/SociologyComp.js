import React from "react";
import CallToActionVideo from "./CallToActionVideo";

import WhatClientSay from "./WhatClientSay";
import WhyChooseUs from "./WhyChooseUs";
import ClientSection from "./ClientSection";
import ClientSectionCopy from "./ClientSectionCopy";
import CardSection from "./CardSection";
import HeaderSection from "./HeaderSection";
import HeroSection from "./HeroSection";
import CopyRights from './CopyRights'

function SociologyComp() {
  return (
    <div className="App">
      <HeaderSection/>
      <HeroSection/>
      <CallToActionVideo/>
      <ClientSection/>
      <WhyChooseUs/>
       <ClientSectionCopy/>
       <CardSection/>
       <WhatClientSay/>
       <CopyRights/>
    </div>
  );
}

export default SociologyComp;
