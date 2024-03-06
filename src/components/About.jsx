import React from 'react'

const About = () => {
  return (
    <div id="About" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'> 
        <div className='max-w-screen-lg px-16 mx-auto flex flex-col justify-center w-full my-auto'>
            {/* <div className='pb-8'> */}
                <p className='text-4xl font-bold inline border-b-4'>About</p>
            {/* </div> */}
            <p className='text-xl mt-5'>
           I am a dynamic and results-driven Software Engineer with diverse experience in both Full Stack development using Java and Spring boot, as well as iOS development with a focus on Swift programming. 
           <h2 className='text-4xl hover:scale-105 duration-200 '>Java developer</h2>
           My professional journey began at Mindtree Ltd in Bangalore, India, where I played a key role as a Software Engineer from June 2021 to April 2023. In my role with Mindtree Ltd, I was an integral part of the core Full Stack team responsible for providing technological solutions to FORBES TOP 100 businesses looking to expand their core competency to new markets globally. My expertise lies in Java, with a strong proficiency in Object-oriented programming. My knowledge extends to various design patterns, reusable Java libraries, and concepts such as MVC, JDBC, and JSP. 
           <h2 className='text-4xl hover:scale-105 duration-200 '>Ios developer</h2>
           As an iOS Developer, I am proficient in Swift programming, data structures, and algorithms. My responsibilities have included gathering requirements, creating UIScreens in Storyboard with Xcode14, and implementing TableView and CollectionView to display data as per project requirements. I have also utilized ARKit for creating and maintaining three Augmented Reality projects. My skill set encompasses working with UIKit and understanding key iOS concepts such as Notifications, Delegation, and Key Value Observation. 
            </p>

            <br/>

        </div>
    </div>
  )
}

export default About