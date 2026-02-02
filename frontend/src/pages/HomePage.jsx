import React from 'react'
import { Helmet } from 'react-helmet-async'
import ImageSlider from '../components/home/ImageSlider'
import AboutCompany from '../components/home/AboutCompany'
import ProductCategories from '../components/home/ProductCategories'
import Capabilities from '../components/home/Capabilities'
import WhyChooseUs from '../components/home/WhyChooseUs'
import ExportProcess from '../components/home/ExportProcess'
import GlobalReach from '../components/home/GlobalReach'
import BusinessInquiry from '../components/home/BusinessInquiry'

const HomePage = () => {
    return (
        <div className="overflow-x-hidden">
            <Helmet>
                <title>Eteon International | Global Export & Import Solutions</title>
                <meta name="description" content="Leading global trade partner specializing in premium industrial packaging, agro textiles, and agricultural products. Connecting India to the worldwide market." />
            </Helmet>
            {/* Hero Section */}
            <ImageSlider />

            {/* Content Sections */}
            <AboutCompany />
            <ProductCategories />
            <Capabilities />
            <WhyChooseUs />
            <ExportProcess />
            <GlobalReach />
            <BusinessInquiry />
        </div>
    )
}

export default HomePage
