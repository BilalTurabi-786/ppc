import React from 'react';
import HeaderSection from './HeaderSection';
import HeroSection from './HeroSection';
import CardSection from './CardSection';
import CopyRights from './CopyRights';
import PurpleHeader from './PurpleHeader';
import ScrollToTopButton from './ScrollToTopButton';

export default function SampleComponent()
{
    return(
        <>
        
        <PurpleHeader/>
        <HeaderSection/>
        <HeroSection/>
        <CardSection/>
        <CopyRights/>
        <ScrollToTopButton/>
        </>
    )
}