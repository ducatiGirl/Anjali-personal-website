import React from 'react';

const iCare = () => {
    return (
        /* Outer wrapper with the paper background to match Punyam */
        <div className="w-full flex justify-center bg-[#fff1e5] min-h-screen">
            
            <div className="max-w-[1200px] w-full px-12 py-12 font-sans leading-relaxed text-[#333] flex flex-col items-center">
                
                {/* Header Section */}
                <header className="text-center pb-12 border-b-2 border-gray-200 w-full">
                    <h1 className="text-[3.5rem] text-[#222] font-bold mb-2 leading-tight uppercase tracking-tight">
                        iCare (DAIS Lab)
                    </h1>
                   
                    {/* Key Info Box */}
                    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl inline-block text-left mt-6 shadow-sm border border-gray-100 mx-auto">
                        <p className="my-1"><strong>Research Lab:</strong> Data Analysis & Intelligent Systems (DAIS) Group</p>
                        <p className="my-1"><strong>Role:</strong> Undergraduate Research Assistant</p>
                        <p className="my-1"><strong>Core Tech:</strong> NLP, Python, React, Audio Emotion Recognition, AQA</p>
                    </div>

                    <div className="mt-8">
                        <a href="https://sites.google.com/uw.edu/dais-uw" 
                           target="_blank" 
                           rel="noreferrer"
                           className="inline-block px-8 py-3 bg-[#0f5499] hover:bg-[#0d4680] text-white no-underline rounded-md transition-colors font-medium">
                            Visit Lab Website
                        </a>
                    </div>
                </header>

                <div className="mt-12 w-full max-w-3xl mx-auto">
                    
                    {/* The Mission Section */}
                    <section className="py-8 border-b border-gray-200">
                        <h2 className="text-[2.2rem] text-[#222] font-bold mb-6 text-center uppercase tracking-wide">
                            The Mission
                        </h2>
                        <p className="text-xl text-center leading-relaxed text-gray-700">
                            I am part of a research team at the University of Washington’s DAIS Lab developing <strong>iCare</strong>, a specialized platform designed to support parents of children with developmental disabilities. We leverage Natural Language Processing (NLP) to provide accessible, behavioral health interventions through a conversational interface (Carebot and Coachbot).
                        </p>
                    </section>

                    {/* My Impact Section */}
                    <section className="py-12 border-b border-gray-200">
                        <h2 className="text-[2.2rem] text-[#222] font-bold mb-10 text-center uppercase tracking-wide">
                            My Impact
                        </h2>
                        <div className="space-y-10">
                            <div className="flex flex-col items-start">
                                <span className="text-[1.4rem] font-bold text-[#005f54] border-b-2 border-[#005f54] inline-block mb-3">Multimodal Sentiment Analysis</span>
                                <p className="text-lg">
                                    Conducted sentiment analysis on multimodal data to curate a specialized <strong>Emotional AQA (Automatic Question Answering)</strong> dataset. I pivoted the research from traditional text-based QA to audio-based emotion recognition to enhance model sensitivity to user distress.
                                </p>
                            </div>
                            <div className="flex flex-col items-start">
                                <span className="text-[1.4rem] font-bold text-[#005f54] border-b-2 border-[#005f54] inline-block mb-3">Model Fine-Tuning</span>
                                <p className="text-lg">
                                    Utilized sentiment analysis results to fine-tune caregiver support models. By focusing on <strong>vocal cues independently of linguistic content</strong>, I helped improve the bot's ability to detect nuanced distress levels in real-time.
                                </p>
                            </div>
                            <div className="flex flex-col items-start">
                                <span className="text-[1.4rem] font-bold text-[#005f54] border-b-2 border-[#005f54] inline-block mb-3">System Architecture</span>
                                <p className="text-lg">
                                    Assisted in the technical onboarding and maintenance of the iCare platform, ensuring data integrity across the React-based frontend and the ML-driven backend while maintaining strict standards for patient privacy.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Research Context Section */}
                    <section className="py-12">
                        <h2 className="text-[2.2rem] text-[#222] font-bold mb-10 text-center uppercase tracking-wide">
                            Research Context
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-[#e6d9ce] p-6 rounded-lg border border-gray-200">
                                <h3 className="text-[1.2rem] font-bold mb-2 uppercase text-[#333]">Carebot</h3>
                                <p className="text-gray-700">Providing empathetic, AI-driven responses to families and individuals in need through iterative, user-centered design.</p>
                            </div>
                            <div className="bg-[#e6d9ce] p-6 rounded-lg border border-gray-200">
                                <h3 className="text-[1.2rem] font-bold mb-2 uppercase text-[#333]">Coachbot</h3>
                                <p className="text-gray-700">Specialized training and behavioral health support for caregivers to enhance the quality of home-based care.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default iCare;