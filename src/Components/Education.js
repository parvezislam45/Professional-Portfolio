import React from "react";

const Education = () => {
  return (
    <div id="education">
      <h1 className="text-xl font-bold text-center title mt-20">
        Qualification
      </h1>
      <h2 className="text-4xl font-bold text-center text-white">
        I Worked for Some Big
        <br /> Companies
      </h2>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-10 lg:py-20">
        <div className="grid gap-6 row-gap-10 lg:grid-cols-2 mx-auto">
          <div className="lg:py-6 lg:pr-16">
            <h1 className="px-4 text-4xl font-bold">Experience</h1>
            <div
              className="flex mt-20"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-20 h-10 rounded-full">
                    <img
                      className="w-20"
                      src="https://ram.digitscpu.com/images/circle-briefcase.5f946ff460248d6fce4b.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-px h-full bg-white" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-xl font-black text-white">
                  Full Stack Web Developer
                </p>
                <p className="mb-2 text-lg font-bold text-white">
                  My Next Flim Ltd.
                </p>
                <p className="text-white font-bold text-md">
                  From 2023 - Present
                </p>
              </div>
            </div>
            <div
              className="flex mt-6"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-20 h-10 rounded-full">
                    <img
                      className="w-20"
                      src="https://ram.digitscpu.com/images/circle-briefcase.5f946ff460248d6fce4b.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-xl font-black text-white">
                  Full Stack Web Developer
                </p>
                <p className="mb-2 text-lg font-bold text-white">
                  Programming Hero
                </p>
                <p className="text-white font-bold text-md">
                  From 2021 - 2022
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="lg:py-6 lg:pr-16">
              <h1 className="px-4 text-4xl font-bold">Education</h1>
              <div
                className="flex mt-20"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-16 h-10 rounded-full">
                      <img
                        className="w-20 bg-sky-300 rounded-full"
                        src="https://thr2019.online/wp-content/uploads/2020/03/Icon_0007_Education.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300" />
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-xl font-black text-white">
                    Bachelor of Science (2015 to 2019)
                  </p>
                  <p className="mb-2 text-lg font-bold text-white">
                    International University of Business Agriculture &
                    Techsnology (IUBAT)
                  </p>
                  <p className="text-white">
                    I Have Complete my Bachelor of Science Degree in
                    International University of Business Agriculture and
                    Technology at Mechanical Engineering.
                  </p>
                </div>
              </div>
              <div className="flex" data-aos="fade-up" data-aos-duration="2000">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-16 h-10 rounded-full">
                      <img
                        className="w-20 bg-sky-300 rounded-full"
                        src="https://thr2019.online/wp-content/uploads/2020/03/Icon_0007_Education.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300" />
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-xl font-black text-white">
                    Diploma-In-Engineering (2010 to 2014)
                  </p>
                  <p className="mb-2 text-lg font-bold text-white">
                    Narsingdi Polytechnic Institute
                  </p>
                  <p className="text-white">
                    I have Completed my Diploma-in-Engineering Degree in
                    Narsingdi Polytechnic Institute at Refrigeration and Air
                    Condition Technology
                  </p>
                </div>
              </div>
              <div className="flex" data-aos="fade-up" data-aos-duration="2000">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-16 h-10 rounded-full">
                      <img
                        className="w-20 bg-sky-300 rounded-full"
                        src="https://thr2019.online/wp-content/uploads/2020/03/Icon_0007_Education.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300" />
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-xl font-black text-white">
                    Secondary School Certificate ( 2005 to 2010 )
                  </p>
                  <p className="mb-2 text-lg font-bold text-white">
                    Kararchar Mvi Toffazol Hossain High School
                  </p>
                  <p className="text-white">
                    I have Complete my secondary School Certificate in Kararchar
                    Mvi Toffazol Hossain High School at Business Study
                    Department
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
