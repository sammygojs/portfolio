import React from "react";
import java from '../assets/java.png'
import js from '../assets/js.png'
import nextjs from '../assets/nextjs.png'

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      name: "Todo App",
      src: nextjs,
      href: "https://github.com/sammygojs/NextJS_todoApp"
    },
    {
      id: 2,
      name: "Grade Submission API",
      src: java,
      href: "https://github.com/sammygojs/springBoot_GradeSubmission"
    },
    {
      id: 3,
      name: "Contacts manager API",
      src: js,
      href: "https://github.com/sammygojs/API_ContactsMngr"
    },
    {
      id: 1,
      name: "Todo App",
      src: nextjs,
      href: "https://github.com/sammygojs/NextJS_todoApp"
    },
    {
      id: 2,
      name: "Grade Submission API",
      src: java,
      href: "https://github.com/sammygojs/springBoot_GradeSubmission"
    },
    {
      id: 3,
      name: "Contacts manager API",
      src: js,
      href: "https://github.com/sammygojs/API_ContactsMngr"
    },
    // {
    //   id: 4,
    //   src: reactSmooth,
    // },
    // {
    //   id: 5,
    //   src: installNode,
    // },
    // {
    //   id: 6,
    //   src: reactWeather,
    // },
  ];

  return (
    <div
      id="Portfolio"
      name="portfolio"
      className="bg-gradient-to-b from-blue-200 to-white w-full text-black "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full md:h-screen text-center">
        <div className="pb-8 px-12">
          <p className=" text-6xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 font-semibold">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12">
          {portfolios.map(({ id, name, src, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg p-2">
              <div>
                <p className=" hover:text-sky-400 font-bold text-center text-white p-4 bg-black rounded-xl ">{name}</p>
                {/* <p href={href} className=" hover:text-sky-400 font-bold text-center p-4">Github repo</p> */}
                <a href={href}><p href={href} className=" hover:text-sky-400 font-bold text-center text-white p-4 rounded-xl my-2 bg-black">Github repo</p></a>
                <img
                  width={470}
                  src={src}
                  alt=""
                  className="rounded-md h-full duration-200 hover:scale-105 " />
              </div>
              <div>
                {/* <h3 className="hover:text-sky-400 text-center p-4">
{name}
</h3> */}
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
Name
</button> */}
              </div>
              <div className="flex items-center justify-center">
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
Demo
</button> */}
                {/* <button className="hover:border-gray-500 w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"> */}
                {/* {href} */}
                {/* <a href={href}>Code</a> */}
                {/* </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;