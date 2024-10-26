"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

import {usePathname} from "next/navigation"
import { useEffect, useState } from "react";



export default function Layout({ children }) {
  const path = usePathname();
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Split the path and get the last segment as the username
    const parts = path.split("/");
    const user = parts[parts.length - 1];
    setUsername(user.charAt(0).toUpperCase() + user.slice(1)); // Capitalize the first letter if desired
  }, [path]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-6 bg-blue-600 text-white">
        <div className="text-lg font-bold">
          {username ? `Welcome, ${username}` : "Loading..."}
        </div>
        <Link href="/" className="font-semibold hover:underline">Home</Link>
      </nav>
      
      {/* Main Content */}
      <main className="flex flex-col items-center mt-8">{children}</main>
    </div>
  );
}
