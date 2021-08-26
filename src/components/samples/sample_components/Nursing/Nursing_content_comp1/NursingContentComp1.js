import React from "react";
import NursingContent_1 from "./NursingContent_1";

import HeroSection from "./HeroSection";
import HeaderSection from "./HeaderSection";
import CopyRights from './CopyRights';

export default function NursingContentComp1() {
  return (
    <div className="App">
      <HeaderSection/>
      <HeroSection/>
      <NursingContent_1/>
      <CopyRights/>
    </div>
  );
}


