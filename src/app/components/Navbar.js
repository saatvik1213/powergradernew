"use client";
import { signIn } from "next-auth/react";

function Navbar() {
	return (
		<div>
			<nav className="flex items-center justify-between w-full px-8 py-4">
				<a className="text-lg font-bold mr-auto" href="#home">
					PowerGrader
				</a>
				<div className="space-x-6 flex">
					<button
						className="px-4 py-2 font-semibold text-white bg-blue-600 rounded"
						onClick={() => signIn("google")}
					>
						Student
					</button>
					<button className="px-4 py-2 font-semibold border border-blue-600 text-blue-600 rounded">
						Faculty
					</button>
				</div>
			</nav>
		</div>
	);
}
export default Navbar;
