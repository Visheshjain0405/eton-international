import React, { useRef } from 'react';
import AboutHero from '../components/about/AboutHero';
import CompanyProfile from '../components/about/CompanyProfile';
import BusinessPhilosophy from '../components/about/BusinessPhilosophy';
import QualityCompliance from '../components/about/QualityCompliance';
import VisionMission from '../components/about/VisionMission';
import Leadership from '../components/about/Leadership';
import GlobalOutlook from '../components/about/GlobalOutlook';
import AboutCTA from '../components/about/AboutCTA';

const AboutUs = () => {

    return (
        <div className="w-full overflow-hidden bg-white font-body selection:bg-accent selection:text-white">
            <AboutHero />
            <CompanyProfile />
            <BusinessPhilosophy />
            <QualityCompliance />
            <VisionMission />
            <Leadership />
            <GlobalOutlook />
            <AboutCTA />
        </div>
    );
};

export default AboutUs;
