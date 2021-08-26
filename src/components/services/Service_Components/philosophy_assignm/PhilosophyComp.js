import React from "react";
import OurService from "./OurServices";
import Promosection from "./Promosection";
import WhyChooseUs from "./WhyChooseUs";
import AssignmentSolution from "./AssignmentSolution";
import ClientSection from "./ClientSection";
import HeaderSection from "./HeaderSection";
import HeroSection from "./HeroSection";
import CopyRights from './CopyRights'

export default function PhilosophyComp() {
  return (
    <>
     
     <HeaderSection/>
    <HeroSection/>
    <Promosection/>
    <OurService/>
    <WhyChooseUs/>
    <AssignmentSolution/>
    <ClientSection/>
    <CopyRights/>
    </>
  );
}

