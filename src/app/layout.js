import localFont from "next/font/local";
import "./globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
// import UserPage from "./userPage/[username]/page";
import Navbar from "./components/Navbar";
import LoggedInHeader from "./components/LoggedInHeader";
import Tabs from "./components/Tabs";



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

async function checkgrader(userid) {
	fetch("http://localhost:5000/grader?id=" + userid, {
		method: "GET"
	
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			if (data.role === "grader") {
				return "grader";
			} else {
				return "student";
				c
			}
		});
}



export default async function RootLayout({ children }) {
	const session = await getServerSession(authOptions);
	const user = session?.user;
	const username = user?.name;
	const email = user?.email;
	
	
	const role =  await checkgrader("1");
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{session && (
					<div className="">
						<LoggedInHeader />
						<Tabs role={role} />
						{/* <UserPage /> */}
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
