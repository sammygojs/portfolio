import React from 'react'
// import emoji from '../assets/emoji1.png'
// import avatar from '../assets/avatar.mp4'
import avatar from '../assets/avatar.png'

const Home = () => {
  return (
    <div className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center px-20 mt-20'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Software Engineer in 
                {/* <pre></pre> */}
                <br/>
                <h4 className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text w-fit inline'>Vanilla JS & </h4>
                <h4 className='bg-gradient-to-r from-blue-600 via-pink-500 to-indigo-400 text-transparent bg-clip-text w-fit inline'>Java </h4>
                </h2>
                <p>I have 2 years of professional experience</p>
                
                <div>
                    <button className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor pointer'>
                        Portfolio
                    </button>
                </div>
            </div>
            
            <div >
                <img src={avatar} alt='my text' className='rounded-2xl mx-auto md:w-full p-4 sm:w-full'/>
                {/* <video src={avatar} className='rounded-2xl mx-auto md:w-full p-4 sm:w-full' autoPlay loop muted /> */}
            </div>
        </div>
    </div>
  )
}

export default Home