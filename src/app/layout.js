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

async function getuserid(useremail) {
	fetch("http://localhost:5000/get_user_id?email=" + userid, {
		method: "GET"
	
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			return data;
			
		});
}
async function createClass(classname, userid) {
    const response = await fetch("http://localhost:5000/class", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: classname,
            admin: userid
        })
    });

    if (!response.ok) {
        console.error("Error:", response.statusText);
        return null;
    }

    const data = await response.json();
    console.log("Response data:", data);
    return data;
}

async function createuser(useremail, username, classid)
{
	fetch("http://localhost:5000/set_grader", {
		method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: username,
            email: useremail,
			classid: classid
        })
	
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			return data;
			
		});
}



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
	classid.id = await createClass("test", "1");
	createuser(email, username, classid);
	userid = await getuserid(email);
	const createClass = await createClass("test", userid);
	const role =  await checkgrader();
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{session && (
					<div className="">
						<LoggedInHeader />
						<Tabs role={role} username={username}/>
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
