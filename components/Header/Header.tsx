"use client";
import React, { useEffect, useState } from "react";
import { ModeToggle } from "../ThemeMode/ModeToggle";
import Image from "next/image";
import { TwitterLogoIcon } from "@radix-ui/react-icons";
import { FacebookIcon } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos > 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    // <header>
    //   <div className="">
    //     <div className=" flex items-center justify-between py-8 bg-white rounded-b-xl rounded-t-none rounded-r-xl w-[90%]">
    //       <div className="w-full">
    //         <Image
    //           className="ml-auto mr-12"
    //           height={100}
    //           width={100}
    //           alt="logo"
    //           src={
    //             "data:image/png;base64,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"
    //           }
    //         />
    //       </div>
    //       <div className="w-full flex-col flex space-y-4">
    //         <div className="flex items-center w-full justify-between">
    //           <div className="">
    //             <h4 className="text-gray-400">
    //               Welcome to non profit charity platform
    //             </h4>
    //           </div>
    //           <div className="flex px-6 items-center gap-2">
    //             <TwitterLogoIcon
    //               color="black"
    //               width={18}
    //               height={18}
    //               fontSize={"34px"}
    //             />
    //             <FacebookIcon
    //               color="black"
    //               width={18}
    //               height={18}
    //               fontSize={"34px"}
    //             />
    //             <TwitterLogoIcon
    //               color="black"
    //               width={18}
    //               height={18}
    //               fontSize={"34px"}
    //             />
    //             <TwitterLogoIcon
    //               color="black"
    //               width={18}
    //               height={18}
    //               fontSize={"34px"}
    //             />
    //           </div>
    //         </div>
    //         <div className="bg-gray-800 py-4 rounded-l-3xl px-8">
    //           <ul className="flex text-[#9e9e9e] font-semibold items-center justify-between">
    //             <li>Home</li>
    //             <li>About us </li>
    //             <li>Event</li>
    //             <li>Contact</li>
    //           </ul>
    //           <div className=""></div>
    //         </div>
    //         <div className="flex items-center justify-between px-6">
    //           <div className="flex items-center text-black gap-2">
    //             <div className="flex gap-3 items-center">
    //               <svg
    //                 height={18}
    //                 width={18}
    //                 viewBox="0 0 24 24"
    //                 fill="none"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    //                 <g
    //                   id="SVGRepo_tracerCarrier"
    //                   stroke-linecap="round"
    //                   stroke-linejoin="round"
    //                 ></g>
    //                 <g id="SVGRepo_iconCarrier">
    //                   {" "}
    //                   <path
    //                     d="M8 10.5H16M8 14.5H11M21.0039 12C21.0039 16.9706 16.9745 21 12.0039 21C9.9675 21 3.00463 21 3.00463 21C3.00463 21 4.56382 17.2561 3.93982 16.0008C3.34076 14.7956 3.00391 13.4372 3.00391 12C3.00391 7.02944 7.03334 3 12.0039 3C16.9745 3 21.0039 7.02944 21.0039 12Z"
    //                     stroke="#000000"
    //                     stroke-width="2"
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                   ></path>{" "}
    //                 </g>
    //               </svg>
    //               <Link
    //                 className="dark:text-black"
    //                 href="mailto:needhelp@azino.com"
    //               >
    //                 needhelp@azino.com
    //               </Link>
    //             </div>
    //             <div className="flex gap-3 items-center">
    //               <svg
    //                 width={24}
    //                 height={24}
    //                 viewBox="0 -0.5 25 25"
    //                 fill="none"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    //                 <g
    //                   id="SVGRepo_tracerCarrier"
    //                   stroke-linecap="round"
    //                   stroke-linejoin="round"
    //                 ></g>
    //                 <g id="SVGRepo_iconCarrier">
    //                   {" "}
    //                   <path
    //                     fill-rule="evenodd"
    //                     clip-rule="evenodd"
    //                     d="M6.14636 10.022C6.80636 9.32201 7.03936 9.13102 7.32136 9.04102C7.51602 8.98972 7.72024 8.98664 7.91636 9.03202C8.17436 9.10802 8.24236 9.16402 9.08836 10.007C9.83136 10.747 9.90536 10.828 9.97736 10.972C10.1137 11.2264 10.1348 11.527 10.0354 11.798C9.96236 12.004 9.85336 12.14 9.40336 12.598L9.10936 12.898C9.03004 12.9772 9.01178 13.099 9.06436 13.198C9.71769 14.3125 10.6446 15.2418 11.7574 15.898C11.8855 15.9664 12.0432 15.9442 12.1474 15.843L12.4304 15.565C12.605 15.3857 12.79 15.2168 12.9844 15.059C13.2865 14.8677 13.6659 14.8454 13.9884 15C14.1454 15.074 14.1974 15.121 14.9644 15.886C15.7554 16.674 15.7774 16.699 15.8644 16.88C16.0293 17.1784 16.0293 17.5406 15.8644 17.839C15.7794 18.007 15.7274 18.068 15.2834 18.522C15.0144 18.796 14.7624 19.049 14.7224 19.084C14.3546 19.3888 13.8825 19.5381 13.4064 19.5C12.5374 19.4208 11.6964 19.1521 10.9424 18.713C9.27229 17.8278 7.85066 16.5382 6.80736 14.962C6.57927 14.6328 6.37636 14.2868 6.20036 13.927C5.73125 13.1216 5.48933 12.204 5.50036 11.272C5.53604 10.7846 5.76943 10.333 6.14636 10.022Z"
    //                     stroke="#000000"
    //                     stroke-width="1.5"
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                   ></path>{" "}
    //                   <path
    //                     d="M15.7764 4.75C15.3622 4.75 15.0264 5.08579 15.0264 5.5C15.0264 5.91421 15.3622 6.25 15.7764 6.25V4.75ZM19.4884 6.25C19.9026 6.25 20.2384 5.91421 20.2384 5.5C20.2384 5.08579 19.9026 4.75 19.4884 4.75V6.25ZM20.2384 5.5C20.2384 5.08579 19.9026 4.75 19.4884 4.75C19.0742 4.75 18.7384 5.08579 18.7384 5.5H20.2384ZM18.7384 9C18.7384 9.41421 19.0742 9.75 19.4884 9.75C19.9026 9.75 20.2384 9.41421 20.2384 9H18.7384ZM20.0187 6.03033C20.3116 5.73744 20.3116 5.26256 20.0187 4.96967C19.7258 4.67678 19.2509 4.67678 18.958 4.96967L20.0187 6.03033ZM13.708 10.2197C13.4151 10.5126 13.4151 10.9874 13.708 11.2803C14.0009 11.5732 14.4758 11.5732 14.7687 11.2803L13.708 10.2197ZM15.7764 6.25H19.4884V4.75H15.7764V6.25ZM18.7384 5.5V9H20.2384V5.5H18.7384ZM18.958 4.96967L13.708 10.2197L14.7687 11.2803L20.0187 6.03033L18.958 4.96967Z"
    //                     fill="#000000"
    //                   ></path>{" "}
    //                 </g>
    //               </svg>
    //               <Link
    //                 className="dark:text-black"
    //                 href="mailto:needhelp@azino.com"
    //               >
    //                 666 888 0000
    //               </Link>
    //             </div>
    //           </div>
    //           <div className="">
    //             <ModeToggle />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </header>
    <header className="astro-ES6RJE63">
      <nav className="absolute z-10 w-full border-b border-black/5 dark:border-white/5 lg:border-transparent astro-ES6RJE63">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4 astro-ES6RJE63">
            <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max astro-ES6RJE63">
              <a
                href="/#home"
                aria-label="logo"
                className="flex items-center space-x-2 astro-ES6RJE63"
              >
                <div
                  aria-hidden="true"
                  className="flex space-x-1 astro-ES6RJE63"
                >
                  <div className="h-4 w-4 rounded-full bg-gray-900 dark:bg-white astro-ES6RJE63" />
                  <div className="h-6 w-2 bg-[#9333ea] astro-ES6RJE63" />
                </div>
                <span className="text-2xl font-bold text-gray-900 dark:text-white astro-ES6RJE63">
                  Astrolus
                </span>
              </a>
              <div className="relative flex max-h-10 items-center lg:hidden astro-ES6RJE63">
                <button
                  aria-label="humburger"
                  id="hamburger"
                  className="relative -mr-6 p-6 astro-ES6RJE63"
                >
                  <div
                    aria-hidden="true"
                    id="line"
                    className="m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300 astro-ES6RJE63"
                  />
                  <div
                    aria-hidden="true"
                    id="line2"
                    className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300 astro-ES6RJE63"
                  />
                </button>
              </div>
            </div>
            <div
              id="navLayer"
              aria-hidden="true"
              className="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-gray-900/70 lg:hidden astro-ES6RJE63"
            />
            <div
              id="navlinks"
              className="invisible absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:visible lg:relative lg:flex lg:w-7/12 lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none astro-ES6RJE63"
            >
              <div className="w-full text-gray-600 dark:text-gray-200 lg:w-auto lg:pr-4 lg:pt-0 astro-ES6RJE63">
                <ul className="flex flex-col gap-6 tracking-wide lg:flex-row lg:gap-0 lg:text-sm astro-ES6RJE63">
                  <li className="astro-ES6RJE63">
                    <a
                      href="/#features"
                      className="hover:text-primary block transition dark:hover:text-white md:px-4 astro-ES6RJE63"
                    >
                      <span className="astro-ES6RJE63">Features</span>
                    </a>
                  </li>
                  <li className="astro-ES6RJE63">
                    <a
                      href="/#solution"
                      className="hover:text-primary block transition dark:hover:text-white md:px-4 astro-ES6RJE63"
                    >
                      <span className="astro-ES6RJE63">Solution</span>
                    </a>
                  </li>
                  <li className="astro-ES6RJE63">
                    <a
                      href="/#reviews"
                      className="hover:text-primary block transition dark:hover:text-white md:px-4 astro-ES6RJE63"
                    >
                      <span className="astro-ES6RJE63">Reviews</span>
                    </a>
                  </li>
                  <li className="astro-ES6RJE63">
                    <a
                      href="https://tailus.gumroad.com/l/astls-premium"
                      target="_blank"
                      className="flex gap-2 font-semibold text-gray-700 transition hover:text-primary dark:text-white dark:hover:text-white md:px-4 astro-ES6RJE63"
                    >
                      <span className="astro-ES6RJE63">Premium</span>
                      <span className="flex rounded-full bg-[#9333ea]/20 px-1.5 py-0.5 text-xs tracking-wider text-purple-700 dark:bg-white/10 dark:text-orange-300 astro-ES6RJE63">
                        {" "}
                        new
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 lg:mt-0 astro-ES6RJE63">
                <a
                  href="/register"
                  className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-[#9333ea] before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max astro-ES6RJE63"
                >
                  <span className="relative text-sm font-semibold dark:text-white text-black astro-ES6RJE63">
                    {" "}
                    Get Started
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
