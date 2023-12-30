"use client";
import { endPoint } from "@/components/dev";
import axios from "axios";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("edit");
  const router = useRouter();
  const [secretCode, setSecretCode] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!email || !password || !role || !secretCode) {
      toast.error("Please fill in all fields!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    try {
      const response = await axios.post(`${endPoint}/admin`, {
        email,
        password,
        role: role,
        secretCode: secretCode,
      });

      console.log(response, "response");

      if (response.status === 201) {
        toast.success(response.data.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        router.push("/admin");
      } else {
        console.error("Login failed");
        toast.error(response.data.error || "Login failed!", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    } catch (error) {
      toast.error("Something wrong while logging in!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  return (
    <>
      <div className="py-24 flex items-center px-12 justify-center h-screen mx-auto my-auto  ">
        {/* ... Your existing UI code ... */}
        <form className="space-y-6 w-[400px]" onSubmit={handleSubmit}>
          <div className="space-y-6">
            {/* Email input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  className="border rounded-xl px-3 py-2.5 w-full"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            {/* Password input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  className="border rounded-xl px-3 py-2.5 w-full"
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  // ... other input attributes
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Secret Code For SignIn
              </label>
              <div className="mt-2">
                <input
                  className="border rounded-xl px-3 py-2.5 w-full"
                  id="secretCode"
                  name="secretCode"
                  type="text"
                  autoComplete="secretCode"
                  value={secretCode}
                  onChange={(e) => setSecretCode(e.target.value)}
                  // ... other input attributes
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Admin Role
              </label>
              <div className="mt-2">
                <select
                  className="border rounded-xl px-3 py-2.5 w-full"
                  onChange={(e) => setRole(e.target.value)}
                  name="role"
                  id="role"
                >
                  <option value="view">View</option>
                  <option value="edit">edit</option>
                </select>
              </div>
            </div>
            {/* Submit button */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>{" "}
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
