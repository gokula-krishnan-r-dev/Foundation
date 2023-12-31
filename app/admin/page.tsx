"use client";
import ListApp from "@/components/ListApp/ListApp";
import { endPoint } from "@/components/dev";
import axios from "axios";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const Admin = () => {
  const { setTheme } = useTheme();
  const [submissions, setSubmissions] = useState([]);
  const [submissionCount, setSubmissionCount] = useState(0);
  const [approvedSubmissionCount, setApprovedSubmissionCount] = useState(0);
  const [application, setApplication] = useState<any>();
  useEffect(() => {
    setTheme("light");
    // Fetch submissions
    axios
      .get(`${endPoint}/submit-form?key=f70c7525463c`) // Replace with your API endpoint
      .then((response) => {
        const fetchedSubmissions = response.data;
        setSubmissions(fetchedSubmissions); // Store submissions in state
        setSubmissionCount(fetchedSubmissions.length); // Set total submission count
        setApplication(response.data);
        const approvedSubmissions = fetchedSubmissions.filter(
          (submission: any) => submission.status === "approved"
        );
        setApprovedSubmissionCount(approvedSubmissions.length); // Set count of approved submissions // Set total submission count
        // Set submission count based on fetched data length
      })
      .catch((error) => {
        console.error("Error fetching submissions:", error);
      });
  }, [setTheme]); // Empty dependency array runs this effect only once on mount
  const navigationLinks = [
    { label: "Mail", href: "/examples/mail" },
    { label: "Dashboard", href: "/examples/dashboard" },
    { label: "Cards", href: "/examples/cards" },
    { label: "Tasks", href: "/examples/tasks" },
    { label: "Playground", href: "/examples/playground" },
    { label: "Forms", href: "/examples/forms" },
    { label: "Music", href: "/examples/music" },
    { label: "Authentication", href: "/examples/authentication" },
    // Add more navigation links as needed
  ];
  const [tab, setTab] = useState("Application");

  return (
    <div className="px-16">
      <section className=" flex items-center justify-between">
        <div className="">
          <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
            <div className="!z-5 relative flex  bg-white border px-8 shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none !flex-row flex-grow items-center rounded-[20px]">
              <div className=" flex h-[90px] w-auto flex-row items-center">
                <div className="rounded-full bg-blue-100 p-3 dark:bg-white-700">
                  <span className="flex items-center text-brand-500 dark:text-white">
                    <svg
                      stroke="black"
                      fill="black"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      className="h-7 w-7"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                <p className="font-dm text-sm font-medium text-gray-600">
                  Number of Submissions
                </p>
                <h4 className="text-xl font-bold text-navy-700 text-black dark:text-black">
                  {submissionCount}
                </h4>
              </div>
            </div>
            <div className="!z-5 relative flex  bg-white border px-8 shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none !flex-row flex-grow items-center rounded-[20px]">
              <div className=" flex h-[90px] w-auto flex-row items-center">
                <div className="rounded-full bg-blue-100 p-3 dark:bg-white-700">
                  <span className="flex items-center text-brand-500 dark:text-white">
                    <svg
                      stroke="black"
                      fill="black"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      className="h-7 w-7"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                <p className="font-dm text-sm font-medium text-gray-600">
                  Number of Approved Submissions
                </p>
                <h4 className="text-xl font-bold text-navy-700 text-black dark:text-black">
                  {approvedSubmissionCount}
                </h4>
              </div>
            </div>
            <div className="!z-5 relative flex  bg-white border px-8 shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none !flex-row flex-grow items-center rounded-[20px]">
              <div className=" flex h-[90px] w-auto flex-row items-center">
                <div className="rounded-full bg-blue-100 p-3 dark:bg-white-700">
                  <span className="flex items-center text-brand-500 dark:text-white">
                    <svg
                      stroke="black"
                      fill="black"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      className="h-7 w-7"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                <p className="font-dm text-sm font-medium text-gray-600">
                  Number of Application
                </p>
                <h4 className="text-xl font-bold text-navy-700 text-black dark:text-black">
                  {submissionCount}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <ListApp />
      </section>
    </div>
  );
};

export default Admin;
