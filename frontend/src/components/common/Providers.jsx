"use client";

import React from "react";
import { QuoteProvider, useQuote } from "../../context/QuoteContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingContact from "./FloatingContact";
import QuoteModal from "./QuoteModal";

const AppContent = ({ children }) => {
  const { isQuoteModalOpen, closeQuoteModal } = useQuote();

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
