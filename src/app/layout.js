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
    try {
        const response = await fetch(`http://localhost:5000/get_user_id?email=${encodeURIComponent(useremail)}`, {
            method: "GET"
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        return data.user; // Assuming `data.user` is the ID
    } catch (error) {
        console.error("Error fetching user ID:", error);
        return null; // Return null or handle the error as needed
    }
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
	var classid = await createClass("test", "1");
	classid = classid.id;
	const userid = await getuserid(email);
	console.log( await userid);
	const role =  await checkgrader(userid);
	console.log(role);
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
