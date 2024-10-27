import Link from "next/link";

export default function Classbox({ className }) {
    const classUrl = className.toLowerCase().replace(/\s+/g, "-");

    return (
        <div className="p-6 bg-white shadow-md rounded-lg border border-gray-200 text-center">
            {/* Class Name */}
            <h2 className="text-xl font-semibold mb-4">{className}</h2>

            {/* View Details Link */}
            <Link href={`/class/${classUrl}`} className="text-blue-600 hover:underline">
                View Details
            </Link>
        </div>
    );
}
