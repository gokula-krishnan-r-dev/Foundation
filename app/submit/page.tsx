import SubmitForm from "@/components/Application/SubmitForm";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="py-12 pt-24">
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-6xl font-bold px-6 text-center">
            Submit a request
          </h2>
          <p className="text-center text-base font-medium max-w-[80%] mt-4">
            Every day, a large number of organizations help provide services to
            the elderly, disabled people and people from immigrant backgrounds.
            The foundation financially supports initiatives in these
            organizations. You are invited to read the foundation&lsquo;s
            criteria and terms in order to submit a donation request.
          </p>
        </div>
      </div>
      <section>
        {/* Features */}
        <div className=" px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="min-h-[35vh] bg-[url('https://images.unsplash.com/photo-1665686374006-b8f04cf62d57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-center bg-cover bg-no-repeat relative rounded-xl md:min-h-[75vh]">
            <div className="absolute bottom-0 top-0 max-w-2xl text-center mx-auto p-6 md:start-auto md:text-start md:mx-0">
              {/* Card */}
              <div className="px-5 py-4 inline-block bg-white rounded-lg md:p-7 dark:bg-gray-800">
                <div className="hidden md:block">
                  <h3 className="text-lg font-bold text-gray-800 sm:text-2xl dark:text-gray-200">
                    Eligibility criteria
                  </h3>
                  <p className="mt-2 text-gray-800 dark:text-gray-200">
                    * Be a charity recognized by the CRA
                  </p>
                  <p className="mt-2 text-gray-800 dark:text-gray-200">
                    * Have expertise with populations identified in the
                    foundation&apos;s mission
                  </p>
                  <p className="mt-2 text-gray-800 dark:text-gray-200">
                    * Demonstrate good governance of all the organization’s
                    stakeholders
                  </p>
                </div>
              </div>
              {/* End Card */}
            </div>
          </div>
        </div>
        {/* End Features */}
      </section>
      <section>
        {/* Features */}
        <div className=" px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Grid */}
          <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
            <div className="border hover:border-blue-600 duration-300 rounded-3xl px-6 py-6">
              <p className="text-gray-500">
                Regardless of the type of project, the proposed solution must
                fit into the organization&apos;s own mission. It must therefore
                be considered in such a way that it becomes sustainable
                following the support of the foundation.
              </p>
              <ul role="list" className="space-y-2 pt-6 sm:space-y-4">
                <li className="flex space-x-3">
                  <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg
                      className="flex-shrink-0 h-3.5 w-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-sm sm:text-base text-gray-500">
                    <span className="font-bold">
                      The project offers a solution to those affected
                    </span>{" "}
                  </span>
                </li>
                <li className="flex space-x-3">
                  <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg
                      className="flex-shrink-0 h-3.5 w-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-sm sm:text-base text-gray-500">
                    Be able to demonstrate the objective of financial autonomy
                    following support from the foundation
                    <span className="font-bold"> </span>
                  </span>
                </li>
                <li className="flex space-x-3">
                  <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg
                      className="flex-shrink-0 h-3.5 w-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-sm sm:text-base text-gray-500">
                    If the project emerges from reflection, this must include
                    concerted partners
                  </span>
                </li>
                <li className="flex space-x-3">
                  <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg
                      className="flex-shrink-0 h-3.5 w-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-sm sm:text-base text-gray-500">
                    Provide the list of partners involved or solicited as part
                    of the project
                  </span>
                </li>
                <li className="flex space-x-3">
                  <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg
                      className="flex-shrink-0 h-3.5 w-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-sm sm:text-base text-gray-500">
                    The submitted project is an addition to the
                    organization&apos;s service offering
                  </span>
                </li>
              </ul>
              <p className="text-gray-500 pt-12">
                Consult this document to better understand the type of requests
                that can be made to the foundation.
              </p>
              <Link
                target="_blank"
                href="https://fmlsaputo.org/wp-content/uploads/2023/08/Types-demandes_aout23_VF.pdf"
                className="relative my-8 flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-[#9333ea] before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max astro-ES6RJE63"
              >
                <span className="relative text-sm font-semibold dark:text-white text-white astro-ES6RJE63">
                  {" "}
                  DOWNLOAD DOCUMENT
                </span>
              </Link>
            </div>
            {/* End Col */}
            <div className="mt-5 sm:mt-10 lg:mt-0">
              <div className="space-y-6 sm:space-y-8">
                {/* Title */}
                <div className="space-y-2 md:space-y-4">
                  <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                    Project eligibility
                  </h2>
                  <p className="text-gray-500">
                    A project linked to one of the populations targeted by the
                    foundation:
                  </p>
                </div>
                {/* End Title */}
                {/* List */}
                <ul role="list" className="space-y-2 sm:space-y-4">
                  <li className="flex space-x-3">
                    <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg
                        className="flex-shrink-0 h-3.5 w-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-sm sm:text-base text-gray-500">
                      <span className="font-bold">Old people</span>{" "}
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg
                        className="flex-shrink-0 h-3.5 w-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-sm sm:text-base text-gray-500">
                      Disabled
                      <span className="font-bold"> people</span>
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg
                        className="flex-shrink-0 h-3.5 w-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-sm sm:text-base text-gray-500">
                      People with immigrant backgrounds
                    </span>
                  </li>
                </ul>
                {/* End List */}
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Features */}
      </section>
      <section className="py-12">
        {" "}
        <div id="solution">
          <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-sky-500"
            >
              <path
                fillRule="evenodd"
                d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z"
                clipRule="evenodd"
              />
            </svg>
            <div className="space-y-6 justify-between text-gray-600 md:flex flex-row-reverse md:gap-6 md:space-y-0 lg:gap-12 lg:items-center">
              <div className="md:5/12 lg:w-1/2">
                <div className="border py-6  rounded-3xl px-6 ">
                  <p className="text-gray-500">
                    {" "}
                    Would you like to prepare your donation request in
                    collaboration with your team? Use the working document
                    provided for this purpose before submitting your final
                    answers via the application form .
                  </p>
                  <Link
                    target="_blank"
                    href="https://fmlsaputo.org/wp-content/uploads/2023/08/Types-demandes_aout23_VF.pdf"
                    className="relative my-8 flex h-10 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-[#9333ea] before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max astro-ES6RJE63"
                  >
                    <span className="relative text-sm font-semibold dark:text-white text-white astro-ES6RJE63">
                      {" "}
                      DOWNLOAD DOCUMENT
                    </span>
                  </Link>
                </div>
              </div>
              <div className="md:7/12 lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                  Guidelines for submitting a request for financial support
                </h2>
                <p className="my-8 text-gray-600 dark:text-gray-300">
                  If your organization and your project meet the
                  foundation&apos;s criteria, you are invited to present your
                  initiative by completing the form .
                  <br />
                  <br />
                  If your application is accepted, the foundation team will come
                  back to you for additional information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <SubmitForm />
      </section>
    </div>
  );
};

export default page;
