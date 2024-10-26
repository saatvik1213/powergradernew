"use client";

import { useState } from "react";
import Image from "next/image";
import LoginPage from "./login/layout"; // Import the LoginPage component

export default function HomePage() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  return (
    <div className="flex flex-col items-center text-center ">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4">
        <div className="text-lg font-bold">PowerGrader</div>
        <div className="space-x-6">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
          <button
            className="px-4 py-2 font-semibold text-white bg-blue-600 rounded"
            onClick={handleLoginClick}
          >
            Login
          </button>
          <button className="px-4 py-2 font-semibold border border-blue-600 text-blue-600 rounded">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <h1 className="text-4xl font-bold mb-4">Introducing PowerGrader</h1>
      <p className="text-lg max-w-md mb-6">
        PowerGrader harnesses the power of AI to automate the grading process, helping educators save time and boost grading accuracy for student files.
      </p>
      <button className="px-6 py-2 font-semibold text-white bg-blue-600 rounded">
        Get Started
      </button>

      {/* Hero Image */}
      <Image
        src="/hero.svg"
        width={800}
        height={600}
        alt="Hero Image"
        className="rounded-lg"
      />

      {/* Login Modal */}
      {showLogin && <LoginPage onClose={handleCloseLogin} />}
    </div>
  );
}
