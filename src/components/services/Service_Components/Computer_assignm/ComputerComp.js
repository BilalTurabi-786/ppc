import React from "react";
import GetSomeone from "./GetSomeone";
import OurService from "./OurServices";
import Promosection from "./Promosection";
import WhatClientSay from "./WhatClientSay";
import ClientSection from "./ClientSection";
import HeaderSection from "./HeaderSection";
import HeroSection from "./HeroSection";
import CopyRights from './CopyRights'
import OurServicesCopy from "./OurServicesCopy";

function ComputerComp() {
  return (
    <div className="App">
      <HeaderSection/>
      <HeroSection/>
      <Promosection/>
        <GetSomeone/>
        <ClientSection/>
        <WhatClientSay/>
        <OurService/>
        <OurServicesCopy/>
        <CopyRights/>
    </div>
  );
}

export default ComputerComp;
