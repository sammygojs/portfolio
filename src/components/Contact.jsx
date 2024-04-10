import React from "react";

const Contact = () => {
  return (
    <div
      id="Contact"
      name="contact"
      className="w-full bg-gradient-to-b from-white to-blue-200 p-4 text-black px-12 text-center"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 px-12">
          <p className="text-6xl font-bold inline border-b-4 border-black">
            Contact
          </p>
          <p className="py-6 text-black font-semibold ">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            // action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 border-black rounded-md text-black focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 border-black rounded-md text-black focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="5"
              className="p-2 bg-transparent border-2 border-black rounded-md text-black focus:outline-none"
            ></textarea>

            <button className="font-semibold text-black bg-gradient-to-b border-black from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;