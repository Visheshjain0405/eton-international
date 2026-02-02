import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
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
            <Helmet>
                <title>About Eteon International | Our Story & Global Vision</title>
                <meta name="description" content="Discover Eteon International's journey, our commitment to quality, and our mission to simplify global trade. Learn about our leadership and core values." />
            </Helmet>
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
