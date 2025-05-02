'use client';
import React, { useState } from 'react';

export default function SignupPage() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    username: '',
  });

  const onSignup = async () => {
    // Signup logic goes here
    console.log(user);
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>
      <div className='w-full max-w-md bg-white shadow-xl rounded-2xl p-8 space-y-6'>
        <h1 className='text-2xl font-bold text-center text-gray-800'>
          Create an Account
        </h1>
        <div className='space-y-4'>
          {/* Username */}
          <div>
            <label
              htmlFor='username'
              className='block text-xl  text-gray-700 font-bold'
            >
              Username
            </label>
            <input
              type='text'
              id='username'
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className='mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-3 py-2'
              placeholder='username'
            />
          </div>

          <div>
            <label
              htmlFor='email'
              className='block text-xl  text-gray-700 font-bold'
            >
              Email Address
            </label>
            <input
              type='email'
              id='email'
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className='mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-3 py-2'
              placeholder='email'
            />
          </div>

          <div>
            <label
              htmlFor='password'
              className='block text-xl  text-gray-700 font-bold'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className='mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-3 py-2'
              placeholder='password'
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={onSignup}
          className='w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition'
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
