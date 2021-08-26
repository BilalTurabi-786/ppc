import React from "react";
import ManagementContent_1 from "./ManagementContent_1";

import HeroSection from "./HeroSection";
import HeaderSection from "./HeaderSection";
import CopyRights from './CopyRights';

export default function ManagementContentComp1() {
  return (
    <div className="App">
      <HeaderSection/>
      <HeroSection/>
      <ManagementContent_1/>
      <CopyRights/>
    </div>
  );
}


