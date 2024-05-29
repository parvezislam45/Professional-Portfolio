import React from "react";

const Blog = () => {
  return (
    <div id="blog">
      <h1 className="text-xl font-bold text-center text-teal-400 mt-20">
        Blog
      </h1>
      <h2 className="text-4xl font-bold text-center text-white">
        Latest Blog Post
      </h2>
      <section className="">
        <div
          className="container flex flex-col items-center justify-center px-5 p-4 mx-auto sm:p-10"
          bis_skin_checked="1"
        >
          <div
            className="flex flex-row flex-wrap-reverse justify-center mx-auto gap-10"
            bis_skin_checked="1"
          >
             <div
              className="max-w-xs rounded-lg"
              bis_skin_checked="1"
            >
              <img
                src="https://www.growth-rocket.com/wp-content/uploads/2019/10/10-Crucial-Branding-Mistakes-to-Avoid.jpg"
                alt=""
                className="object-cover object-center w-full rounded-t-lg h-60 dark:bg-gray-500"
              />
              <div
                className="flex flex-col justify-between p-6 space-y-8"
                bis_skin_checked="1"
              >
                <div className="space-y-2" bis_skin_checked="1">
                <p className="">
                    <span className="text-lg font-bold mt-16 text-sky-400">
                    Branding
                    </span>
                    <span className="mx-3">August 27, 2022</span>
                  </p>
                  <h2 className="text-xl font-bold tracking-wide">
                  When the musics over turn off the light now
                  </h2>
                </div>
              </div>
            </div>
            <div
              className="max-w-xs rounded-lg"
              bis_skin_checked="1"
            >
              <img
                src="https://miro.medium.com/max/1400/1*5IYtIe5OwxeoYXi226J-Uw.jpeg"
                alt=""
                className="object-cover object-center w-full rounded-t-lg h-60 dark:bg-gray-500"
              />
              <div
                className="flex flex-col justify-between p-6 space-y-8"
                bis_skin_checked="1"
              >
                <div className="space-y-2" bis_skin_checked="1">
                <p className="">
                    <span className="text-lg font-bold mt-16 text-sky-400">
                      Design
                    </span>
                    <span className="mx-3">August 20, 2022</span>
                  </p>
                  <h2 className="text-xl font-bold tracking-wide">
                  How good designers can collaborate better
                  </h2>
                </div>
              </div>
            </div>
            <div
              className="max-w-xs rounded-lg"
              bis_skin_checked="1"
            >
              <img
                src="https://images.ctfassets.net/yewqr8zk7e5s/migrated-5485/24d51134cdf1ab56c0a08ee4b5f01a86/dynamic-web-pages.jpg?w=1000&h=667&fl=progressive&q=50&fm=jpg"
                alt=""
                className="object-cover object-center w-full rounded-t-lg h-60 dark:bg-gray-500"
              />
              <div
                className="flex flex-col justify-between p-6 space-y-8"
                bis_skin_checked="1"
              >
                <div className="space-y-2" bis_skin_checked="1">
                <p className="">
                    <span className="text-lg font-bold mt-16 text-sky-400">
                    Cyber
                    </span>
                    <span className="mx-3">August 12, 2022</span>
                  </p>
                  <h2 className="text-xl font-bold tracking-wide">
                   How to be appreciated for your hard work
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
