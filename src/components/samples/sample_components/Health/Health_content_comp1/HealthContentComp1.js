import React from "react";
import HealthContent_1 from "./HealthContent_1";

import HeroSection from "./HeroSection";
import HeaderSection from "./HeaderSection";
import CopyRights from './CopyRights';

export default function HealthContentComp1() {
  return (
    <div className="App">
      <HeaderSection/>
      <HeroSection/>
      <HealthContent_1/>
      <CopyRights/>
    </div>
  );
}


