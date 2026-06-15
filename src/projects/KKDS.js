import React from 'react';

const KKDS = () => {
    return (
        /* Outer wrapper with the updated paper background */
        <div className="w-full flex justify-center bg-[#fff1e5] min-h-screen">
            
            <div className="max-w-[1200px] w-full px-4 md:px-12 py-8 md:py-12 font-sans leading-relaxed text-[#333] flex flex-col items-center">
                
                {/* Header Section */}
                <header className="text-center pb-8 border-b-2 border-gray-200 w-full">
                    <h1 className="text-3xl md:text-[3.5rem] text-[#222] font-bold mb-2 leading-tight uppercase tracking-tight">
                        Kalamandapam Kuchipudi Dance School
                    </h1>
                    
                    {/* Your Key Info Box */}
                    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl inline-block text-left mt-6 shadow-sm border border-gray-100 mx-auto">
                        <p className="my-1"><strong>Project Type:</strong>Full-Stack Web Development as a part of Web Impact Club</p>
                        <p className="my-1"><strong>Role:</strong> Lead Web Developer</p>
                        <p className="my-1"><strong>Awards:</strong> Winner for Best Implementation</p>
                        <p className="my-1"><strong>Tech Stack:</strong> React, Tailwind CSS, Sanity CMS, Figma, Git & Version Control, Vercel</p>
                    </div>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a href="https://kkds-blond.vercel.app/" 
                           target="_blank" 
                           rel="noreferrer"
                           className="inline-block px-8 py-3 bg-[#0f5499] hover:bg-[#0d4680] text-white no-underline rounded-md transition-colors font-medium">
                            View Live Site
                        </a>
                        <a href="https://www.instagram.com/kkdseattle/" 
                           target="_blank" 
                           rel="noreferrer"
                           className="inline-block px-8 py-3 bg-white text-[#333] border border-gray-300 hover:bg-gray-50 no-underline rounded-md transition-colors font-medium shadow-sm">
                            View Client Instagram
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
                            Driven by a desire to channel my classroom engineering skills into tangible local good, I joined the Web Impact cohort to build for our community. Our challenge was to completely scrap Kalamandapam Kuchipudi Dance School's outdated web presence and engineer a stunning, modern identity from the ground up. By collaborating directly with a student design team and the client, we translated classical artistic tradition into a high-performance web experience.
                        </p>
                    </section>

                    {/* My Impact Section */}
                    <section className="py-12 border-b border-gray-200">
                        <h2 className="text-[2.2rem] text-[#222] font-bold mb-10 text-center uppercase tracking-wide">
                            My Impact
                        </h2>
                        <div className="space-y-8 text-left">
                            <div className="flex flex-col">
                                <span className="text-[1.4rem] font-bold text-[#005f54] border-b-2 border-[#005f54] inline-block w-fit mb-3">Figma-to-Code Engineering</span>
                                <p className="text-lg">Partnered closely with product designers to inspect high-fidelity <strong>Figma</strong> mockups and systematically translate responsive components, intricate layouts, and design choices into robust, pixel-perfect frontend code.</p>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[1.4rem] font-bold text-[#005f54] border-b-2 border-[#005f54] inline-block w-fit mb-3">Dynamic Content Management</span>
                                <p className="text-lg">Attended intensive developer workshops to master and integrate <strong>Sanity CMS</strong>. This architecture gives the KKDS team full control over updating upcoming class schedules, classical performance details, and announcements without requiring direct codebase changes.</p>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[1.4rem] font-bold text-[#005f54] border-b-2 border-[#005f54] inline-block w-fit mb-3">Production & Version Control Workflow</span>
                                <p className="text-lg">Maintained clean development pipelines by adhering to strict industry-standard <strong>Git version control</strong> protocols. Managed component features through granular feature branching, peer reviews, and automated continuous deployment workflows via <strong>Vercel</strong>.</p>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[1.4rem] font-bold text-[#005f54] border-b-2 border-[#005f54] inline-block w-fit mb-3">Award-Winning Implementation</span>
                                <p className="text-lg">By executing optimized layouts using utility-first <strong>Tailwind CSS</strong>, our team minimized rendering bottlenecks and vastly improved page speeds relative to their former platform. The engineering execution and architectural structure earned our project the official Web Impact award for <strong>Best Implementation</strong>.</p>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default KKDS;