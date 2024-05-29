import React from "react";

const Progress = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-8 lg:flex lg:items-center lg:space-x-8 lg:h-screen">
  <div className="w-full lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0">
    <h1 className="text-xl font-bold title mb-4">Front-End</h1>
    <div className="lg:max-w-lg mx-auto" data-aos="flip-up" data-aos-duration="2000">
      {[
        { skill: "HTML", percentage: "95%" },
        { skill: "CSS", percentage: "95%" },
        { skill: "JavaScript", percentage: "90%" },
        { skill: "ECMAScript 6", percentage: "85%" },
        { skill: "React", percentage: "95%" },
        { skill: "Next.js", percentage: "90%" },
        { skill: "Firebase", percentage: "90%" },
        { skill: "Tailwind", percentage: "100%" },
        { skill: "Bootstrap 5", percentage: "100%" },
      ].map(({ skill, percentage }) => (
        <div key={skill} className="mb-4">
          <div className="text-base font-medium dark:text-white">{skill}</div>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div
              className="bg-cyan-400 text-md mt-2 font-medium text-black text-center leading-none rounded-full"
              style={{ width: percentage }}
            >
              {percentage}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  <div className="w-full lg:w-1/2 text-center lg:text-left">
    <h1 className="text-xl font-bold title mb-4 -mt-8 lg:mt-0">Back-End</h1>
    <div className="lg:max-w-lg mx-auto" data-aos="flip-up" data-aos-duration="2000">
      {[
        { skill: "Python", percentage: "95%" },
        { skill: "Django", percentage: "95%" },
        { skill: "DB SQLite3", percentage: "95%" },
        { skill: "MySQL", percentage: "90%" },
        { skill: "Node.js", percentage: "90%" },
        { skill: "MongoDB", percentage: "90%" },
        { skill: "Express.js", percentage: "95%" },
        { skill: "Mongoose", percentage: "90%" },
        { skill: "GitHub", percentage: "90%" },
      ].map(({ skill, percentage }) => (
        <div key={skill} className="mb-4">
          <div className="text-base font-medium dark:text-white">{skill}</div>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div
              className="bg-cyan-400 text-md mt-2 font-medium text-black text-center leading-none rounded-full"
              style={{ width: percentage }}
            >
              {percentage}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

    </div>
  );
};

export default Progress;
