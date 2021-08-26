import React from 'react'
import ClientSection from './ClientSection'
import HeroSection from './HeroSection'
import ChallengeInAcademicAssign from './ChallengeInAcademicAssign'
import MeetCourseWorkObligation from './MeetCourseWorkObligation'
import TheSolution from './TheSolution'
import OurService from './OurServices'
import HeaderSection from './HeaderSection'
import AssignHelpServices from './AssignHelpServices'
import StudentTestimonials from './StudentTestimonials'
import WhewedImageSlider from './WhewedImageSlider'
import SafetyComesFirst from './SafetyComesFirst'
import ItsInTheNumbers from './ItsInTheNumbers'
import PowerContentCreationCard from './PowerContentCreationCard'
import NumberSayItAll from './NumberSayItAll'
import FooterSection from './FooterSection'
import WritingCategories from './WritingCategories'
import PriceCalculator from './PriceCalculator'
import CopyRights from './CopyRights'
import PurpleHeader from './PurpleHeader'

export default function ServiceComponent(){

    return(
        <>
        <PurpleHeader/>
        <HeaderSection/>
        <HeroSection/>
        <MeetCourseWorkObligation/>
        <ItsInTheNumbers/>
        <ChallengeInAcademicAssign/>
        <TheSolution/>
        <OurService/>
        <PriceCalculator/>
        <WhewedImageSlider/>
        <ClientSection/>
        <AssignHelpServices/>
        <StudentTestimonials/>
        <SafetyComesFirst/>
        
        <PowerContentCreationCard/>
        <NumberSayItAll/>
        <WritingCategories/>
        <FooterSection/>
        <CopyRights/>
        
        </>
    )
}