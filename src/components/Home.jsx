import React from 'react'
import emoji from '../assets/emoji1.png'

const Home = () => {
  return (
    <div className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center px-10'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a developer in Node js and Java</h2>
                <p>I have 2 years of professional experience</p>
                <div>
                    <button className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor pointer'>
                        Portfolio
                    </button>
                </div>
            </div>
            
            <div >
                <img src={emoji} alt='my text' className='rounded-2xl mx-auto w-2/3 md:w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Home