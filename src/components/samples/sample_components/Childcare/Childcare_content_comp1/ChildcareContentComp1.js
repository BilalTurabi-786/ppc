import React from "react";
import ChildcareContent_1 from "./ChildcareContent_1";

import HeroSection from "./HeroSection";
import HeaderSection from "./HeaderSection";
import CopyRights from './CopyRights';

export default function ChildcareContentComp1() {
  return (
    <div className="App">
      <HeaderSection/>
      <HeroSection/>
      <ChildcareContent_1/>
      <CopyRights/>
    </div>
  );
}


