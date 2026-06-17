import React, { createContext, useContext, useState } from 'react';

const QuoteContext = createContext(undefined);

export const QuoteProvider = ({ children }) => {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

    const openQuoteModal = () => setIsQuoteModalOpen(true);
    const closeQuoteModal = () => setIsQuoteModalOpen(false);

    return (
        <QuoteContext.Provider value={{ isQuoteModalOpen, openQuoteModal, closeQuoteModal }}>
            {children}
        </QuoteContext.Provider>
    );
};

export const useQuote = () => {
    const context = useContext(QuoteContext);
    if (!context) {
        throw new Error('useQuote must be used within a QuoteProvider');
    }
    return context;
};
