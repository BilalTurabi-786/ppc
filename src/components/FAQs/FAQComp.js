import React from 'react'
import FAQContent from './FAQContent'
import HeaderSection from './HeaderSection'
import HeroSection from './HeroSection'
import CopyRights from './CopyRights'
import PurpleHeader from './PurpleHeader'

export default function FAQComp(){

    return(
        <>
         <PurpleHeader/>
        <HeaderSection/>
        <HeroSection/>
        <FAQContent/>
        <CopyRights/>
        </>
    )
}