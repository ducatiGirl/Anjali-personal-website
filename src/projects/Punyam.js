import React from 'react';
import './Punyam.css';

const Punyam = () => {
    return (
        <div className="punyam-container">
            {/* The Project Header */}
            <header className="project-header">
                <h1>The Punyam Giving Tree</h1>
                <p className="tagline">A digital platform I built to turn good intentions into a visible, growing force for community.</p>
                
                <div className="key-info-box">
                    <p><strong>Role:</strong> Full-Stack Developer & Designer</p>
                    <p><strong>Type:</strong> Passion Project</p>
                    <p><strong>Tech Stack:</strong> React, Node.js, MongoDB, Styled-Components, Firebase, SQL</p>
                </div>
            </header>

            {/* The Big Idea: The "What" and the "Why" */}
            <section className="project-section">
                <h2>The Big Idea: The "What" and the "Why"</h2>
                <div className="content-block">
                    <h3>The Problem</h3>
                    <p>I’ve always believed that even the smallest good deeds have a ripple effect. The problem is, in our fast-paced world, those acts often go unnoticed. My mission was to change that. I wanted to build a platform that gives a voice to those moments of kindness and shows their collective power.</p>
                </div>
                <div className="content-block">
                    <h3>The Solution</h3>
                    <p>The Punyam Giving Tree is a web app where users can claim a child's wish, and watch as a green mango on our digital tree transforms into a ripe, yellow one. It's a real-time, visual celebration of community spirit, designed to motivate and inspire a culture of giving.</p>
                </div>
                <div className="content-block">
                    <h3>The Goal</h3>
                    <p>My primary goal was to build a secure, intuitive, and visually engaging tool that transforms the abstract concept of "good deeds" into a concrete, motivating experience. This would improve productivity within the organization (people do not have to set up this tree manually anymore) while also increasing the number of children who recieved gifts.</p>
                </div>
            </section>

            {/* My Journey: The "How" */}
            <section className="project-section">
                <h2>My Journey: The "How"</h2>
                <div className="process-phase">
                    <h3>Phase 1: Dreaming and Designing</h3>
                    <p>I started with a goal: How would digitizing the giving tree incentivize people to pay. I knew the user experience had to be seamless and intuitive, so I focused on creating a clear journey for claiming wishes and watching the tree ripen.</p>
                </div>
                <div className="process-phase">
                    <h3>Phase 2: Bringing it to Life</h3>
                    <p>I chose React for the front end because I wanted a dynamic, responsive user interface. On the back end, I used both Node.js and MongoDB.The real-time "giving tree" visualization was the heart of the project, and I loved learning to use CSS to give the website that organic, living feel.</p>
                </div>
                <div className="process-phase">
                    <h3>Phase 3: My Biggest "Aha!" Moment</h3>
                    <p>The toughest part was making the real-time updates for the tree feel smooth and effortless. At first, every new entry caused a lag, which was completely against the "seamless" experience I was going for. I dove deep into the back end, optimizing the data-fetching logic and refactoring the code. It was a challenging process, but it taught me a crucial lesson about the importance of back-end performance optimization and how every small change can make a huge difference in the user experience.</p>
                </div>
            </section>

            {/* The Impact: A Glimpse into the Future */}
            <section className="project-section">
                <h2>The Impact: A Glimpse into the Future</h2>
                <p>I am incredibly proud to say that the Punyam Giving Tree is now live. It's more than just a piece of software; it's a living testament to the power of shared good deeds. This project not only strengthened my full-stack skills but also gave me a deeper appreciation for how technology can be used to build community and inspire positive change.</p>
            </section>
        </div>
    );
};

export default Punyam;
