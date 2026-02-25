import React from 'react';
import img from '../Anjali.jpg';

function Home() {
  return (
    /* md:min-h-[calc(100vh-64px)]: Only forces centering on desktop. 
       On mobile, we allow it to scroll naturally if the content is long. */
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center p-6 md:p-8">
      
      {/* grid-cols-1: Stack vertically on mobile.
          md:grid-cols-[1fr_2fr]: Two columns on desktop.
          text-center: Center text on mobile for better balance.
          md:text-left: Left-align text on desktop.
      */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] items-center gap-8 md:gap-12 max-w-6xl w-full text-center md:text-left">
        
        {/* Image Section */}
        <div className="flex justify-center">
          <img 
            src={img} 
            alt="Me" 
            /* w-48 h-48: Smaller, equal dimensions for a perfect circle on mobile.
               md:w-full md:max-w-[300px] md:h-[400px]: Larger, oval-ish look on desktop.
            */
            className="w-48 h-48 md:w-full md:max-w-[300px] md:h-[400px] rounded-full md:rounded-[50%] object-cover shadow-md" 
          />
        </div> 

        {/* Text Section */}
        <div className="text-[1.1rem] md:text-[1.2rem] leading-[1.6]">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Hello!</h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            I'm<span className="text-[#005f54]"> Anjali</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#990f3d]">a Full-stack developer</h2>
          
          <div className="space-y-4 text-gray-800">
            <p>I am currently studying Computer Science at the University of Washington.</p>
            <p>I thrive at the intersection of complex problem solving and real-world impact. Whether I’m developing full-stack applications or researching the future of healthcare technology, I’m driven by the goal of building tools that matter.</p>
            <p>When I’m not coding, you’ll find me on the badminton court (ranked 68th nationally), experimenting with new recipes, or exploring the Seattle food scene.</p>
            <p className="pt-2 text-[1rem] md:text-[1.1rem]">
              <strong>Fun Fact:</strong> I learned how to drive a motorcycle at 16 before I could even drive a car.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;