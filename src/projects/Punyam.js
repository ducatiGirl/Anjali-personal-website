import React from 'react';

const Punyam = () => {
    return (
        /* Outer wrapper with the updated paper background */
        <div className="w-full flex justify-center bg-[#fff1e5] min-h-screen">
            
            <div className="max-w-[1200px] w-full px-4 md:px-12 py-8 md:py-12 font-sans leading-relaxed text-[#333] flex flex-col items-center">
                
                {/* Header Section */}
                <header className="text-center pb-8 border-b-2 border-gray-200 w-full">
                    <h1 className="text-3xl md:text-[3.5rem] text-[#222] font-bold mb-2 leading-tight uppercase tracking-tight">
                        The Punyam Giving Tree
                    </h1>
                    
                    
                    {/* Your Key Info Box */}
                    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl inline-block text-left mt-6 shadow-sm border border-gray-100 mx-auto">
                        <p className="my-1"><strong>Project Type:</strong> Passion Project</p>
                        <p className="my-1"><strong>Role:</strong> Full-Stack Developer & Designer</p>
                        <p className="my-1"><strong>Tech Stack:</strong> React, Node.js, MongoDB, Styled-Components, Firebase, SQL</p>
                    </div>

                    <div className="mt-8">
                        <a href="https://github.com/ducatiGirl/punyam-giving-tree.git" 
                           target="_blank" 
                           rel="noreferrer"
                           className="inline-block px-8 py-3 bg-[#0f5499] hover:bg-[#0d4680] text-white no-underline rounded-md transition-colors font-medium">
                            View on GitHub
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
                            Punyam is a community driven non profit organization designed to help the underprivileged children in India. I built this digital platform to transform traditional charitable giving into a interactive, visual experience. By digitizing the Giving Tree concept, we fulfill specific wishlists ranging from basic necessities to school supplies—connecting the community directly to the needs of children who might otherwise be overlooked.
                        </p>
                    </section>

                    {/* My Impact Section */}
                    <section className="py-12 border-b border-gray-200">
                        <h2 className="text-[2.2rem] text-[#222] font-bold mb-10 text-center uppercase tracking-wide">
                            My Impact
                        </h2>
                        <div className="space-y-8 text-left">
                            <div className="flex flex-col">
                                <span className="text-[1.4rem] font-bold text-[#005f54] border-b-2 border-[#005f54] inline-block w-fit mb-3">Full-Stack Architecture</span>
                                <p className="text-lg">Designed and implemented a scalable end-to-end system using <strong>React</strong> and <strong>Node.js</strong> to manage dynamic wishlists and real-time donation tracking.</p>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[1.4rem] font-bold text-[#005f54] border-b-2 border-[#005f54] inline-block w-fit mb-3">Visually Appealing Design</span>
                                <p className="text-lg">Engineered a custom Giving Tree visualization by rendering child stories and specific needs as digital fruits on a shared tree, I transformed a static donation pipeline into an emotional, visual connection. This design directly contributed to increased engagement, making the simple act of giving feel like a tangible, growing force for good.</p>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[1.4rem] font-bold text-[#005f54] border-b-2 border-[#005f54] inline-block w-fit mb-3">Dynamic Data</span>
                                <p className="text-lg">Integrated <strong>MongoDB</strong> and <strong>SQL</strong> to maintain a reliable, searchable log of community deeds, ensuring high performance for sorting and distributing gifts to the correct recipients.</p>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[1.4rem] font-bold text-[#005f54] border-b-2 border-[#005f54] inline-block w-fit mb-3">Improvement in Funds + Social Good</span>
                                <p className="text-lg">By migrating from a manual CSV process to a centralized database and real-time UI, I increased total contributions by over 350% (from ~$200 to over $900 in a single event) by streamlining the donor journey and preventing the loss of donor interest due to manual bottlenecks.</p>
                            </div>
                        </div>
                    </section>

                    
                </div>
            </div>
        </div>
    );
};

export default Punyam;