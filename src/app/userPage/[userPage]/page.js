"use client";
import Classbox from "../../components/Classbox";
import { useState } from "react";

export default function UserPage({ username, userid }) {
	// GET using user_id
	const classes = [
		{ id: "101", name: "Math 101" },
		{ id: "202", name: "Science 202" },
		{ id: "303", name: "History 303" },
	];

	const [selectedClass, setSelectedClass] = useState(classes[0].id);

	const handleClassClick = (classId) => {
		setSelectedClass(classId); // Update state with selected class ID
		// GET assignments from selectedClass
	};

	// GET using selectedClass
	const assignments = [
		{ id: 1, class_id: "101", name: "Assignment 1", grade: "A" },
		{ id: 2, class_id: "101", name: "Assignment 2", grade: "B+" },
		{ id: 3, class_id: "101", name: "Assignment 3", grade: "Pending" },
	];

	return (
		<div className="w-full max-w-4xl mx-auto p-4">
			<h1 className="text-3xl font-bold mb-8 text-center">
				{username}&apos;s Classes
			</h1>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{classes.map((classItem) => (
					<Classbox
						key={classItem.id}
						className={classItem.name}
						onClick={() => handleClassClick(classItem.id)}
						isSelected={selectedClass === classItem.id}
					/>
				))}
			</div>

			<div className="p-6">
				<h1 className="text-2xl font-semibold mb-4">{`${username}'s Assignments in ${
					selectedClass
						? classes.find((c) => c.id === selectedClass)?.name
						: "Select a class"
				}`}</h1>
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
								{assignment.grade === "Pending" ? (
									<button
										type="button"
										className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600"
									>
										Upload
									</button>
								) : (
									<button
										type="button"
										className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600"
									>
										View
									</button>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
