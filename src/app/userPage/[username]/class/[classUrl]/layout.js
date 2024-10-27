"use client";
import { useRouter, usePathname} from "next/navigation";
import Link from "next/link";
import { getServerSession } from "next-auth";

export  default async function ClassLayout() {
    console.log("heakjwjskda");
    const pathname = usePathname();
    const parts = pathname.split("/");
    const classUrl = decodeURIComponent(parts[parts.length - 1]); // "Math101"
    const username  = "bruh"
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800 text-white p-6">
                <h2 className="text-2xl font-bold mb-6">{classUrl}</h2>
                <nav className="space-y-4">
                    <Link href={`/userpage/${username}/class/${classUrl}/assignments`} className="block hover:bg-gray-700 p-2 rounded">
                        Assignments
                    </Link>
                    <Link href={`/userpage/${username}/class/${classUrl}/students`} className="block hover:bg-gray-700 p-2 rounded">
                        Students
                    </Link>
                    <Link href={`/userpage/${username}/class/${classUrl}/grades`} className="block hover:bg-gray-700 p-2 rounded">
                        Grades
                    </Link>
                    <Link href={`/userpage/${username}/class/${classUrl}/resources`} className="block hover:bg-gray-700 p-2 rounded">
                        Resources
                    </Link>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 bg-gray-100">
               
            </main>
        </div>
    );
}
