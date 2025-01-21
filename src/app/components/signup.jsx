"use client"
import React, { useState } from "react";
import Link from "next/link";

const Signup = () => {

  const [name,setName] = useState('')
  const [phoneno,setPhoneno] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const signupData = (e) =>{
    e.preventDefault();

    try {
      console.log(name,email,phoneno,password);
      
    } catch (error) {
      console.error(error)
    }        
  }

  return (
    <div className="min-h-screen flex justify-center bg-gray-100 items-center ">
      <form onSubmit={signupData} className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Sign Up</h1>
        <div className="space-y-4">

          <input
            type="text"
            name="name"
            id="name"
            onChange={e=>setName(e.target.value)}
            value={name}
            placeholder="Full Name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-yellow-500 focus:outline-none"
          />

          <input
            type="tel"
            name="phone_no"
            id="phone_no"
            onChange={e=>setPhoneno(e.target.value)}
            value={phoneno}
            required
            placeholder="Phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-yellow-500 focus:outline-none"
          />

          <input
            type="email"
            name="email"
            id="email"
            onChange={e=>setEmail(e.target.value)}
            value={email}
            required
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-yellow-500 focus:outline-none"
          />

          <input
            type="password"
            name="password"
            id="password"
            onChange={e=>setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-yellow-500 focus:outline-none"
          />
          
        </div>
        <button
          type="submit"
          className="w-full mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300"
        >
          Sign Up
        </button>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link href="/pages/signin" className="text-yellow-500 font-semibold hover:underline">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
