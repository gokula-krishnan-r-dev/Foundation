// "use client";
// import { Modal, Button } from '@mantine/core'
// import Link from "next/link";

// export function SuccessModel({ formSubmitSuccess, setFormSubmitSuccess }: any) {
//   return (
//     <Modal
//       opened={formSubmitSuccess}
//       onClose={setFormSubmitSuccess}
//       title="Application form  Submitted"
//     >
// {/* <div className="flex items-center space-x-2">
//   <div>
//     <div
//       id="successModal"
//       className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"
//     >
//       <div className="relative p-4 w-full max-w-md h-full md:h-auto">
//         {/* Modal content */}
//         <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
//           <Link
//             href={"/submit"}
//             type="button"
//             className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
//             data-modal-toggle="successModal"
//           >
//             <svg
//               aria-hidden="true"
//               className="w-5 h-5"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             <span className="sr-only">Close modal</span>
//           </Link>

//           <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
//             <svg
//               aria-hidden="true"
//               className="w-8 h-8 text-green-500 dark:text-green-400"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             <span className="sr-only">Success</span>
//           </div>
//           <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
//             Successfully removed product.
//           </p>
//           <p className="text-gray-400">
//             Thank you for your submission. Our team is currently reviewing
//             your request. You will receive an email notification regarding
//             the status of your inquiry shortly. We appreciate your
//             patience and look forward to assisting you.
//           </p>
//           <div className="flex items-center justify-center pt-6">
//             <Link
//               href="/submit"
//               className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-[#9333ea]/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
//             >
//               <span className="relative text-base font-semibold text-primary dark:text-white">
//                 close
//               </span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   </>
// </div> */}
//       {/* Modal content */}
//     </Modal>
//   );
// }

import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useState } from "react";

export default function SuccessModel({
  setFormSubmitSuccess,
  formSubmitSuccess,
}: any) {
  // let [isOpen, setIsOpen] = useState(true);

  // function closeModal() {
  //   setIsOpen(false);
  // }

  // function openModal() {
  //   setIsOpen(true);
  // }

  return (
    <>
      <Transition appear show={formSubmitSuccess} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setFormSubmitSuccess(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex items-center h-[320px] space-x-2">
                    <>
                      <div
                        id="successModal"
                        className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"
                      >
                        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                          {/* Modal content */}
                          <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                            <Link
                              href={"/submit"}
                              type="button"
                              className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                              data-modal-toggle="successModal"
                            >
                              <svg
                                aria-hidden="true"
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="sr-only">Close modal</span>
                            </Link>

                            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
                              <svg
                                aria-hidden="true"
                                className="w-8 h-8 text-green-500 dark:text-green-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="sr-only">Success</span>
                            </div>
                            <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                              Successfully removed product.
                            </p>
                            <p className="text-gray-400">
                              Thank you for your submission. Our team is
                              currently reviewing your request. You will receive
                              an email notification regarding the status of your
                              inquiry shortly. We appreciate your patience and
                              look forward to assisting you.
                            </p>
                            <div className="flex items-center justify-center pt-6">
                              <button
                                onClick={() => setFormSubmitSuccess(false)}
                                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-[#9333ea]/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
                              >
                                <span className="relative text-base font-semibold text-primary dark:text-white">
                                  close
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
