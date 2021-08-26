import React from "react";
import PhilosophyContent_1 from "./PhilosophyContent_1";

import HeroSection from "./HeroSection";
import HeaderSection from "./HeaderSection";
import CopyRights from './CopyRights';

export default function PhilosophyContentComp1() {
  return (
    <div className="App">
      <HeaderSection/>
      <HeroSection/>
      <PhilosophyContent_1/>
      <CopyRights/>
    </div>
  );
}


