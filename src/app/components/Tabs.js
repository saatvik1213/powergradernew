// "use client";
// import { useState } from "react";
// import GraderPage from "../graderPage/[graderPage]";
// import UserPage from "../userPage/[userPage]/[userPage]";
// import { useRouter } from "next/navigation";

// export default function Tabs({ role, username }) {
// 	const [activeTab, setActiveTab] = useState("Grader");
// 	const router = useRouter();

// 	if (role === "grader") {
// 		router.push("/graderPage/[graderPage]");
// 	}

// 	return (
// 		<div>
// 			{/* <div className="flex space-x-4 border-b">
// 				<button
// 					className={`px-4 py-2 ${
// 						activeTab === "Grader"
// 							? "text-blue-500 border-b-2 border-blue-500"
// 							: "text-gray-600"
// 					}`}
// 					onClick={() => setActiveTab("Grader")}
// 				>
// 					Grader
// 				</button>
// 				<button
// 					className={`px-4 py-2 ${
// 						activeTab === "User"
// 							? "text-blue-500 border-b-2 border-blue-500"
// 							: "text-gray-600"
// 					}`}
// 					onClick={() => setActiveTab("User")}
// 				>
// 					User
// 				</button>
// 			</div> */}

// 			{/* <div className="p-4">
// 				{role === "grader" && router.push("/graderPage")}
// 				{role === "user" && <UserPage username={username} />}
// 			</div> */}
// 		</div>
// 	);
// }
