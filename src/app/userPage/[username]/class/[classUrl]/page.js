import { getServerSession } from "next-auth";
import { authOptions } from "../../../../api/auth/[...nextauth]/route";

export default async function AssignmentsPage() {
	const session = await getServerSession(authOptions);
	const username = session?.user.name;
	const id = session?.user.email;

	const assignments = [
		{
			id: 1,
			name: "Assignment 1",
			grade: "A",
		},
		{
			id: 2,
			name: "Assignment 2",
			grade: "B+",
		},
		{
			id: 3,
			name: "Assignment 3",
			grade: "Pending",
		},
	];

	return (
		<div className="p-6">
			<h1 className="text-2xl font-semibold mb-4">Assignments</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{assignments.map((assignment) => (
					<div
						key={assignment.id}
						className="bg-white shadow-lg rounded-lg p-5 flex flex-col justify-between space-y-4"
					>
						<div>
							<h2 className="text-lg font-semibold text-gray-800">
								{assignment.name}
							</h2>
						</div>
						<div className="flex items-center justify-between space-x-2">
							{/* View Rubrics Icon */}
							<button
								type="button"
								className="text-blue-500 hover:text-blue-700"
								aria-label="View Rubrics"
							>
								📄 {/* Replace with an SVG icon if preferred */}
							</button>
							{/* Grade */}
							<span className="text-gray-600 text-sm">
								Grade: {assignment.grade}
							</span>
							{/* Upload Button */}
							<button
								type="button"
								className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600"
							>
								Upload
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
export default function ClassPage() {
    const { classUrl } = params;

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">{classUrl}</h1>
            <p className="text-lg text-gray-700 mb-6">
                Welcome to the {classUrl} class page. Here you’ll find information about assignments, students, resources, and grades.
            </p>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Class Description</h2>
                <p className="text-gray-600">
                    This is where a detailed description of the class would go, covering topics, goals, and key information about {classUrl}.
                </p>
            </section>

            {/* Additional sections can be added here */}
        </div>
    );
}
