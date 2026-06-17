import React, { useEffect } from 'react'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Process from './pages/Process'
import GlobalReachPage from './pages/GlobalReachPage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import CookiesPolicy from './pages/CookiesPolicy'
import FloatingContact from './components/common/FloatingContact'
import { Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { QuoteProvider, useQuote } from './context/QuoteContext'
import QuoteModal from './components/common/QuoteModal'
import Lenis from 'lenis'

const AppContent = () => {
  const { isQuoteModalOpen, closeQuoteModal } = useQuote();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen bg-surface font-body relative">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/process" element={<Process />} />
        <Route path="/global-reach" element={<GlobalReachPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/cookies-policy" element={<CookiesPolicy />} />
      </Routes>
      <FloatingContact />
      <Footer />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
    </div>
  )
}

function App() {
  return (
    <HelmetProvider>
      <QuoteProvider>
        <AppContent />
      </QuoteProvider>
    </HelmetProvider>
  )
}

export default App
