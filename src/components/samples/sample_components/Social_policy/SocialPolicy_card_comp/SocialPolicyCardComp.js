import React from "react";

import OurServices_2Cards from "./OurServices_2Cards";
import HeroSection from "./HeroSection";
import HeaderSection from "./HeaderSection";
import CopyRights from './CopyRights';

export default function AccountCardComp() {
  return (
    <div className="App">
      <HeaderSection/>
      <HeroSection/>
      <OurServices_2Cards/>
      <CopyRights/>
    </div>
  );
}


