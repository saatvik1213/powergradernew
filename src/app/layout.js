import localFont from "next/font/local";
import "./globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import UserPage from "./userPage/[username]/page";
import Navbar from "./components/Navbar";
import LoggedInHeader from "./components/LoggedInHeader";

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

export default async function RootLayout({ children }) {
	const session = await getServerSession(authOptions);

	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{session && (
					<div className="">
						<LoggedInHeader />
						<UserPage />
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
