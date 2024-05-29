import React from "react";

const About = () => {
  return (
    <div id="about">
      <h1 className="text-xl font-bold text-center title">About Me</h1>
      <h2 className="text-4xl font-bold text-center text-white">
        A Passionate Developer Who
        <br /> Loves to Code
      </h2>
      <section class="">
        <div class="container px-6 py-10 mx-auto">
          <div class="mt-8 lg:flex lg:items-center mx-10">
            <img
              class="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
              src="https://i.postimg.cc/HsW991T5/david.png"
              alt=""data-aos="fade-right"
              data-aos-duration="2000"
            
            />

            <div
              class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-10 "  alt=""data-aos="fade-left"
              data-aos-duration="2000"
            >
              <h1
                href="#"
                class="block mt-4 text-xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl"
              >
                Hi, I am Parvez Islam
              </h1>
              <div class="flex items-center mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-circle-fill h-3 w-3 text-teal-400"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <circle cx="8" cy="8" r="8" />{" "}
                </svg>
                <span class="mx-3 text-gray-400 font-semibold text-lg">
                  First Name <span className="ml-10">: Parvez</span>
                </span>
              </div>
              <div class="flex items-center mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-circle-fill h-3 w-3 text-teal-400"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <circle cx="8" cy="8" r="8" />{" "}
                </svg>
                <span class="mx-3 text-gray-400 font-semibold text-lg">
                  Last Name <span className="ml-10">: Islam</span>
                </span>
              </div>
              <div class="flex items-center mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-circle-fill h-3 w-3 text-teal-400"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <circle cx="8" cy="8" r="8" />{" "}
                </svg>
                <span class="mx-3 text-gray-400 font-semibold text-lg">
                  Age <span className="ml-24">: 24 Years</span>
                </span>
              </div>
              <div class="flex items-center mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-circle-fill h-3 w-3 text-teal-400"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <circle cx="8" cy="8" r="8" />{" "}
                </svg>
                <span class="mx-3 text-gray-400 font-semibold text-lg">
                  Nationality <span className="ml-10">: Bangladeshi</span>
                </span>
              </div>
              <div class="flex items-center justify-start mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-circle-fill h-3 w-3 text-teal-400"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <circle cx="8" cy="8" r="8" />{" "}
                </svg>
                <span class="mx-3 text-gray-400 font-semibold text-lg">
                  Language{" "}
                  <span className="ml-12">: English,Bangla</span>
                </span>
              </div>
              <div class="flex items-center mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-circle-fill h-3 w-3 text-teal-400"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <circle cx="8" cy="8" r="8" />{" "}
                </svg>
                <span class="mx-3 text-gray-400 font-semibold text-lg">
                  Address{" "}
                  <span className="ml-16">
                    : 152/1,Bilashdi,Narsingdi
                  </span>
                </span>
              </div>
              <div class="flex items-center mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-circle-fill h-3 w-3 text-teal-400"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <circle cx="8" cy="8" r="8" />{" "}
                </svg>
                <span class="mx-3 text-gray-400 font-semibold text-lg">
                  Contract <span className="ml-14">: 01683338523</span>
                </span>
              </div>
              <div class="flex flex-col mt-8 space-y-3 lg:space-y-0 lg:flex-row">
                <button class="w-full px-6 py-4 text-md font-bold tracking-wider text-white transition-colors duration-300 transform bg-sky-400 rounded-full lg:w-auto lg:mx-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  Download Cv
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
