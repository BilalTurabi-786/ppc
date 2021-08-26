import React from "react";
import AccountingContent_1 from "./AccountingContent_1";

import HeroSection from "./HeroSection";
import HeaderSection from "./HeaderSection";
import CopyRights from './CopyRights';

export default function AccountContentComp1() {
  return (
    <div className="App">
      <HeaderSection/>
      <HeroSection/>
      <AccountingContent_1/>
      <CopyRights/>
    </div>
  );
}


