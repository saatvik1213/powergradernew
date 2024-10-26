"use client"
import { useRouter } from "next/navigation";
import { client } from "../database";


import react, {useState} from 'react'
export default function LoginPage({ onClose }) {
  const router = useRouter();
  const handleLogin = (e) => {
    e.preventDefault();
    try {
      // Run a SELECT query on the users table
      const result = client.query('SELECT * FROM users where user_id == $1',[id]);

      user = result.rows[0]
      var username = user.id;
      if (user.role === "Grader"){
        router.push(`/userPage/${username}`);
      }
      // Respond with the result rows
      // if (result.rows.length === 0) {
      //   return res.status(404).json({ error: 'User not found' });
      // }
    
      const user = result.rows[0];
    } 
    catch (error) {
      console.error('Database Error:', error);
      // res.status(500).json({ error: 'Database retrieval error' });
    }
    

    // Perform login logic here (e.g., authentication)
     // Assume the username is "johndoe"// needs to be pulled from database 
    // After successful login, navigate to [userPage]
 
    onClose(); // Close the login modal if needed
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col items-center justify-center w-full max-w-md p-8 bg-white rounded shadow-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
        </button>

        <h1 className="text-3xl font-bold mb-6">Login to PowerGrader</h1>

        <form onSubmit={handleLogin} className="w-full">
          <div className="mb-4">
            <label htmlFor="email" className="block text-left text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-left text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your password"
            />
          </div>


          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-gray-600">
          Don’t have an account? <a href="/signup" className="text-blue-600">Sign Up</a>
        </p>
       
      </div>
    </div>
  );
}
