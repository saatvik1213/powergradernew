import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import Classbox from "../../components/classess"; // Adjust path if necessary

export default async function UserPage() {
  const session = await getServerSession(authOptions);
  const username = session?.user.name;
  const id = session?.user.email;

  // Sample classes data (replace with actual data or fetch from DB)
  const classes = [
    { id: "math-101", name: "Math 101" },
    { id: "science-202", name: "Science 202" },
    { id: "history-303", name: "History 303" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        {username}&apos;s Classes
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((classItem) => (
          <Classbox key={classItem.id} className={classItem.name} />
        ))}
      </div>
    </div>
  );
}
