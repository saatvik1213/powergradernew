"use client";
import { useState } from "react";
import Image from "next/image";
import LoginPage from "./login/layout"; // Import the LoginPage component
import SigninPage from "./signin/layout"; // Import the SigninPage component
async function getid(data) {
	try {
		const response = await fetch("http://localhost:5000/userid?" + data, {
			method: "GET",
		});
  
		if (!response.ok) {
			console.log("Failed to submit data:", response.statusText);
		}
  
		const result = await response.json(); // Parse the JSON response
		console.log("Response from server:", result);
		return result;
	} catch (error) {
		console.error("Error submitting data:", error);
	}
  }

export default function HomePage() {
	const [showLogin, setShowLogin] = useState(false);
	const [showSignin, setShowSignin] = useState(false);

	const handleLoginClick = () => {
		setShowLogin(true);
		
		setShowSignin(false); // Ensure Signin is closed when Login is open
	};

	const handleSigninClick = () => {
		setShowSignin(true);
		setShowLogin(false); // Ensure Login is closed when Signin is open
	};

	const handleCloseLogin = () => {
		setShowLogin(false);

	};

	const handleCloseSignin = () => {
		setShowSignin(false);
	};

	return (
		<div className="flex flex-col items-center text-center ">
			{/* Hero Section */}
			
			<h1 className="text-4xl font-bold mb-4">Introducing PowerGrader</h1>
			<p className="text-lg max-w-md mb-6">
				PowerGrader harnesses the power of AI to automate the grading
				process, helping educators save time and boost grading accuracy
				for student files.
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

			{/* Login and Signin Modals */}
			{showLogin && <LoginPage onClose={handleCloseLogin} />}
			{showSignin && <SigninPage onClose={handleCloseSignin} />}
		</div>
	);
}
