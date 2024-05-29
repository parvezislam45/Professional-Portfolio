import React from "react";
import CountUp from "react-countup";
const Count = () => {
  return (
    <div>
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="grid grid-cols-3 row-gap-8 md:grid-cols-3">
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl"><CountUp end={10}duration={5}/>+</h6>
          <p class="text-sm font-extrabold tracking-widest white uppercase lg:text-base">
            Direct Client
          </p>
        </div>
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl"><CountUp end={30}duration={5}/>+</h6>
          <p class="text-sm font-extrabold tracking-widest uppercase lg:text-base">
            Projects
          </p>
        </div>
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl"><CountUp end={3}duration={5}/>+</h6>
          <p class="text-sm font-extrabold tracking-widest uppercase lg:text-base">
            Certificate
          </p>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default Count;
