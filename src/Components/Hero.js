import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 60,
      width: 60,
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      backgroundColor: "black",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  return (
    <div id="home">
      <div class="container flex flex-col items-center justify-center gap-10 mx-auto px-6 py-16 md:flex-row md:items-center">
        <div class="items-center lg:flex">
          <div
            class="w-full lg:w-1/2"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <div class="lg:max-w-lg">
              <h1 class=" head text-6xl font-bold text-white">
                Parvez <span class="text-blue-500">Islam</span>
              </h1>
              <h4 class="mt-4 text-2xl font-bold text-gray-600 dark:text-gray-400">
                Full Stack Web Developer{" "}
              </h4>
              <h4 class="mt-0 text-xl font-bold text-gray-600 dark:text-gray-400">
                Email :
                <span class="font-medium text-blue-500 mail">
                  {" "}
                  parvezislam45@gmail.com
                </span>
              </h4>
              <h4 class="mt-0 text-xl font-bold text-gray-600 dark:text-gray-400">
                Contract :
                <span class="font-medium text-blue-500 mail">+8801683338523</span>
              </h4>
              <div
                class="flex justify-start mt-5 gap-1 mx-auto"
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                <a
                  href="https://www.facebook.com/profile.php?id=100091109177823"
                  target="_blank"
                  rel="noopener noreferrer"
                  type="button"
                  class="rounded-full border-2 border-white text-white leading-normal uppercase bg-sky-500 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-14 h-14 m-1"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="facebook-f"
                    class="w-4 h-full mx-auto"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    ></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/noor-hossain-parvez/"
                  target="_blank"
                  rel="noopener noreferrer"
                  type="button"
                  class="rounded-full border-2 border-white text-white leading-normal uppercase bg-sky-500 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-14 h-14 m-1"
                >
                  <svg
                    style={{ color: "white" }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    class="w-5 h-full mx-auto"
                  >
                    <path
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                      fill="white"
                    ></path>
                  </svg>
                </a>
                <a
                  href="https://github.com/parvezislam45"
                  target="_blank"
                  rel="noopener noreferrer"
                  type="button"
                  class="rounded-full border-2 border-white text-white leading-normal uppercase bg-sky-500 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-14 h-14 m-1"
                >
                  <svg
                    style={{ color: "white" }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    class="w-6 h-full mx-auto"
                  >
                    {" "}
                    <path
                      d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"
                      fill="white"
                    ></path>{" "}
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/aurthohinparvez/"
                  target="_blank"
                  rel="noopener noreferrer"
                  type="button"
                  class="rounded-full border-2 border-white text-white leading-normal uppercase bg-sky-500 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-14 h-14 m-1"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="instagram"
                    class="w-4 h-full mx-auto"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    ></path>
                  </svg>
                </a>
              </div>
              <div
                className="text-start mt-8"
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                <button class="mail btn-4 px-9 py-5 text-md font-bold tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-full lg:w-auto lg:mx-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  Get Connected
                </button>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-2/4">
            <img
              class="w-full h-full lg:max-w-3xl"
              src="https://i.postimg.cc/X7jsvyby/Untitl.png"
              alt="Catalogue-pana.svg"
              data-aos="fade-left"
              data-aos-duration="2000"
            />
          </div>
        </div>
      </div>

      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
    </div>
  );
};

export default Hero;
