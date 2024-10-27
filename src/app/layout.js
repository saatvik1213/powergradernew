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
			return data;
		});
}

async function checkgrader(userid) {
	fetch("http://localhost:5000/grader?id=" + userid, {
		method: "GET",
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			if (data.role === "grader") {
				return "grader";
			} else {
				return "student";
				c;
			}
		});
}

export default async function RootLayout({ children }) {
	const session = await getServerSession(authOptions);
	const user = session?.user;
	const username = user?.name;
	const email = user?.email;

	const role = "user";
	// const role =  await checkgrader(await getuserid(email));
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{session && (
					<div className="">
						<LoggedInHeader />
						{role === "grader" && <GraderPage />}
						{role === "user" && <UserPage username={username} />}
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
