import React, { useState, useEffect } from 'react';

const Home = () => {
  const [currentSpanIndex, setCurrentSpanIndex] = useState(0);

  // Define your list of spans with updated color combinations
  const spans = [
    <span key={0} className='bg-gradient-to-r from-blue-400 via-green-400 to-indigo-400 text-transparent bg-clip-text w-fit inline'>Java</span>,
    <span key={1} className='bg-gradient-to-r from-green-400 via-blue-400 to-pink-400 text-transparent bg-clip-text w-fit inline'>Python</span>,
    <span key={2} className='bg-gradient-to-r from-blue-400 via-pink-400 to-green-400 text-transparent bg-clip-text w-fit inline'>Swift</span>,
    <span key={0} className='bg-gradient-to-r from-blue-400 via-green-400 to-indigo-400 text-transparent bg-clip-text w-fit inline'>JS</span>,
    <span key={1} className='bg-gradient-to-r from-green-400 via-blue-400 to-pink-400 text-transparent bg-clip-text w-fit inline'>NodeJS</span>,
    <span key={2} className='bg-gradient-to-r from-blue-400 via-pink-400 to-green-400 text-transparent bg-clip-text w-fit inline'>Flask</span>
  ];

  useEffect(() => {
    // Update the current span index every 4 seconds
    const interval = setInterval(() => {
      setCurrentSpanIndex(prevIndex => (prevIndex + 1) % spans.length);
    }, 4000); // 4 seconds

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [spans.length]);

  return (
    <div id="Home" className='w-full h-screen bg-gradient-to-b from-blue-400 to-gray-200 text-gray-500'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-8'>
        <div className='flex flex-col items-center justify-center'>
          <div className='flex flex-col justify-center mt-20 text-center'>
            <h2 className='text-4xl sm:text-7xl font-bold text-gray-700 pt-5'>
              I'm a Software Development Engineer with Expertise in <br />
              <div id="skills" className="relative inline sm:pr-30 pr-36 z-0">
                {/* Display the current span with slow animation */}
                {spans.map((span, index) => (
                  <span
                    key={index}
                    className={`absolute transition-opacity duration-2000 text-center justify-center ${
                      currentSpanIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ left: '0', top: '0' }}
                  >
                    {span}
                  </span>
                ))}
              </div>
              <br />
            </h2>
            <p className='font-bold py-6'>I have 2 years of professional experience</p>
            <div>
              <a target='_blank' href="https://drive.google.com/file/d/1hGjSMdHIBbZyy4K4JEVyCDndkx4wUC1d/view?usp=sharing">
                <button className='font-bold text-white px-6 py-3 my-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                  Portfolio
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
