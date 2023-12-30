import React from "react";
import { ModeToggle } from "../ThemeMode/ModeToggle";

const Footer = () => {
  return (
    <footer className="bg-[#FAFAFA] pb-[env(safe-area-inset-bottom)] relative dark:bg-[#111111]">
      <div className="absolute top-0 h-12 w-full -translate-y-full bg-gradient-to-t from-[#FAFAFA] to-transparent dark:from-black pointer-events-none" />
      <div className="mx-auto max-w-[90rem] py-2 px-4 flex gap-2 flex">
        <ModeToggle />
      </div>
      <hr className="dark:border-neutral-800" />
      <div className="mx-auto max-w-[90rem] py-12 flex justify-center md:justify-center text-black dark:text-white pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]">
        <div aria-labelledby="footer-heading" className="w-full">
          <h2 className="sr-only" id="footer-heading">
            Footer
          </h2>
          <div className="w-full py-8 mx-auto">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="grid grid-cols-1 gap-8 xl:col-span-2">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 md:gap-8">
                  <div className="mt-12 md:!mt-0">
                    <h3 className="text-sm text-black dark:text-white">
                      Resources
                    </h3>
                    <ul className="mt-4 space-y-1.5 list-none ml-0">
                      <li>
                        <a
                          className="text-sm text-[#666666] dark:text-[#888888] no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition"
                          href="/blog"
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-sm text-[#666666] dark:text-[#888888] no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition"
                          href="https://github.com/vercel/turbo/releases"
                        >
                          Releases
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-12 md:!mt-0">
                    <h3 className="text-sm text-black dark:text-white">
                      Turborepo
                    </h3>
                    <ul className="mt-4 space-y-1.5 list-none ml-0">
                      <li>
                        <a
                          className="text-sm text-[#666666] dark:text-[#888888] no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition"
                          href="/repo/docs"
                        >
                          Documentation
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-sm text-[#666666] dark:text-[#888888] no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition"
                          href="/repo/docs/reference/command-line-reference"
                        >
                          API Reference
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-sm text-[#666666] dark:text-[#888888] no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition"
                          href="/repo/docs/faq"
                        >
                          FAQ
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-12 md:!mt-0">
                    <h3 className="text-sm text-black dark:text-white">
                      Turbopack
                    </h3>
                    <ul className="mt-4 space-y-1.5 list-none ml-0">
                      <li>
                        <a
                          className="text-sm text-[#666666] dark:text-[#888888] no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition"
                          href="/pack/docs"
                        >
                          Documentation
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-sm text-[#666666] dark:text-[#888888] no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition"
                          href="/pack/docs/features"
                        >
                          Features
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-12 md:!mt-0">
                    <h3 className="text-sm text-black dark:text-white">
                      Company
                    </h3>
                    <ul className="mt-4 space-y-1.5 list-none ml-0">
                      <li>
                        <a
                          className="text-sm text-[#666666] dark:text-[#888888] no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition"
                          href="https://vercel.com"
                        >
                          Vercel
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-sm text-[#666666] dark:text-[#888888] no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition"
                          href="https://vercel.com/oss?utm_source=turbo.build&utm_medium=referral&utm_campaign=footer-ossLink"
                        >
                          Open Source Software
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-sm text-[#666666] dark:text-[#888888] no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition"
                          href="https://vercel.com/solutions/turborepo?utm_source=turbo.build&utm_medium=referral&utm_campaign=footer-enterpriseLink"
                        >
                          Contact Sales
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-sm text-[#666666] dark:text-[#888888] no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition"
                          href="https://x.com/vercel"
                        >
                          X
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-12 md:!mt-0">
                    <h3 className="text-sm text-black dark:text-white">
                      Legal
                    </h3>
                    <ul className="mt-4 space-y-1.5 list-none ml-0">
                      <li>
                        <a
                          className="text-sm text-[#666666] dark:text-[#888888] no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition"
                          href="/privacy"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-sm text-[#666666] dark:text-[#888888] no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition"
                          href="/terms"
                        >
                          Terms of Service
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-12 md:!mt-0">
                    <h3 className="text-sm text-black dark:text-white">
                      Support
                    </h3>
                    <ul className="mt-4 space-y-1.5 list-none ml-0">
                      <li>
                        <a
                          className="text-sm text-[#666666] dark:text-[#888888] no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition"
                          href="https://github.com/vercel/turbo"
                        >
                          GitHub
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-sm text-[#666666] dark:text-[#888888] no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition"
                          href="https://turbo.build/discord"
                        >
                          Discord
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-12 xl:!mt-0">
                <h3 className="text-sm text-black dark:text-white">
                  Subscribe to our newsletter
                </h3>
                <p className="mt-4 text-sm text-gray-600 dark:text-[#888888]">
                  Subscribe to the Turbo newsletter and stay updated on new
                  releases and features, guides, and case studies.
                </p>
                <form className="mt-4 sm:flex sm:max-w-md">
                  <label className="sr-only" htmlFor="email-address">
                    Email address
                  </label>
                  <input
                    autoComplete="email"
                    className="border-[#666666] dark:border-[#888888] w-full min-w-0 px-4 py-2 text-base text-gray-900 placeholder-gray-500 bg-white border rounded-md appearance-none dark:text-white sm:text-sm dark:bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:border-white focus:placeholder-gray-400"
                    id="email-address"
                    name="email-address"
                    placeholder="you@example.com"
                    type="email"
                    defaultValue=""
                  />
                  <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button
                      className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-black border border-transparent rounded-md dark:bg-white dark:text-black sm:text-sm betterhover:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-white dark:betterhover:hover:bg-gray-300"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="pt-8 mt-8 sm:flex sm:items-center sm:justify-between">
              <div>
                <a
                  className="text-current"
                  href="https://vercel.com?utm_source=turbo.build&utm_medium=referral&utm_campaign=footer-logoLink"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="vercel.com homepage"
                >
                  <svg fill="none" height={20} viewBox="0 0 283 64">
                    <title>Vercel</title>
                    <path
                      d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <p className="mt-4 text-xs text-gray-500 dark:text-[#888888]">
                  © {/* */}2023{/* */} Vercel, Inc. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
