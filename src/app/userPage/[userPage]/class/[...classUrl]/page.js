export default function AssignmentsPage() {

	// Sample assignments data
	const assignments = [
		{ id: 1, name: "Assignment 1", grade: "A" },
		{ id: 2, name: "Assignment 2", grade: "B+" },
		{ id: 3, name: "Assignment 3", grade: "Pending" },
	];

	// Display data (replace this mockup with actual data fetch if needed)
	return (
		<div className="p-6">
			<h1 className="text-2xl font-semibold mb-4">{`${userPage}'s Assignments in ${classUrl}`}</h1>
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
							<button
								type="button"
								className="text-blue-500 hover:text-blue-700"
								aria-label="View Rubrics"
							>
								📄
							</button>
							<span className="text-gray-600 text-sm">
								Grade: {assignment.grade}
							</span>
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
