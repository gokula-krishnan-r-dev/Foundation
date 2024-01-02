import MessageForm from "@/components/MessageForm";

import React from "react";

const Contactus = () => {
  return (
    <>
      {/* Contact Us */}
      <div className="max-w-[115rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl pt-24 flex flex-col items-center lg:max-w-full mx-auto">
          <div className="text-center w-full lg:w-3/4">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
              Contact us
            </h1>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              Do you need more information? Do not hesitate to contact us!
              Remember to check that the answer to your question is not already
              on the site.
            </p>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              Subscribe to the contact list
            </p>
          </div>
          <MessageForm />
        </div>
      </div>
      {/* End Contact Us */}
    </>
  );
};

export default Contactus;
