"use client";

import React, { useEffect } from "react";
import { QuoteProvider, useQuote } from "../../context/QuoteContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingContact from "./FloatingContact";
import QuoteModal from "./QuoteModal";
import Lenis from "lenis";

const AppContent = ({ children }) => {
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
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-surface font-body relative flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <FloatingContact />
      <Footer />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
    </div>
  );
};

export default function Providers({ children }) {
  return (
    <QuoteProvider>
      <AppContent>{children}</AppContent>
    </QuoteProvider>
  );
}
