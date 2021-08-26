import React from "react";

import OurServices_1Card from "./OurServices_1Card";
import HeroSection from "./HeroSection";
import HeaderSection from "./HeaderSection";
import CopyRights from './CopyRights';

export default function PhilosophyCardComp() {
  return (
    <div className="App">
      <HeaderSection/>
      <HeroSection/>
      <OurServices_1Card/>
      <CopyRights/>
    </div>
  );
}


