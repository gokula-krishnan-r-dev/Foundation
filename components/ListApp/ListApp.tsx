import axios from "axios";
import React, { useEffect, useState } from "react";
import { endPoint } from "../dev";
import { ModelDetails } from "./ModelDetails";
import { HoverCardT } from "./HoverCard";

const ListApp = () => {
  const [application, setApplication] = useState<any>();
  useEffect(() => {
    // Fetch submissions
    axios
      .get(`${endPoint}/submit-form?key=f70c7525463c`) // Replace with your API endpoint
      .then((response) => {
        const fetchedSubmissions = response.data;
        setApplication(response.data);
      })
      .catch((error) => {
        console.error("Error fetching submissions:", error);
      });
  }, [setApplication]);
  const [openDetails, setOpenDetails] = useState<any>(null);

  return (
    <>
      <div className="!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none w-full h-full px-6 pb-6 sm:overflow-x-auto">
        <div className="relative  flex items-center justify-between pt-6">
          <div className="text-xl font-bold text-navy-700 dark:text-white">
            Application
          </div>
        </div>
        <div className="mt-8 overflow-x-scroll xl:overflow-hidden">
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&_tr]:border-b">
                <tr className="border-b transition-colors hover:bg-muted/50  data-[state=selected]:bg-muted">
                  <th
                    className="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"
                    colSpan={1}
                  >
                    <div className="">ApplicationID</div>
                  </th>
                  <th
                    className="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"
                    colSpan={1}
                  >
                    <div className="flex items-center space-x-2">
                      <button
                        className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-md px-3 text-xs -ml-3 h-8 data-[state=open]:bg-accent"
                        type="button"
                        id="radix-:rlf:"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-state="closed"
                      >
                        <span>Title</span>
                        <svg
                          width={15}
                          height={15}
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-2 h-4 w-4"
                        >
                          <path
                            d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </th>
                  <th
                    className="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"
                    colSpan={1}
                  >
                    <div className="flex items-center space-x-2">
                      <button
                        className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-md px-3 text-xs -ml-3 h-8 data-[state=open]:bg-accent"
                        type="button"
                        id="radix-:rlh:"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-state="closed"
                      >
                        <span>Status</span>
                        <svg
                          width={15}
                          height={15}
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-2 h-4 w-4"
                        >
                          <path
                            d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </th>
                  <th
                    className="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"
                    colSpan={1}
                  >
                    <div className="flex items-center space-x-2">
                      <button
                        className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-md px-3 text-xs -ml-3 h-8 data-[state=open]:bg-accent"
                        type="button"
                        id="radix-:rlj:"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-state="closed"
                      >
                        <span>Time</span>
                        <svg
                          width={15}
                          height={15}
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-2 h-4 w-4"
                        >
                          <path
                            d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </th>
                  <th
                    className="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"
                    colSpan={1}
                  >
                    Email
                  </th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                {application?.map((value: any) => {
                  return (
                    <tr
                      key={value._id}
                      onClick={() => setOpenDetails(value._id)}
                      className="border-b w-full transition-colors cursor-pointer hover:bg-gray-200/50 data-[state=selected]:bg-muted"
                      data-state="false"
                    >
                      {value._id === openDetails && (
                        <ModelDetails
                          status={value.status}
                          id={value._id}
                          email={value.email}
                          Open={value._id === openDetails}
                          submission={value}
                          setOpenDetails={setOpenDetails}
                        />
                      )}
                      <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                        <div className="w-[80px]">{value.applicationId}</div>
                      </td>
                      <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                        <div className="flex space-x-2">
                          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                            {value.projectTitle}
                          </div>
                          <span className="max-w-[500px] truncate font-medium">
                            {value.projectDescription}
                          </span>
                        </div>
                      </td>
                      <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                        <div className="flex w-[100px] items-center">
                          {value.status === "approved" && (
                            <>
                              <svg
                                width={15}
                                height={15}
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 24 24"
                                className="text-green-500 mr-2 "
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                              </svg>
                              <span>{value.status}</span>
                            </>
                          )}
                          {value.status === "pending" && (
                            <>
                              <svg
                                width={15}
                                height={15}
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mr-2 h-4 w-4 text-muted-foreground"
                              >
                                <path
                                  d="M5.49998 0.5C5.49998 0.223858 5.72383 0 5.99998 0H7.49998H8.99998C9.27612 0 9.49998 0.223858 9.49998 0.5C9.49998 0.776142 9.27612 1 8.99998 1H7.99998V2.11922C9.09832 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.058 3.05806L11.858 2.25806C12.1021 2.01398 12.4978 2.01398 12.7419 2.25806C12.986 2.50214 12.986 2.89786 12.7419 3.14194L11.967 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.49998 14.9C3.96535 14.9 1.09998 12.0346 1.09998 8.49998C1.09998 5.13362 3.69904 2.3743 6.99998 2.11922V1H5.99998C5.72383 1 5.49998 0.776142 5.49998 0.5ZM2.09998 8.49998C2.09998 5.51764 4.51764 3.09998 7.49998 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.49998 13.9C4.51764 13.9 2.09998 11.4823 2.09998 8.49998ZM7.99998 4.5C7.99998 4.22386 7.77612 4 7.49998 4C7.22383 4 6.99998 4.22386 6.99998 4.5V9.5C6.99998 9.77614 7.22383 10 7.49998 10C7.77612 10 7.99998 9.77614 7.99998 9.5V4.5Z"
                                  fill="currentColor"
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span>In Process</span>
                            </>
                          )}
                          {value.status === "rejected" && (
                            <>
                              <span>Rejected</span>
                            </>
                          )}
                        </div>
                      </td>
                      <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                        <div className="flex items-center">
                          <svg
                            width={15}
                            height={15}
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-2 h-4 w-4 text-muted-foreground"
                          >
                            <path
                              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                              fill="currentColor"
                              fillRule="evenodd"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{value.createdDate}</span>
                        </div>
                      </td>
                      <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                        <p>{value.email}</p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListApp;
