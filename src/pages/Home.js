import React from 'react';
import img from '../Anjali.jpg';

function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      {/* Hello Header */}
      <div style={{ textAlign: 'center', fontSize: '100px', color: 'blue', marginBottom: '3rem' }}>
        Hello!
      </div>

      {/* Grid Layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr', // 1/3 and 2/3 split
        alignItems: 'center',
        gap: '2rem'
      }}>
        {/* Image Section */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={img} alt="Me" style={{ width: '100%', maxWidth: '300px', height: '400px', borderRadius: '50%' }} />
        </div>

        {/* Text Section */}
        <div style={{ textAlign: 'left', fontSize: '1.2rem', lineHeight: '1.6' }}>
          <h2>About Me</h2>
          <p>My name is Anjali Abhilash and I am an incoming freshman at University of Washington in Seattle planning to study Computer Science.</p>
          <p>I had graduated from Evergreen Valley High School. During my time in high school, I joined a wide variety of clubs and classes such as AP Chemistry and the multi-cultural culinary arts club. I spent majority of my time playing badminton at a national level (68th in the nation)! I also consecutively made it to the state level in my high school team all four years. Additionally, I spent some time as a researcher delving into the intersection between healthcare and computer science.</p>
          <p>At my core, I am a person who enjoys learning and solving problems but I find that I am most passionate when I am applying my skills in computer science to make real-world impact! I am optimistic about computer science's transformative potential to drive innovation and improvement across any field.</p>
          <p>Outside of school, some of my interests include working out, baking, reading, and trying new foods.</p>
          <p><strong>Fun Fact:</strong> I can drive a motorcycle.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
