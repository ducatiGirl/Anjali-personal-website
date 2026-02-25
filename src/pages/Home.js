import React from 'react';
import img from '../Anjali.jpg';

function Home() {
  return (
    /* min-h-[calc(100vh-64px)]: Subtracts navbar height (approx 64px) to center perfectly in remaining space.
       flex items-center justify-center: Centers the child div vertically and horizontally.
    */
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center p-8">
      
      {/* Container with a max-width to keep the 1fr 2fr split looking clean */}
      <div className="grid grid-cols-[1fr_2fr] items-center gap-12 max-w-6xl w-full">
        
        {/* Image Section */}
        <div className="flex justify-center">
          <img 
            src={img} 
            alt="Me" 
            className="w-full max-w-[300px] h-[400px] rounded-[50%] object-cover shadow-md" 
          />
        </div> 

        {/* Text Section */}
        <div className="text-left text-[1.2rem] leading-[1.6]">
          <h2 className="text-3xl font-bold mb-2 ">Hello!</h2>
          <h1 className="text-5xl font-bold mb-4">
            I'm<span className="text-[#c00]"> Anjali</span>
          </h1>
          <h2 className="text-2xl font-semibold mb-6 text-[#990f3d]">a Full-stack developer</h2>
          
          <div className="space-y-4">
            <p>I am currently studying Computer Science at University of Washington in Seattle.</p>
            <p>I graduated from Evergreen Valley High School. During my time in high school, I joined a wide variety of clubs and classes such as AP Chemistry and the multi-cultural culinary arts club. I spent majority of my time playing badminton at a national level (68th in the nation)! I also consecutively made it to the state level in my high school team all four years. Additionally, I spent some time as a researcher delving into the intersection between healthcare and computer science.</p>
            <p>At my core, I am a person who enjoys learning and solving problems but I find that I am most passionate when I am applying my skills in computer science to make real-world impact!</p>
            <p>Outside of school, some of my interests include working out, baking, reading, and trying new foods.</p>
            <p className="pt-2"><strong>Fun Fact:</strong> I learned how to drive a motorcycle at the age of 16 before I could even drive a car.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;