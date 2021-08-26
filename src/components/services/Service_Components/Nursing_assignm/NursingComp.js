import React from "react";
import AssignmentHelp from './AssignmentHelp'
import ContactUs from "./ContactUs";
import OurService from "./OurServices";
import Promosection from "./Promosection";
import WhyChooseUs from "./WhyChooseUs";
import HomeworkCard from "./HomeworkCard";
import HeaderSection from "./HeaderSection";
import HeroSection from "./HeroSection";
import CopyRights from './CopyRights'

export default function NursingComp() {
  return (
    <div className="App">
        <HeaderSection/>
        <HeroSection/>
        <Promosection/>
        <OurService/>
        <AssignmentHelp/>
        <HomeworkCard/>
        <WhyChooseUs/>
        <ContactUs/>
        <CopyRights/>
    </div>
  );
}


