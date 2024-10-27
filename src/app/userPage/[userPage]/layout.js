// "use client";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function Layout({ children }) {
//   const router = useRouter();
//   const username = router.query?.username; // Use optional chaining to safely access username

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col">
//       {/* Navbar */}
//       <nav className="flex items-center justify-between p-6 bg-blue-600 text-white">
//         <div className="text-lg font-bold">
//           {username ? `Welcome, ${username}` : "Loading..."}
//         </div>
//         <Link href="/" className="font-semibold hover:underline">Home</Link>
//       </nav>
      
//       {/* Main Content */}
//       <main className="flex flex-col items-center mt-8">{children}</main>
//     </div>
//   );
// }
