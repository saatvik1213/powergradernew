import localFont from "next/font/local";
import "./globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Navbar from "./components/Navbar";
import LoggedInHeader from "./components/LoggedInHeader";
import GraderPage from "../app/graderPage/[graderPage]/page";
import UserPage from "../app/userPage/[userPage]/page";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata = {
	title: "PowerGrader",
	description: "Automate the grading process with PowerGrader",
};
async function getuserid(useremail) {
	fetch("http://localhost:5000/get_user_id?email=" + useremail, {
		method: "GET",
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			return data.user;
		});
}

async function checkgrader(userid) {
	try {
		const response = await fetch(
			`http://localhost:5000/grader?id=${userid}`,
			{
				method: "GET",
			}
		);

		if (!response.ok)
			throw new Error(`HTTP error! Status: ${response.status}`);

		const data = await response.json();
		console.log("Grader status:", data.grader);
		return data.grader === true; // Returns true if grader, false otherwise
	} catch (error) {
		console.error("Error checking grader status:", error);
		return false; // Return false if there was an error
	}
}

export default async function RootLayout({ children }) {
	const session = await getServerSession(authOptions);
	const user = session?.user;
	const username = user?.name;
	const email = user?.email;

	var role = "user";
	const userid = await getuserid(email);
	console.log(await userid);
	var grader = await checkgrader(userid);
	if (grader == true) {
		console.log("Grader");
		role = "grader";
	}
	console.log(role);
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{session && (
					<div className="">
						<LoggedInHeader />
						{role === "grader" && <GraderPage />}
						{role === "user" && <UserPage username={username} userid={userid}/>}
					</div>
				)}
				{!session && (
					<div className="">
						<Navbar />
						{children}
					</div>
				)}
			</body>
		</html>
	);
}
