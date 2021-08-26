import React from "react";
import FinanceContent_1 from "./FinanceContent_1";

import HeroSection from "./HeroSection";
import HeaderSection from "./HeaderSection";
import CopyRights from './CopyRights';

export default function FinanceContentComp1() {
  return (
    <div className="App">
      <HeaderSection/>
      <HeroSection/>
      <FinanceContent_1/>
      <CopyRights/>
    </div>
  );
}


