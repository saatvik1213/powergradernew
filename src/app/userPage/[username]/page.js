// import { useRouter } from "next/navigation";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { Classbox } from "../../components/classes";

export default async function UserPage() {
  // const router = useRouter();
  const session = await getServerSession(authOptions);
  const username = session?.user.name;
  const id = session?.user.email;
  //const result = client.query('SELECT * FROM users where user_id == $1',[id]);

  // Sample classes data (replace with actual data)
  const classes = [
    <Classbox key="math-101" className="Math 101" />
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        {username}&apos;s Classes
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((classItem) => (
          <Link
          key={classItem.id}
          href={`/userpage/${username}/class/${classItem.id}`}
          className="p-4 bg-white shadow-md rounded-lg text-center hover:bg-blue-50"
        >
          <h2 className="text-xl font-semibold">{classItem.name}</h2>
          <p className="mt-2 text-blue-600">View Details</p>
        </Link>
        ))}
      </div>
    </div>
  );
}
