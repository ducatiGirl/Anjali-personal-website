import React from 'react';

const Punyam = () => {
    return (
        /* The outer wrapper handles the pink background and centering */
        <div className="w-full flex justify-center bg-[#fff1e5] min-h-screen">
            
            {/* Expanded max-width from 900px to 1200px for a wider look */}
            <div className="max-w-[1200px] w-full px-8 py-12 font-sans leading-relaxed text-[#333] flex flex-col items-center">
                
                {/* The Project Header - Added mx-auto to ensure it stays centered */}
                <header className="text-center pb-8 border-b-2 border-gray-200 w-full">
                    <h1 className="text-[3.5rem] text-[#222] font-bold mb-2 leading-tight">
                        The Punyam Giving Tree
                    </h1>
                    <p className="text-[1.3rem] text-[#666] italic mb-6">
                        A platform that turns good intentions into a visible, growing force for community.
                    </p>
                    
                    {/* Key Info Box - Added mx-auto to center the box itself */}
                    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl inline-block text-left mt-6 shadow-sm border border-gray-100 mx-auto">
                        <p className="my-1"><strong>Project Type:</strong> Passion Project</p>
                        <p className="my-1"><strong>Role:</strong> Full-Stack Developer & Designer</p>
                        <p className="my-1"><strong>Tech Stack:</strong> React, Node.js, MongoDB, Styled-Components, Firebase, SQL</p>
                    </div>

                    <div className="mt-8">
                        <a href="https://github.com/ducatiGirl/punyam-giving-tree.git" 
                           target="_blank" 
                           rel="noreferrer"
                           className="inline-block px-8 py-3 bg-[#6c757d] hover:bg-[#545b62] text-white no-underline rounded-md transition-colors font-medium">
                            View on GitHub
                        </a>
                    </div>
                </header>

                {/* Main Content Body - Added max-w-4xl and mx-auto to keep text readable and centered */}
                <div className="mt-12 w-full max-w-4xl mx-auto">
                    <section className="py-8 border-b border-gray-200">
                        <h2 className="text-[2.2rem] text-[#444] font-bold mb-10 text-center">
                            The Big Idea: The "What" and the "Why"
                        </h2>
                        
                        <div className="space-y-12 text-left">
                            <div>
                                <h3 className="text-[1.6rem] text-[#333] border-b-2 border-gray-300 inline-block pb-1 mb-4">
                                    The Problem
                                </h3>
                                <p className="text-xl">I've always believed that even the smallest good deeds have a ripple effect. The problem is, in our fast-paced world, those acts often go unnoticed. My mission was to change that. I wanted to build a platform that gives a voice to those moments of kindness and shows their collective power.</p>
                            </div>
                            
                            <div>
                                <h3 className="text-[1.6rem] text-[#333] border-b-2 border-gray-300 inline-block pb-1 mb-4">
                                    The Solution
                                </h3>
                                <p className="text-xl">The Punyam Giving Tree is a web app where users can log their good deeds, and watch as each one adds a new "fruit" to a shared, digital tree. It's a real-time, visual celebration of community spirit, designed to motivate and inspire a culture of giving.</p>
                            </div>
                        </div>
                    </section>

                    <section className="py-12">
                        <h2 className="text-[2.2rem] text-[#444] font-bold mb-10 text-center">
                            My Journey: The "How"
                        </h2>

                        <div className="space-y-12 text-left">
                            <div>
                                <h3 className="text-[1.6rem] text-[#333] border-b-2 border-gray-300 inline-block pb-1 mb-4">
                                    Phase 1: Dreaming and Designing
                                </h3>
                                <p className="text-xl">I started with a blank page, sketching out user flows and wireframes. I knew the user experience had to be seamless and intuitive, so I focused on creating a clear journey for logging deeds and watching the tree grow.</p>
                            </div>
                            
                            <div>
                                <h3 className="text-[1.6rem] text-[#333] border-b-2 border-gray-300 inline-block pb-1 mb-4">
                                    Phase 2: Bringing it to Life
                                </h3>
                                <p className="text-xl">I chose React for the front end because I wanted a dynamic, responsive user interface. On the back end, I paired Node.js with MongoDB for its flexibility, allowing me to easily handle all the data for user profiles and the Punyam log.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Punyam;