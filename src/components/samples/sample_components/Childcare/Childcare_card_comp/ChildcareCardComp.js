import React from "react";

import OurServices_3Cards from "./OurServices_3Cards";
import HeroSection from "./HeroSection";
import HeaderSection from "./HeaderSection";
import CopyRights from './CopyRights';

export default function ChildcareCardComp() {
  return (
    <div className="App">
      <HeaderSection/>
      <HeroSection/>
      <OurServices_3Cards/>
      <CopyRights/>
    </div>
  );
}


