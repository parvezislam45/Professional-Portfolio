import React from "react";

const Footer = () => {
  return (
    <div className="">
      <footer class="text-center  text-white">
        <div class="container px-20 pt-10">
          <div class="grid lg:grid-cols-3 md:grid-cols-2">
            <div class="mx-auto">
              <div className="flex justify-start mt-4">
                <figure>
                  <img
                    src="https://i.postimg.cc/HsW991T5/david.png"
                    alt="Movie"
                    className="w-10 h-10 rounded-full"
                  />
                </figure>
                <h1 class="text-xl font-bold mx-4 border-b-4 border-sky-500 ">
                  Parvez Islam
                </h1>
              </div>

              <ul class="list-none mb-0">
                <div className="flex justify-start mt-4">
                  <figure>
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/4874/4874738.png"
                      alt="Movie"
                      className="w-8"
                    />
                  </figure>
                  <p class="text-sm font-bold mx-2">
                    152/1,Bilashdi, Narsingdi, Bangladesh
                  </p>
                </div>
                <div className="flex justify-start mt-4">
                  <figure>
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/484/484525.png"
                      alt="Movie"
                      className="w-6"
                    />
                  </figure>
                  <p class="text-md font-bold mx-2">+88 01683338523</p>
                </div>
                <div className="flex justify-start mt-4">
                  <figure>
                    <img
                      src="https://0201.nccdn.net/1_2/000/000/107/b8f/icon2-256x256.png"
                      alt="Movie"
                      className="w-10 -mx-1"
                    />
                  </figure>
                  <p class="text-md font-bold mx-2">
                    aurthohinparvez2@gmail.com
                  </p>
                </div>
                <div class="flex justify-start mt-8">
                  <a
                    href="#!"
                    type="button"
                    class="rounded-full border-2 border-white text-white leading-normal uppercase bg-sky-500 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-12 h-12 m-1"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="facebook-f"
                      class="w-2 h-full mx-auto"
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
                    href="#!"
                    type="button"
                    class="rounded-full border-2 border-white text-white leading-normal uppercase bg-sky-500 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-12 h-12 m-1"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="twitter"
                      class="w-3 h-full mx-auto"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                      ></path>
                    </svg>
                  </a>

                  <a
                    href="#!"
                    type="button"
                    class="rounded-full border-2 border-white text-white leading-normal uppercase bg-sky-500 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-12 h-12 m-1"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="google"
                      class="w-3 h-full mx-auto"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 488 512"
                    >
                      <path
                        fill="currentColor"
                        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                      ></path>
                    </svg>
                  </a>

                  <a
                    href="#!"
                    type="button"
                    class="rounded-full border-2 border-white text-white leading-normal uppercase bg-sky-500 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-12 h-12 m-1"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="instagram"
                      class="w-3 h-full mx-auto"
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
              </ul>
            </div>

            <div class="mb-6 mx-20">
              <a href="/">
                <div className="flex justify-start mt-4">
                  <h1 class="text-xl font-bold mx-4 hover:text-red-600 border-b-4 border-sky-400 ">
                    Quick Links
                  </h1>
                </div>
              </a>

              <ul class="list-none mb-0">
                <a href="/">
                  <div className="flex justify-start mt-4">
                    <figure>
                      <img
                        src="https://dxocom.com/wp-content/uploads/2016/02/redArrow.png"
                        alt="Movie"
                        className="w-3 mt-1"
                      />
                    </figure>
                    <p class="text-md font-bold mx-2 hover:text-red-600">
                      About
                    </p>
                  </div>
                </a>
                <a href="/">
                  <div className="flex justify-start mt-4">
                    <figure>
                      <img
                        src="https://dxocom.com/wp-content/uploads/2016/02/redArrow.png"
                        alt="Movie"
                        className="w-3 mt-1"
                      />
                    </figure>
                    <p class="text-md font-bold mx-2 hover:text-red-600">
                      FAQ'S
                    </p>
                  </div>
                </a>

                <a href="/">
                  <div className="flex justify-start mt-4">
                    <figure>
                      <img
                        src="https://dxocom.com/wp-content/uploads/2016/02/redArrow.png"
                        alt="Movie"
                        className="w-3 mt-1"
                      />
                    </figure>
                    <p class="text-md font-bold mx-2 hover:text-red-600">
                      My Services
                    </p>
                  </div>
                </a>
                <a href="/">
                  <div className="flex justify-start mt-4">
                    <figure>
                      <img
                        src="https://dxocom.com/wp-content/uploads/2016/02/redArrow.png"
                        alt="Movie"
                        className="w-3 mt-1"
                      />
                    </figure>
                    <p class="text-md font-bold mx-2 hover:text-red-600">
                      Latest Blog
                    </p>
                  </div>
                </a>
              </ul>
            </div>

            <div class="mb-6">
              <div className="flex justify-start mt-4">
                <h1 class="text-xl font-bold mx-4 border-b-4 border-sky-500 ">
                  Newsletter
                </h1>
              </div>
              <p className="text-md font-normal text-start mt-5">
                Subscribe Our Newsletter To Get Latest Update And News And Stay
                Connected
              </p>
              <div className="mt-8">
                <input
                  type="text"
                  id="first_name"
                  class="choose border-solid border-2 border-white text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-4"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="text-start">
                <button
                  type="button"
                  class="text-white bg-sky-500 hover:bg-blue-800 rounded-xl text-md font-bold px-5 py-2.5 text-center inline-flex items-center mt-6"
                >
                  SUBSCRIBE NOW
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-telegram w-9 h-10 ml-3 -mr-3 "
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"
                      fill="white"
                    ></path>{" "}
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center p-4">
          <a class="text-white" href="/">
            {" "}
            © {" "}
            <span className="text-2xl text-white font-black">
              {" "}
              Parvez Islam
            </span>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
