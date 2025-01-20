"use client";
import { useState } from "react";
import Link from "next/link";

const Signin = () => {
  const [email, setEmail] = useState("");

  const loginData = (e) => {
    e.preventDefault();
    
  };

  return (
    <>
      <div className="min-h-screen flex justify-center bg-gray-100 items-center ">
        <form
          onSubmit={loginData}
          className="w-full max-w-md bg-white shadow-md rounded-lg p-6"
        >
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Sign In
          </h1>
          <div className="space-y-4">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-yellow-500 focus:outline-none"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-yellow-500 focus:outline-none"
            />
          </div>
          <div className="flex justify-between items-center mt-4">
            <Link
              href="/pages/forget_password"
              className="text-sm text-red-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300"
          >
            Sign In
          </button>
          <p className="text-sm text-center text-gray-600 mt-4">
            Don't have an account?{" "}
            <Link
              href="/pages/signup"
              className="text-yellow-500 font-semibold hover:underline"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Signin;
