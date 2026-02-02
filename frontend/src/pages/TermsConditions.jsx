import React, { useEffect } from 'react';

const TermsConditions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-slate-50 min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
                    <h1 className="text-3xl font-bold font-heading text-primary mb-2">Terms and Conditions</h1>
                    <p className="text-slate-500 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

                    <div className="space-y-6 text-slate-700 leading-relaxed">
                        <section>
                            <h2 className="text-xl font-bold text-primary mb-3">1. Agreement to Terms</h2>
                            <p>
                                These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and
                                Eteon International ("we," "us" or "our"), concerning your access to and use of our website and services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-primary mb-3">2. Intellectual Property Rights</h2>
                            <p>
                                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs,
                                and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-primary mb-3">3. User Representations</h2>
                            <p>
                                By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete;
                                (2) you have the legal capacity and you agree to comply with these Terms of Use; (3) you are not a minor in the jurisdiction in which you reside.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-primary mb-3">4. Products and Services</h2>
                            <p>
                                All products are subject to availability. We reserve the right to discontinue any products at any time for any reason.
                                Prices for all products are subject to change.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-primary mb-3">5. Disclaimer</h2>
                            <p>
                                The site is provided on an as-is and as-available basis. You agree that your use of the site and our services will be at your sole risk.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsConditions;
