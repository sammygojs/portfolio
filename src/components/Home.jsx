// import React from 'react'
// import avatar from '../assets/avatar.png'

// const Home = () => {
//   return (

//     <div id="Home" className='w-full h-screen bg-gradient-to-b from-blue-400 to-white text-gray-500'>
//         <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
//             <div className='flex flex-col justify-center px-20 mt-20'>
//                 <h2 className='text-4xl sm:text-7xl font-bold text-gray-700 pt-5'>I'm a Software Engineer with Expertise in 
//                 <br/>
//                 <h4 className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text w-fit inline'>NodeJs & </h4>
//                 <h4 className='bg-gradient-to-r from-blue-600 via-pink-500 to-indigo-400 text-transparent bg-clip-text w-fit inline'>Java </h4>
//                 <h4 className='bg-gradient-to-r from-blue-600 via-pink-500 to-indigo-400 text-transparent bg-clip-text w-fit '>Laravel </h4>
//                 </h2>
//                 <p className='font-bold'>I have 2 years of professional experience</p>

//                 <div>
//                     <button className='font-bold text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor pointer'>
//                         Portfolio
//                     </button>
//                 </div>
//             </div>

//             <div className='hidden' >
//                 <img src={avatar} alt='my text' className='mx-auto p-4 rounded-3xl'/>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Home

import React from 'react';
import avatar from '../assets/avatar.png';
import { useState, useEffect } from 'react';

const Home = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const skills = ['NodeJs', 'Java', 'Laravel'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill(current => (current + 1) % skills.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="Home" className='w-full h-screen bg-gradient-to-b from-blue-400 to-white text-gray-500'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-8'>
        <div className='flex flex-col items-center justify-center'>
          <div className='flex flex-col justify-center mt-20 text-center'>
            
            <h2 className='text-4xl sm:text-7xl font-bold text-gray-700 pt-5'>
              I'm a Software Development Engineer with Expertise in <br />
              <div id="skills" className="relative inline sm:pr-30 pr-36"> 
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`absolute transition-opacity duration-1000 text-center justify-center ${currentSkill === index ? 'opacity-100' : 'opacity-0'
                        }`}
                      style={{ left: '0', top: '0' }}
                    >
                      <span
                        className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text text-center justify-center"
                        style={{ animationDelay: `${index * 500}ms` }}
                      >
                        {skill}

                      </span>
                    </span>
                  ))}
                </div><br/>
              {/* <span className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text'>NodeJs & </span>
              <span className='bg-gradient-to-r from-blue-600 via-pink-500 to-indigo-400 text-transparent bg-clip-text'>Java </span>
              <span className='bg-gradient-to-r from-blue-600 via-pink-500 to-indigo-400 text-transparent bg-clip-text'>Laravel </span> */}
              <span>
                
              </span>
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
          {/* <div className='mt-10'>
            <img src={avatar} alt='my text' className='mx-auto p-4 rounded-3xl' />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
