import React, { useEffect } from 'react';

const CookiesPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-slate-50 min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
                    <h1 className="text-3xl font-bold font-heading text-primary mb-2">Cookies Policy</h1>
                    <p className="text-slate-500 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

                    <div className="space-y-6 text-slate-700 leading-relaxed">
                        <section>
                            <h2 className="text-xl font-bold text-primary mb-3">1. Use of Cookies</h2>
                            <p>
                                Eteon International ("we", "us", or "our") uses cookies to improve your experience while you navigate through the website.
                                Out of these, the cookies that are categorized as necessary are stored on your browser as they are essential for the working of basic functionalities of the website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-primary mb-3">2. What Are Cookies?</h2>
                            <p>
                                Cookies are small text files that are used to store small pieces of information. They are stored on your device when the website is loaded on your browser.
                                These cookies help us make the website function properly, make it more secure, provide better user experience, and understand how the website performs.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-primary mb-3">3. Types of Cookies We Use</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Necessary Cookies:</strong> Essential for the website to function correctly.</li>
                                <li><strong>Functional Cookies:</strong> Help to perform certain functionalities like sharing the content of the website on social media platforms.</li>
                                <li><strong>Analytics Cookies:</strong> Used to understand how visitors interact with the website. These cookies help provide information on metrics the number of visitors, bounce rate, traffic source, etc.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-primary mb-3">4. Managing Cookies</h2>
                            <p>
                                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
                                If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookiesPolicy;
