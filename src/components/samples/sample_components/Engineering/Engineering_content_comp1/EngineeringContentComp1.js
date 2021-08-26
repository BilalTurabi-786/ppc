import React from "react";
import EngineeringContent_1 from "./EngineeringContent_1";

import HeroSection from "./HeroSection";
import HeaderSection from "./HeaderSection";
import CopyRights from './CopyRights';

export default function EngineeringContentComp1() {
  return (
    <div className="App">
      <HeaderSection/>
      <HeroSection/>
      <EngineeringContent_1/>
      <CopyRights/>
    </div>
  );
}


