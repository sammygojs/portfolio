import React, { useState } from 'react'
import { FaBars, FaTimes} from "react-icons/fa";
import ScrollIntoView from 'react-scroll-into-view'

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'Home'
    },
    {
      id: 2,
      link: 'About'
    },
    {
      id: 3,
      link: 'Portfolio'
    },
    {
      id: 5,
      link: 'Contact'
    },
  ]


  return (
    <>
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
      <div>
      <h1 className='text-5xl ml-2 font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 text-transparent bg-clip-text'>Sammy</h1>

      </div>

      <ul className='hidden md:flex'>
        {links.map(({id, link}) => (
            <li 
            key={id} 
            className='px-4 cursor-pointer capitalize font-bold text-white hover:text-white hover:scale-105 duration-200'
            >
                <ScrollIntoView selector={'#'+link}>
  <button className="mdl-button mdl-js-button mdl-button--raised font-bold">
  {link}
  </button>
</ScrollIntoView>
            </li> 
        ))

        }
      </ul>

      <div onClick={()=> setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
        {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
      </div>

        {nav && (
          <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 '>
          {links.map(({id, link}) => (
              <li 
              onClick={()=> setNav(!nav)}
              key={id} 
              className='px-4 cursor-pointer capitalize py-6 text-4xl'
              >
                <ScrollIntoView selector={'#'+link}>
  <button className="mdl-button mdl-js-button mdl-button--raised">
  {link}
  </button>
</ScrollIntoView>
              </li> 
          ))
  
          }
          </ul>
        )} 

        
    </div>
    
    </>
    
  )
}

export default NavBar