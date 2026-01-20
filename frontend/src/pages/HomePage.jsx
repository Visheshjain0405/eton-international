import React from 'react'
import { motion } from 'framer-motion'
import ImageSlider from '../components/home/ImageSlider'
import AboutCompany from '../components/home/AboutCompany'
import ProductCategories from '../components/home/ProductCategories'
import Capabilities from '../components/home/Capabilities'
import WhyChooseUs from '../components/home/WhyChooseUs'
import ExportProcess from '../components/home/ExportProcess'
import GlobalReach from '../components/home/GlobalReach'
import BusinessInquiry from '../components/home/BusinessInquiry'

const HomePage = () => {
    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    }

    const fadeInScale = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    }

    return (
        <div className="overflow-x-hidden">
            {/* Hero Section - No scroll animation as it's above fold */}
            <ImageSlider />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
            >
                <AboutCompany />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInScale}
            >
                <ProductCategories />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
            >
                <Capabilities />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
            >
                <WhyChooseUs />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInScale}
            >
                <ExportProcess />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
            >
                <GlobalReach />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
            >
                <BusinessInquiry />
            </motion.div>
        </div>
    )
}

export default HomePage
