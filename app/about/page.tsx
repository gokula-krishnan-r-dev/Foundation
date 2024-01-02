import Button from "@/components/Button";
import MessageForm from "@/components/MessageForm";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <div className="">
        <h1 className="text-center pt-24 text-6xl font-bold">About</h1>
        <div className="flex items-center pt-3 justify-center">
          <p className="text-center max-w-3xl">
            The past, the history and the journey of the founders allow the
            foundation to support organizations committed to the elderly,
            disabled people and people from immigrant backgrounds. Discover the
            origins, what defines the foundation, the team that makes it up and
            its actions.
          </p>
        </div>
        <>
          {/* Testimonials */}
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-0 mx-auto">
            <h1 className=" max-w-[85rem] pb-4 px-4 sm:px-6 lg:px-8 mx-auto pt-12 text-4xl font-bold">
              History
            </h1>
            <p className="pb-6 px-6">
              The Mirella and Lino Saputo Foundation: listening, accompanying
              and supporting initiatives.{" "}
            </p>
            <p className="pb-6 px-6 max-w-3xl">
              From the beginning of the company, the Saputo couple, faithful to
              their parents' model of benevolence, became involved in what was
              then called charity.
            </p>
            {/* Grid */}
            <div className="md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center">
              <div className="hidden md:block mb-24 md:mb-0 sm:px-6">
                <div className="relative">
                  <img
                    className="rounded-xl"
                    src="/MirellaSaputo.jpg"
                    alt="Image Description"
                  />
                  {/* SVG Element */}
                  <div className="absolute bottom-0 start-0 -z-[1] translate-y-10 -translate-x-14">
                    <svg
                      className="max-w-[10rem] h-auto text-slate-400 dark:text-slate-700"
                      width={696}
                      height={653}
                      viewBox="0 0 696 653"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="72.5"
                        cy="29.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="171.5"
                        cy="29.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="270.5"
                        cy="29.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="369.5"
                        cy="29.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="468.5"
                        cy="29.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="567.5"
                        cy="29.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="666.5"
                        cy="29.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="29.5"
                        cy="128.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="128.5"
                        cy="128.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="227.5"
                        cy="128.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="326.5"
                        cy="128.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="425.5"
                        cy="128.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="524.5"
                        cy="128.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="623.5"
                        cy="128.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="72.5"
                        cy="227.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="171.5"
                        cy="227.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="270.5"
                        cy="227.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="369.5"
                        cy="227.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="468.5"
                        cy="227.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="567.5"
                        cy="227.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="666.5"
                        cy="227.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="29.5"
                        cy="326.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="128.5"
                        cy="326.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="227.5"
                        cy="326.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="326.5"
                        cy="326.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="425.5"
                        cy="326.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="524.5"
                        cy="326.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="623.5"
                        cy="326.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="72.5"
                        cy="425.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="171.5"
                        cy="425.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="270.5"
                        cy="425.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="369.5"
                        cy="425.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="468.5"
                        cy="425.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="567.5"
                        cy="425.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="666.5"
                        cy="425.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="29.5"
                        cy="524.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="128.5"
                        cy="524.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="227.5"
                        cy="524.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="326.5"
                        cy="524.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="425.5"
                        cy="524.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="524.5"
                        cy="524.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="623.5"
                        cy="524.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="72.5"
                        cy="623.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="171.5"
                        cy="623.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="270.5"
                        cy="623.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="369.5"
                        cy="623.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="468.5"
                        cy="623.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="567.5"
                        cy="623.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="666.5"
                        cy="623.5"
                        r="29.5"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  {/* End SVG Element */}
                </div>
              </div>
              {/* End Col */}
              <div>
                {/* Blockquote */}
                <blockquote className="relative">
                  <svg
                    className="absolute top-0 start-0 transform -translate-x-8 -translate-y-4 h-24 w-24 text-gray-200 dark:text-gray-700"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                      fill="currentColor"
                    />
                  </svg>
                  <div className="relative z-10">
                    <p className="text-xs font-semibold text-gray-500 tracking-wide uppercase mb-3 dark:text-gray-200">
                      Featured client
                    </p>
                    <p className="text-xl font-medium italic text-gray-800 md:text-2xl md:leading-normal xl:text-3xl xl:leading-normal dark:text-gray-200">
                      Later (after marriage in 1963) we took part in charitable
                      and community initiatives. Our foundation was born in this
                      wake. (…) I knew that if we were successful in business,
                      charitable activities would play a major role in our life
                      as a couple. Our parents were generous by nature, and I
                      grew up sharing the same values ​​as them.
                    </p>
                  </div>
                  <footer className="mt-6">
                    <div className="flex items-center">
                      <div className="md:hidden flex-shrink-0">
                        <img
                          className="h-12 w-12 rounded-full"
                          src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                          alt="Image Description"
                        />
                      </div>
                      <div className="ms-4 md:ms-0">
                        <div className="text-base font-semibold text-gray-800 dark:text-gray-200">
                          Mirella Saputo
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          President , Mirella and Lino Saputo Foundation.
                        </div>
                      </div>
                    </div>
                  </footer>
                </blockquote>
                {/* End Blockquote */}
              </div>
              {/* End Col */}
            </div>
            <p className="pb-6 px-6 pt-24 max-w-3xl">
              <span className="font-bold"> 1979 – </span>The 25th anniversary of
              the company marks the creation of the Saputo family foundation, in
              order to supervise their philanthropic projects and have a
              long-term mission.
            </p>
            <div className="md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center">
              <div className="hidden md:block mb-24 md:mb-0 sm:px-6">
                <div className="relative">
                  <img
                    className="rounded-xl"
                    src="/LinoSaputoSr.jpg"
                    alt="Image Description"
                  />
                  {/* SVG Element */}
                  <div className="absolute bottom-0 start-0 -z-[1] translate-y-10 -translate-x-14">
                    <svg
                      className="max-w-[10rem] h-auto text-slate-400 dark:text-slate-700"
                      width={696}
                      height={653}
                      viewBox="0 0 696 653"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="72.5"
                        cy="29.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="171.5"
                        cy="29.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="270.5"
                        cy="29.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="369.5"
                        cy="29.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="468.5"
                        cy="29.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="567.5"
                        cy="29.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="666.5"
                        cy="29.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="29.5"
                        cy="128.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="128.5"
                        cy="128.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="227.5"
                        cy="128.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="326.5"
                        cy="128.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="425.5"
                        cy="128.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="524.5"
                        cy="128.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="623.5"
                        cy="128.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="72.5"
                        cy="227.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="171.5"
                        cy="227.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="270.5"
                        cy="227.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="369.5"
                        cy="227.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="468.5"
                        cy="227.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="567.5"
                        cy="227.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="666.5"
                        cy="227.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="29.5"
                        cy="326.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="128.5"
                        cy="326.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="227.5"
                        cy="326.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="326.5"
                        cy="326.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="425.5"
                        cy="326.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="524.5"
                        cy="326.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="623.5"
                        cy="326.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="72.5"
                        cy="425.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="171.5"
                        cy="425.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="270.5"
                        cy="425.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="369.5"
                        cy="425.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="468.5"
                        cy="425.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="567.5"
                        cy="425.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="666.5"
                        cy="425.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="29.5"
                        cy="524.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="128.5"
                        cy="524.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="227.5"
                        cy="524.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="326.5"
                        cy="524.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="425.5"
                        cy="524.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="524.5"
                        cy="524.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="623.5"
                        cy="524.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="72.5"
                        cy="623.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="171.5"
                        cy="623.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="270.5"
                        cy="623.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="369.5"
                        cy="623.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="468.5"
                        cy="623.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="567.5"
                        cy="623.5"
                        r="29.5"
                        fill="currentColor"
                      />
                      <circle
                        cx="666.5"
                        cy="623.5"
                        r="29.5"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  {/* End SVG Element */}
                </div>
              </div>
              {/* End Col */}
              <div>
                {/* Blockquote */}
                <blockquote className="relative">
                  <svg
                    className="absolute top-0 start-0 transform -translate-x-8 -translate-y-4 h-24 w-24 text-gray-200 dark:text-gray-700"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                      fill="currentColor"
                    />
                  </svg>
                  <div className="relative z-10">
                    <p className="text-xs font-semibold text-gray-500 tracking-wide uppercase mb-3 dark:text-gray-200">
                      Featured client
                    </p>
                    <p className="text-xl font-medium italic text-gray-800 md:text-2xl md:leading-normal xl:text-3xl xl:leading-normal dark:text-gray-200">
                      Later (after marriage in 1963) we took part in charitable
                      and community initiatives. Our foundation was born in this
                      wake. (…) I knew that if we were successful in business,
                      charitable activities would play a major role in our life
                      as a couple. Our parents were generous by nature, and I
                      grew up sharing the same values ​​as them.
                    </p>
                  </div>
                  <footer className="mt-6">
                    <div className="flex items-center">
                      <div className="md:hidden flex-shrink-0">
                        <img
                          className="h-12 w-12 rounded-full"
                          src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                          alt="Image Description"
                        />
                      </div>
                      <div className="ms-4 md:ms-0">
                        <div className="text-base font-semibold text-gray-800 dark:text-gray-200">
                          Lino Saputo
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          Chairman of the Board of Directors , Mirella and Lino
                          Saputo Foundation.
                        </div>
                      </div>
                    </div>
                  </footer>
                </blockquote>
                {/* End Blockquote */}
              </div>
              {/* End Col */}
            </div>
            <div className="pt-24 pb-12">
              <img
                className="rounded-3xl  h-[400px] w-[700px] object-cover object-center mx-auto"
                src="/family.webp"
                alt=""
              />
              <div className="max-w-4xl mx-auto space-y-6">
                <p className="pt-3   text-start mx-auto">
                  With a generous family history, Mirella and Lino Saputo
                  decided to perpetuate their values ​​and actions with the
                  creation of a philanthropic foundation intended to listen,
                  accompany and support non-profit organizations (NPOs)
                  throughout Quebec.{" "}
                </p>
                <p>
                  In 1997 , the foundation officially became the Mirella and
                  Lino Saputo Foundation.{" "}
                </p>
                <p>
                  Today, with the desire to make a difference, the foundation is
                  continually monitoring the issues facing organizations, in
                  order to be a local and grassroots player. Our increased
                  presence delivers greater impact. Our story continues by
                  perpetuating inherited motivations.
                </p>
              </div>
            </div>
            {/* End Grid */}
          </div>
          <div className="flex pb-12 px-24">
            <div className="aspect-auto flex-1 max-w-sm p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <div className="flex gap-4">
                <h2 className="text-2xl font-bold">
                  What defines the Mirella and Lino Saputo Foundation
                </h2>
              </div>
              <p className="mt-4">
                {" "}
                The foundation's approach? Use its skills and resources to be
                one of the actors present among the populations it supports .
                Always in line with deep-rooted family values.
              </p>
            </div>
            <div className="flex-1 px-12">
              <h1 className="text-3xl pb-2 text-blue-600  font-bold">
                Assignment
              </h1>
              <p>
                Support initiatives for better social and economic performance
                of elderly people, disabled people and people from immigrant
                backgrounds.
              </p>
              <h1 className="text-3xl pt-12 pb-2 text-blue-600 font-bold">
                Vision
              </h1>
              <p>
                Encourage an inclusive and resilient society in the hope of
                helping to create a better social landscape in sectors receiving
                little financial support.
              </p>
            </div>
          </div>
          <div className="py-6">
            <h1 className="text-4xl font-bold text-center">
              Recent contributions from the foundation
            </h1>
            <>
              {/* Features */}
              <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Grid */}
                <div className="mt-20 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
                      2018
                    </h4>
                    <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-600">
                      $9,443,977
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
                      2019
                    </h4>
                    <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-600">
                      $9,851,538
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
                      2020
                    </h4>
                    <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-600">
                      $11,453,863
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
                      2021
                    </h4>
                    <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-600">
                      $15,289,490
                    </p>
                  </div>

                  {/* End Stats */}
                </div>
                {/* End Grid */}
              </div>
              {/* End Features */}
            </>
          </div>
          <div className="">
            <>
              {/* ====== Team Section Start */}
              <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20 dark:bg-dark">
                <div className="container mx-auto">
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                      <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                        <span className="text-primary mb-2 block text-lg font-semibold">
                          Our Team
                        </span>
                        <h2 className="text-dark dark:text-white mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]">
                          Our Awesome Team
                        </h2>
                        <p className="text-body-color text-base dark:text-dark-6">
                          Francesco Miele, executive vice-president and Lise
                          Roche, program director, constitute the pair dedicated
                          to the success of your projects.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="-mx-4 flex flex-wrap justify-center">
                    <div className="w-full px-4 md:w-1/2 xl:w-1/4">
                      <div className="mx-auto mb-10 w-full max-w-[370px]">
                        <div className="relative overflow-hidden rounded-lg">
                          <img
                            src="/Sans-titre.png"
                            alt="image"
                            className="w-full"
                          />
                          <div className="relative mx-5 -mt-10 overflow-hidden rounded-lg bg-white dark:bg-dark-2 py-5 px-3">
                            <h3 className="text-dark dark:text-black text-base font-semibold">
                              Francesco Miele
                            </h3>
                            <p className="text-body-color dark:text-black text-xs">
                              Executive Vice President
                            </p>
                            <div>
                              <span className="absolute left-0 bottom-0">
                                <svg
                                  width={61}
                                  height={30}
                                  viewBox="0 0 61 30"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx={16}
                                    cy={45}
                                    r={45}
                                    fill="#13C296"
                                    fillOpacity="0.11"
                                  />
                                </svg>
                              </span>
                              <span className="absolute top-0 right-0">
                                <svg
                                  width={20}
                                  height={25}
                                  viewBox="0 0 20 25"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="0.706257"
                                    cy="24.3533"
                                    r="0.646687"
                                    transform="rotate(-90 0.706257 24.3533)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="6.39669"
                                    cy="24.3533"
                                    r="0.646687"
                                    transform="rotate(-90 6.39669 24.3533)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="12.0881"
                                    cy="24.3533"
                                    r="0.646687"
                                    transform="rotate(-90 12.0881 24.3533)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="17.7785"
                                    cy="24.3533"
                                    r="0.646687"
                                    transform="rotate(-90 17.7785 24.3533)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="0.706257"
                                    cy="18.6624"
                                    r="0.646687"
                                    transform="rotate(-90 0.706257 18.6624)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="6.39669"
                                    cy="18.6624"
                                    r="0.646687"
                                    transform="rotate(-90 6.39669 18.6624)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="12.0881"
                                    cy="18.6624"
                                    r="0.646687"
                                    transform="rotate(-90 12.0881 18.6624)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="17.7785"
                                    cy="18.6624"
                                    r="0.646687"
                                    transform="rotate(-90 17.7785 18.6624)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="0.706257"
                                    cy="12.9717"
                                    r="0.646687"
                                    transform="rotate(-90 0.706257 12.9717)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="6.39669"
                                    cy="12.9717"
                                    r="0.646687"
                                    transform="rotate(-90 6.39669 12.9717)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="12.0881"
                                    cy="12.9717"
                                    r="0.646687"
                                    transform="rotate(-90 12.0881 12.9717)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="17.7785"
                                    cy="12.9717"
                                    r="0.646687"
                                    transform="rotate(-90 17.7785 12.9717)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="0.706257"
                                    cy="7.28077"
                                    r="0.646687"
                                    transform="rotate(-90 0.706257 7.28077)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="6.39669"
                                    cy="7.28077"
                                    r="0.646687"
                                    transform="rotate(-90 6.39669 7.28077)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="12.0881"
                                    cy="7.28077"
                                    r="0.646687"
                                    transform="rotate(-90 12.0881 7.28077)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="17.7785"
                                    cy="7.28077"
                                    r="0.646687"
                                    transform="rotate(-90 17.7785 7.28077)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="0.706257"
                                    cy="1.58989"
                                    r="0.646687"
                                    transform="rotate(-90 0.706257 1.58989)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="6.39669"
                                    cy="1.58989"
                                    r="0.646687"
                                    transform="rotate(-90 6.39669 1.58989)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="12.0881"
                                    cy="1.58989"
                                    r="0.646687"
                                    transform="rotate(-90 12.0881 1.58989)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="17.7785"
                                    cy="1.58989"
                                    r="0.646687"
                                    transform="rotate(-90 17.7785 1.58989)"
                                    fill="#3056D3"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 xl:w-1/4">
                      <div className="mx-auto mb-10 w-full max-w-[370px]">
                        <div className="relative overflow-hidden rounded-lg">
                          <img
                            src="/Lise-Roche.jpeg"
                            alt="image"
                            className="w-full"
                          />
                          <div className="relative mx-5 -mt-10 overflow-hidden rounded-lg bg-white dark:bg-dark-2 py-5 px-3">
                            <h3 className="text-dark dark:text-black text-base font-semibold">
                              Lisa Roche
                            </h3>
                            <p className="text-body-color dark:text-black text-xs">
                              Program Director
                            </p>
                            <div>
                              <span className="absolute left-0 bottom-0">
                                <svg
                                  width={61}
                                  height={30}
                                  viewBox="0 0 61 30"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx={16}
                                    cy={45}
                                    r={45}
                                    fill="#13C296"
                                    fillOpacity="0.11"
                                  />
                                </svg>
                              </span>
                              <span className="absolute top-0 right-0">
                                <svg
                                  width={20}
                                  height={25}
                                  viewBox="0 0 20 25"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="0.706257"
                                    cy="24.3533"
                                    r="0.646687"
                                    transform="rotate(-90 0.706257 24.3533)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="6.39669"
                                    cy="24.3533"
                                    r="0.646687"
                                    transform="rotate(-90 6.39669 24.3533)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="12.0881"
                                    cy="24.3533"
                                    r="0.646687"
                                    transform="rotate(-90 12.0881 24.3533)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="17.7785"
                                    cy="24.3533"
                                    r="0.646687"
                                    transform="rotate(-90 17.7785 24.3533)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="0.706257"
                                    cy="18.6624"
                                    r="0.646687"
                                    transform="rotate(-90 0.706257 18.6624)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="6.39669"
                                    cy="18.6624"
                                    r="0.646687"
                                    transform="rotate(-90 6.39669 18.6624)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="12.0881"
                                    cy="18.6624"
                                    r="0.646687"
                                    transform="rotate(-90 12.0881 18.6624)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="17.7785"
                                    cy="18.6624"
                                    r="0.646687"
                                    transform="rotate(-90 17.7785 18.6624)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="0.706257"
                                    cy="12.9717"
                                    r="0.646687"
                                    transform="rotate(-90 0.706257 12.9717)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="6.39669"
                                    cy="12.9717"
                                    r="0.646687"
                                    transform="rotate(-90 6.39669 12.9717)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="12.0881"
                                    cy="12.9717"
                                    r="0.646687"
                                    transform="rotate(-90 12.0881 12.9717)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="17.7785"
                                    cy="12.9717"
                                    r="0.646687"
                                    transform="rotate(-90 17.7785 12.9717)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="0.706257"
                                    cy="7.28077"
                                    r="0.646687"
                                    transform="rotate(-90 0.706257 7.28077)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="6.39669"
                                    cy="7.28077"
                                    r="0.646687"
                                    transform="rotate(-90 6.39669 7.28077)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="12.0881"
                                    cy="7.28077"
                                    r="0.646687"
                                    transform="rotate(-90 12.0881 7.28077)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="17.7785"
                                    cy="7.28077"
                                    r="0.646687"
                                    transform="rotate(-90 17.7785 7.28077)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="0.706257"
                                    cy="1.58989"
                                    r="0.646687"
                                    transform="rotate(-90 0.706257 1.58989)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="6.39669"
                                    cy="1.58989"
                                    r="0.646687"
                                    transform="rotate(-90 6.39669 1.58989)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="12.0881"
                                    cy="1.58989"
                                    r="0.646687"
                                    transform="rotate(-90 12.0881 1.58989)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="17.7785"
                                    cy="1.58989"
                                    r="0.646687"
                                    transform="rotate(-90 17.7785 1.58989)"
                                    fill="#3056D3"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="max-w-3xl mx-auto">
                    <p>
                      The foundation team is influenced by the extraordinary
                      work done on the ground every day by the organizations.
                      The foundation's support is intended to be a lever and a
                      bridge towards direct access to services for selected
                      populations.
                    </p>
                    <br />
                    <p>
                      In order to respect its commitments, the foundation
                      benefits from the support of the professional resources of
                      the family office. These carry out responsibilities for
                      financial management, social investment programs and
                      day-to-day administration.
                    </p>
                    <div className="pt-4">
                      <Button
                        title={" Submit A Request To The Team"}
                        href="/submit"
                      />
                    </div>
                  </div>
                </div>
              </section>
              {/* ====== Team Section End */}
            </>
          </div>
          {/* End Testimonials */}
        </>
        <MessageForm />
      </div>
    </div>
  );
};

export default AboutPage;
