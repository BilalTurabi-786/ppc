import React from "react";
import InformationSystemContent_1 from "./InformationSystemContent_1";

import HeroSection from "./HeroSection";
import HeaderSection from "./HeaderSection";
import CopyRights from './CopyRights';

export default function InformationSystemContentComp1() {
  return (
    <div className="App">
      <HeaderSection/>
      <HeroSection/>
      <InformationSystemContent_1/>
      <CopyRights/>
    </div>
  );
}


