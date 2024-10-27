/* eslint-disable @next/next/no-img-element */
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import LogoutLink from "./LogoutLink";
import Link from "next/link";

export default async function LoggedInHeader() {
	const session = await getServerSession(authOptions);
	const user = session?.user;

	return (
		<header className="flex items-center justify-between w-full px-8 py-4">
			<Link href="/" className="text-lg font-bold mr-auto">
				Power Grader
			</Link>
			<div className="flex items-center gap-2 p-1 rounded-full">
				<img
					src={user?.image}
					alt="Profile Image"
					className="h-12 rounded-full"
				/>
				<div className="pr-4 leading-5">
					<h3 className="font-bold">{user?.name}</h3>
					<LogoutLink />
				</div>
			</div>
		</header>
	);
}
