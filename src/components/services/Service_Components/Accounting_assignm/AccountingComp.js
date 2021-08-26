import React from "react";
import GetSomeone from "./GetSomeone";
import OurService from "./OurServices";
import Promosection from "./Promosection";
import WhatClientSay from "./WhatClientSay";
import HeroSection from "./HeroSection";
import HeaderSection from "./HeaderSection";
import CopyRights from './CopyRights'

export default function AccountingComp() {
  return (
    <div className="App">
      <HeaderSection/>
      <HeroSection/>
      <GetSomeone/>
      <OurService/>
      <Promosection/>
      <WhatClientSay/>
      <CopyRights/>
    </div>
  );
}


