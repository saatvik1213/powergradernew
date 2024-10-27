"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

function LogoutLink() {
	const router = useRouter();
	return (
		<button
			className="text-slate-500 hover:underline"
			onClick={() => {
				signOut(), router.push("/");
			}}
		>
			Logout &raquo;
		</button>
	);
}
export default LogoutLink;
