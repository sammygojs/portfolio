import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const About = () => {
  

  const javaExperience = [
    {
      title: "Spearheaded Development",
      description: "Led the development of web app components using Java Spring for backend and React for frontend, facilitating seamless customer interaction with the project."
    },
    {
      title: "Requirement Gathering",
      description: "Conducted comprehensive requirement gathering and skill assessment, ensuring alignment with project objectives and client expectations."
    },
    // Add more experience items as needed
  ];

  const iosExperience = [
    {
      title: "Mobile Application Development",
      description: "Led the development of mobile applications for B2C and B2B clients, utilizing agile methodologies for efficient requirement gathering and implementation."
    },
    {
      title: "Augmented Reality Features",
      description: "Implemented innovative augmented reality features using ARKit, harnessing LIDAR sensor data for business-specific applications."
    },
    // Add more experience items as needed
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  const isSmallScreen = window.innerWidth <= 640; // Set your breakpoint here

  return (
    <div id="About" className='p-10 font-bold z-2 w-full md:h-screen bg-gradient-to-b from-gray-200 to-blue-200 text-black flex items-center justify-center'>
      
      <div className='max-w-screen-lg px-16 mx-auto justify-center'>
      <p className="text-center text-6xl font-bold border-b-4 border-gray-500 mx-auto w-fit">
            About me
          </p>
        {isSmallScreen ? (
          <>
            <div className='py-4'>
              <h2 className='text-center text-4xl'>Java Developer</h2>
              <ul className='shadow-2xl rounded-xl py-4'>
                {javaExperience.map((exp, index) => (
                  <li key={index}>
                    <h3 className='font-bold text-2xl px-8 p-4'>{exp.title}:</h3>
                    <p className='px-8'>{exp.description}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className='text-center text-4xl'>iOS Developer</h2>
              <ul className='shadow-2xl rounded-xl py-4'>
                {iosExperience.map((exp, index) => (
                  <li key={index}>
                    <h3 className='font-bold text-2xl px-8 p-4'>{exp.title}</h3>
                    <p className='px-8'>{exp.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <Slider {...sliderSettings}>
            <div className='py-4'>
              <h2 className='text-center text-4xl'>Java Developer</h2>
              <ul className='rounded-xl py-4'>
                {javaExperience.map((exp, index) => (
                  <li key={index}>
                    <h3 className='font-bold text-2xl px-8 p-4'>{exp.title}:</h3>
                    <p className='px-8'>{exp.description}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className='text-center text-4xl'>iOS Developer</h2>
              <ul className='rounded-xl py-4'>
                {iosExperience.map((exp, index) => (
                  <li key={index}>
                    <h3 className='font-bold text-2xl px-8 p-4'>{exp.title}</h3>
                    <p className='px-8'>{exp.description}</p>
                  </li>
                ))}
              </ul>
              {/* <ul>
                {javaExperience.map((exp, index) => (
                  <li key={index}>
                    <h3 className='font-bold text-2xl px-8 p-4'>{exp.title}</h3>
                    <p className='px-8 py-4'>{exp.description}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className='text-center text-4xl'>iOS Developer</h2>
              <ul>
                {iosExperience.map((exp, index) => (
                  <li key={index}>
                    <h3 className='font-bold p-8 '>{exp.title}</h3>
                    <p className='px-8 py-4'>{exp.description}</p>
                  </li>
                ))}
              </ul> */}
            </div>
          </Slider>
        )}
      </div>
    </div>
  );
}

export default About;
