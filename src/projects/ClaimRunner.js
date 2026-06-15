import React from 'react';

const ClaimRunner = () => {
    return (
        /* Outer wrapper with the updated paper background */
        <div className="w-full flex justify-center bg-[#fff1e5] min-h-screen">
            
            <div className="max-w-[1200px] w-full px-4 md:px-12 py-8 md:py-12 font-sans leading-relaxed text-[#333] flex flex-col items-center">
                
                {/* Header Section */}
                <header className="text-center pb-8 border-b-2 border-gray-200 w-full">
                    <h1 className="text-3xl md:text-[3.5rem] text-[#222] font-bold mb-2 leading-tight uppercase tracking-tight">
                        ClaimRunner AI
                    </h1>
                    
                    {/* Your Key Info Box */}
                    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl inline-block text-left mt-6 shadow-sm border border-gray-100 mx-auto">
                        <p className="my-1"><strong>Project Type:</strong> Front-end developer for small startup </p>
                        <p className="my-1"><strong>Role:</strong> Lead Web Developer</p>
                        <p className="my-1"><strong>Awards:</strong> 1st Place: iStartup Launch Sprint </p>
                        <p className="my-1"><strong>Grantst:</strong> $500 micro grant given by the iStartUp Lab </p>
                        <p className="my-1"><strong>Tech Stack:</strong> Python, Flask, FastAPI, React, Retrieval-Augmented Generation (RAG), Large Language Models</p>
                    </div>

                    <div className="mt-8">
                        <a href="https://www.claimrunner.ai/#/" 
                           target="_blank" 
                           rel="noreferrer"
                           className="inline-block px-8 py-3 bg-[#0f5499] hover:bg-[#0d4680] text-white no-underline rounded-md transition-colors font-medium">
                            View Live Platform
                        </a>
                    </div>
                </header>

                {/* Main Content Body */}
                <div className="mt-12 w-full max-w-4xl mx-auto">
                    
                    {/* The Mission Section */}
                    <section className="py-8 border-b border-gray-200">
                        <h2 className="text-[2.2rem] text-[#222] font-bold mb-6 text-center uppercase tracking-wide">
                            The Mission
                        </h2>
                        <p className="text-xl text-center leading-relaxed text-gray-700">
                            Navigating legal documentation and processing claims manually is notoriously slow, complex, and prone to administrative bottlenecks. As a co-founder of ClaimRunner AI, I set out to democratize and accelerate this workflow. We built an intelligent legal tech platform designed to automate document parsing, analyze legal context, and streamline claim processing through advanced artificial intelligence, earning top recognition at the iStartup Launch Sprint.
                        </p>
                    </section>

                    {/* My Impact Section */}
                    <section className="py-12 border-b border-gray-200">
                        <h2 className="text-[2.2rem] text-[#222] font-bold mb-10 text-center uppercase tracking-wide">
                            My Impact
                        </h2>
                        <div className="space-y-8 text-left">
                            <div className="flex flex-col">
                                <span className="text-[1.4rem] font-bold text-[#005f54] border-b-2 border-[#005f54] inline-block w-fit mb-3">Venture Leadership & Ideation</span>
                                <p className="text-lg">Co-founded the platform and spearheaded its technical roadmap. Translated complex legal user journeys into an intuitive, production-ready product strategy that won first place out of competitive fields at the <strong>iStartup Launch Sprint</strong>.</p>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[1.4rem] font-bold text-[#005f54] border-b-2 border-[#005f54] inline-block w-fit mb-3">Intelligent Backend Engineering</span>
                                <p className="text-lg">Architected high-performance server-side logic using <strong>Python</strong>, <strong>Flask</strong>, and <strong>FastAPI</strong> to handle concurrent, intensive data requests and manage rapid document processing cycles with low latency.</p>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[1.4rem] font-bold text-[#005f54] border-b-2 border-[#005f54] inline-block w-fit mb-3">AI & RAG Pipeline Integration</span>
                                <p className="text-lg">Engineered specialized <strong>Retrieval-Augmented Generation (RAG)</strong> pipelines to securely ingest massive legal corpuses. Integrated <strong>Large Language Models (LLMs)</strong> to extract contextual intelligence, allowing users to query complicated legal documents and receive highly accurate, source-verified answers instantly.</p>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[1.4rem] font-bold text-[#005f54] border-b-2 border-[#005f54] inline-block w-fit mb-3">Interactive Frontend Architecture</span>
                                <p className="text-lg">Built the web interface using <strong>React</strong>, focusing heavily on secure file uploading mechanisms, transparent processing states, and clean data visualizations to make complex AI-driven analysis easy to understand for legal professionals.</p>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default ClaimRunner;