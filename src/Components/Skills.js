import React from "react";

const Skills = () => {
  return (
    <div id="skill">
      <h1 className="text-xl font-bold text-center title">Skills</h1>
      <h2 className="text-4xl font-bold text-center text-white">
        I Work Hard to Improve My Skills
        <br /> Regularly
      </h2>
      <div class="px-2 py-16 mx-auto sm:max-w-md md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-48 lg:py-20">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="card" data-aos="fade-up" data-aos-duration="2000">
            <figure class="px-4 pt-10">
              <div class="circle-wrap">
                <div class="circle">
                  <div class="mask full-5">
                    <div class="fill-5"></div>
                  </div>
                  <div class="mask half">
                    <div class="fill-5"></div>
                  </div>
                  <div class="inside-circle"> 100% </div>
                </div>
              </div>
            </figure>
            <div class="card-body text-center">
              <h2 class="card-title text-white text-sm font-bold">
                Front End Web Development
              </h2>
            </div>
          </div>
          <div class="card" data-aos="fade-up" data-aos-duration="2000">
            <figure class="px-4 pt-10">
              <div class="circle-wrap">
                <div class="circle">
                  <div class="mask full-6">
                    <div class="fill-6"></div>
                  </div>
                  <div class="mask half">
                    <div class="fill-6"></div>
                  </div>
                  <div class="inside-circle">95% </div>
                </div>
              </div>
            </figure>
            <div class="card-body text-center">
              <h2 class="card-title text-white text-sm font-bold">
                Back End Web Development
              </h2>
            </div>
          </div>
          <div class="card" data-aos="fade-up" data-aos-duration="2000">
            <figure class="px-4 pt-10">
              <div class="circle-wrap">
                <div class="circle">
                  <div class="mask full-7">
                    <div class="fill-7"></div>
                  </div>
                  <div class="mask half">
                    <div class="fill-7"></div>
                  </div>
                  <div class="inside-circle"> 100% </div>
                </div>
              </div>
            </figure>
            <div class="card-body text-center">
              <h2 class="card-title text-white text-sm font-bold">
                {" "}
                Web Page Design
              </h2>
            </div>
          </div>
          <div class="card" data-aos="fade-up" data-aos-duration="2000">
            <figure class="px-4 pt-10">
              <div class="circle-wrap">
                <div class="circle">
                  <div class="mask full-8">
                    <div class="fill-8"></div>
                  </div>
                  <div class="mask half">
                    <div class="fill-8"></div>
                  </div>
                  <div class="inside-circle"> 90% </div>
                </div>
              </div>
            </figure>
            <div class="card-body text-center">
              <h2 class="card-title text-white text-sm font-bold">
                E-Comerce Web Development
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
