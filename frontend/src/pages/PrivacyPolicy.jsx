import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-slate-50 min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
                    <h1 className="text-3xl font-bold font-heading text-primary mb-2">Privacy Policy</h1>
                    <p className="text-slate-500 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

                    <div className="space-y-6 text-slate-700 leading-relaxed">
                        <section>
                            <h2 className="text-xl font-bold text-primary mb-3">1. Introduction</h2>
                            <p>
                                At Eteon International, we respect your privacy and are committed to protecting your personal data.
                                This privacy policy will inform you as to how we look after your personal data when you visit our website
                                and tell you about your privacy rights.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-primary mb-3">2. Data We Collect</h2>
                            <p className="mb-2">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                                <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-primary mb-3">3. How We Use Your Data</h2>
                            <p>
                                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data
                                to process your orders, manage our relationship with you, and improve our website and services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-primary mb-3">4. Data Security</h2>
                            <p>
                                We have put in place appropriate security measures to prevent your personal data from being accidentally lost,
                                used or accessed in an unauthorized way, altered or disclosed.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-primary mb-3">5. Contact Us</h2>
                            <p>
                                If you have any questions about this privacy policy or our privacy practices, please contact us at:
                                <a href="mailto:info@eteon-international.com" className="text-accent font-medium ml-1">info@eteon-international.com</a>
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
