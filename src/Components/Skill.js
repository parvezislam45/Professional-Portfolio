import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ChangingProgressProvider from "../Animation/ChangingProgressProvider";
const Skill = () => {
  return (
    <div id="skill">
      <h1 className="text-xl font-bold text-center title">Skills</h1>
      <h2 className="text-4xl font-bold text-center text-white">
        I Work Hard to Improve My Skills
        <br /> Regularly
      </h2>
      <div class="container mx-auto px-2 m">
        <div class="relative flex flex-col break-words w-full mb-6 rounded-lg ">
          <div class="px-6">
            <div class="flex flex-wrap justify-center">
              <div class="w-full">
                <div class="flex mt-10 items-center justify-center">
                  <div className="grid grid-cols-1 mx-auto  gap-5 px-20 md:grid-cols-2 lg:grid-cols-3">
                  <div
                      class="container bg-black"
                      data-aos="flip-up"
                      data-aos-duration="2000"
                      
                    >
                      <ChangingProgressProvider 
                        values={[ 95]}
                      >
                        {(percentage) => (
                          <CircularProgressbar className="bg-red-600 h-20 w-20"
                            value={percentage}
                            text={`${percentage}%`}
                          />
                        )}
                      </ChangingProgressProvider>
                      <h1 className="text-xl text-center font-bold mt-5 text-teal-400">
                        85%
                      </h1>
                      <h1 className="text-xl text-center font-bold mt-1 text-teal-400">
                        Web Application Hacking
                      </h1>
                    </div>
                    
                    <div
                      class="container"
                      data-aos="flip-up"
                      data-aos-duration="2000"
                    >
                      <ChangingProgressProvider
                        values={[0, 20, 40, 60, 80, 90]}
                      >
                        {(percentage) => (
                          <CircularProgressbar className="w-20 h-40"
                            value={percentage}
                            text={`${percentage}%`}
                          />
                        )}
                      </ChangingProgressProvider>
                      <h1 className="text-xl text-center font-bold mt-1 text-teal-400">
                        90%
                      </h1>
                      <h1 className="text-xl text-center font-bold mt-1 text-teal-400">
                      System Hacking
                      </h1>
                    </div>
                    <div
                      class="container"
                      data-aos="flip-up"
                      data-aos-duration="2000"
                    >
                      <ChangingProgressProvider
                        values={[0, 20, 40, 60, 70]}
                      >
                        {(percentage) => (
                          <CircularProgressbar className="w-20 h-40"
                            value={percentage}
                            text={`${percentage}%`}
                          />
                        )}
                      </ChangingProgressProvider>
                      <h1 className="text-xl text-center font-bold mt-1 text-teal-400">
                        70%
                      </h1>
                      <h1 className="text-xl text-center font-bold mt-1 text-teal-400">
                       Hacking Wireless Network
                      </h1>
                    </div>
                    <div
                      class="container"
                      data-aos="flip-up"
                      data-aos-duration="2000"
                    >
                      <ChangingProgressProvider
                        values={[0, 20, 40, 60, 70]}
                      >
                        {(percentage) => (
                          <CircularProgressbar className="w-20 h-40"
                            value={percentage}
                            text={`${percentage}%`}
                          />
                        )}
                      </ChangingProgressProvider>
                      <h1 className="text-xl text-center font-bold mt-1 text-teal-400">
                        70%
                      </h1>
                      <h1 className="text-xl text-center font-bold mt-1 text-teal-400">
                        Web Server Hacking
                      </h1>
                    </div>
                    
                    
                    <div
                      class="container"
                      data-aos="flip-up"
                      data-aos-duration="2000"
                    >
                      <ChangingProgressProvider
                        values={[0, 20, 40, 60, 80, 95]}
                      >
                        {(percentage) => (
                          <CircularProgressbar className="w-20 h-40"
                            value={percentage}
                            text={`${percentage}%`}
                          />
                        )}
                      </ChangingProgressProvider>
                      <h1 className="text-xl text-center font-bold mt-1 text-teal-400">
                        95%
                      </h1>
                      <h1 className="text-xl text-center font-bold mt-1 text-teal-400">
                        Front End Web Development
                      </h1>
                    </div>
                    <div
                      class="container"
                      data-aos="flip-up"
                      data-aos-duration="2000"
                    >
                      <ChangingProgressProvider
                        values={[0, 20, 40, 60, 80, 90]}
                      >
                        {(percentage) => (
                          <CircularProgressbar className="w-20 h-40"
                            value={percentage}
                            text={`${percentage}%`}
                          />
                        )}
                      </ChangingProgressProvider>
                      <h1 className="text-xl text-center font-bold mt-1 text-teal-400">
                        90%
                      </h1>
                      <h1 className="text-xl text-center font-bold mt-1 text-teal-400">
                        Back End Web Development
                      </h1>
                    </div>
                    <div
                      class="container"
                      data-aos="flip-up"
                      data-aos-duration="2000"
                    >
                      <ChangingProgressProvider
                        values={[0, 20, 40, 60, 80, 90]}
                      >
                        {(percentage) => (
                          <CircularProgressbar className="w-20 h-40"
                            value={percentage}
                            text={`${percentage}%`}
                          />
                        )}
                      </ChangingProgressProvider>
                      <h1 className="text-xl text-center font-bold mt-1 text-teal-400">
                        90%
                      </h1>
                      <h1 className="text-xl text-center font-bold mt-1 text-teal-400">
                        Web Page Design
                      </h1>
                    </div>
                    <div
                      class="container"
                      data-aos="flip-up"
                      data-aos-duration="2000"
                    >
                      <ChangingProgressProvider
                        values={[0, 20, 40, 60, 80, 85]}
                      >
                        {(percentage) => (
                          <CircularProgressbar className="w-20 h-40"
                            value={percentage}
                            text={`${percentage}%`}
                          />
                        )}
                      </ChangingProgressProvider>
                      <h1 className="text-xl text-center font-bold mt-1 text-teal-400">
                        85%
                      </h1>
                      <h1 className="text-xl text-center font-bold mt-1 text-teal-400">
                        E-Comerce Web Development
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 mx-auto px-40">
        <div
          class="rounded-lg dark:border-gray-700"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div
            class="flex justify-between mt-4"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <span class="text-base font-medium text-teal-400 dark:text-white">
              Html
            </span>
            <span class="text-sm font-medium text-teal-400 dark:text-white mt-2">
              95%
            </span>
          </div>
          <div
            class="w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700 mt-2"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div
              class="bg-teal-400 h-3.5 rounded-full"
              style={{ width: "95%" }}
            ></div>
          </div>
          <div
            class="flex justify-between mt-4"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <span class="text-base font-medium text-teal-400 dark:text-white">
              Css
            </span>
            <span class="text-sm font-medium text-teal-400 dark:text-white">
              100%
            </span>
          </div>
          <div
            class="w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700 mt-4"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div
              class="bg-teal-400 h-3.5 rounded-full"
              style={{ width: "100%" }}
            ></div>
          </div>
          <div
            class="flex justify-between mt-4"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <span class="text-base font-medium text-teal-400 dark:text-white">
              Java Script
            </span>
            <span class="text-sm font-medium text-teal-400 dark:text-white mt-2">
              90%
            </span>
          </div>
          <div
            class="w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700 mt-2"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div
              class="bg-teal-400 h-3.5 rounded-full"
              style={{ width: "90%" }}
            ></div>
          </div>
          <div
            class="flex justify-between mt-4"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <span class="text-base font-medium text-teal-400 dark:text-white">
              Ecma Script (ES-6)
            </span>
            <span class="text-sm font-medium text-teal-400 dark:text-white mt-2">
              90%
            </span>
          </div>
          <div
            class="w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700 mt-2"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div
              class="bg-teal-400 h-3.5 rounded-full"
              style={{ width: "90%" }}
            ></div>
          </div>
          <div
            class="flex justify-between mt-4"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <span class="text-base font-medium text-teal-400 dark:text-white">
            Acunetix
            </span>
            <span class="text-sm font-medium text-teal-400 dark:text-white mt-2">
              85%
            </span>
          </div>
          <div
            class="w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700 mt-2"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div
              class="bg-teal-400 h-3.5 rounded-full"
              style={{ width: "85%" }}
            ></div>
          </div>
          <div
            class="flex justify-between mt-4"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <span class="text-base font-medium text-teal-400 dark:text-white">
            Nmap
            </span>
            <span class="text-sm font-medium text-teal-400 dark:text-white mt-2">
              80%
            </span>
          </div>
          <div
            class="w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700 mt-2"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div
              class="bg-teal-400 h-3.5 rounded-full"
              style={{ width: "80%" }}
            ></div>
          </div>
        </div>

        <div
          class="rounded-lg dark:border-gray-700"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div
            class="flex justify-between mt-4"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <span class="text-base font-medium text-teal-400 dark:text-white">
              React
            </span>
            <span class="text-sm font-medium text-teal-400 dark:text-white mt-2">
              100%
            </span>
          </div>
          <div
            class="w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700 mt-2"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div
              class="bg-teal-400 h-3.5 rounded-full"
              style={{ width: "100%" }}
            ></div>
          </div>
          <div
            class="flex justify-between mt-4"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <span class="text-base font-medium text-teal-400 dark:text-white">
              Node Js
            </span>
            <span class="text-sm font-medium text-teal-400 dark:text-white">
              100%
            </span>
          </div>
          <div
            class="w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700 mt-4"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div
              class="bg-teal-400 h-3.5 rounded-full"
              style={{ width: "100%" }}
            ></div>
          </div>
          <div
            class="flex justify-between mt-4"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <span class="text-base font-medium text-teal-400 dark:text-white">
              MongoDb
            </span>
            <span class="text-sm font-medium text-teal-400 dark:text-white mt-2">
              90%
            </span>
          </div>
          <div
            class="w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700 mt-2"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div
              class="bg-teal-400 h-3.5 rounded-full"
              style={{ width: "90%" }}
            ></div>
          </div>
          <div
            class="flex justify-between mt-4"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <span class="text-base font-medium text-teal-400 dark:text-white">
              Express Js
            </span>
            <span class="text-sm font-medium text-teal-400 dark:text-white mt-2">
              90%
            </span>
          </div>
          <div
            class="w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700 mt-2"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div
              class="bg-teal-400 h-3.5 rounded-full"
              style={{ width: "90%" }}
            ></div>
          </div>
          <div
            class="flex justify-between mt-4"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <span class="text-base font-medium text-teal-400 dark:text-white">
            SQLninja
            </span>
            <span class="text-sm font-medium text-teal-400 dark:text-white mt-2">
              80%
            </span>
          </div>
          <div
            class="w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700 mt-2"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div
              class="bg-teal-400 h-3.5 rounded-full"
              style={{ width: "80%" }}
            ></div>
          </div>
          <div
            class="flex justify-between mt-4"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <span class="text-base font-medium text-teal-400 dark:text-white">
            Wireshark
            </span>
            <span class="text-sm font-medium text-teal-400 dark:text-white mt-2">
              85%
            </span>
          </div>
          <div
            class="w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700 mt-2"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div
              class="bg-teal-400 h-3.5 rounded-full"
              style={{ width: "85%" }}
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;
