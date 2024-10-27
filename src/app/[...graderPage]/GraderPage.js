"use client";
import { useState } from "react";
import Swal from "sweetalert2";

export default function GraderPage() {
	const [assignments, setAssignments] = useState([]);
	const [newAssignmentName, setNewAssignmentName] = useState("");
	const [rubrics, setRubrics] = useState([]);
	const [maxAssignmentScore, setMaxAssignmentScore] = useState(100); // Default max score for an assignment
	const [isEditing, setIsEditing] = useState(false);
	const [currentEditIndex, setCurrentEditIndex] = useState(null);

	const totalRubricScore = rubrics.reduce(
		(sum, rubric) => sum + rubric.maxScore,
		0
	);

	const handleAddAssignment = () => {
		if (totalRubricScore !== maxAssignmentScore) {
			Swal.fire({
				icon: "error",
				title: "Score Mismatch",
				text: `Total rubric score (${totalRubricScore}) must equal max assignment score (${maxAssignmentScore}).`,
			});
			return;
		}

		const assignment = {
			name: newAssignmentName,
			rubrics,
			maxScore: maxAssignmentScore,
		};
		setAssignments([...assignments, assignment]);
		setNewAssignmentName("");
		setRubrics([]); // Reset rubrics after creating the assignment
	};

	const handleAddRubric = () => {
		setRubrics([
			...rubrics,
			{ id: rubrics.length + 1, description: "", maxScore: 0 },
		]);
	};

	const handleRubricChange = (index, field, value) => {
		const updatedRubrics = [...rubrics];
		updatedRubrics[index][field] = value;
		setRubrics(updatedRubrics);
	};

	const handleSetMaxScore = () => {
		Swal.fire({
			title: "Set Maximum Score for Assignment",
			input: "number",
			inputValue: maxAssignmentScore,
			inputAttributes: {
				min: 1,
				max: 1000,
			},
			showCancelButton: true,
			confirmButtonText: "Set Score",
			preConfirm: (value) => {
				const parsedValue = parseInt(value, 10);
				if (isNaN(parsedValue) || parsedValue <= 0) {
					Swal.showValidationMessage(
						"Please enter a valid number greater than 0"
					);
				} else {
					return parsedValue;
				}
			},
		}).then((result) => {
			if (result.isConfirmed) {
				setMaxAssignmentScore(result.value);
			}
		});
	};

	const handleEditAssignment = (index) => {
		const assignment = assignments[index];
		setNewAssignmentName(assignment.name);
		setRubrics([...assignment.rubrics]);
		setMaxAssignmentScore(assignment.maxScore);
		setIsEditing(true);
		setCurrentEditIndex(index);
	};

	const handleSaveEdit = () => {
		if (totalRubricScore !== maxAssignmentScore) {
			Swal.fire({
				icon: "error",
				title: "Score Mismatch",
				text: `Total rubric score (${totalRubricScore}) must equal max assignment score (${maxAssignmentScore}).`,
			});
			return;
		}

		const updatedAssignments = [...assignments];
		updatedAssignments[currentEditIndex] = {
			name: newAssignmentName,
			rubrics,
			maxScore: maxAssignmentScore,
		};
		setAssignments(updatedAssignments);

		setNewAssignmentName("");
		setRubrics([]);
		setIsEditing(false);
		setCurrentEditIndex(null);
	};

	return (
		<div>
			<h2 className="text-2xl font-semibold mb-4">
				{isEditing ? "Edit Assignment" : "Create a New Assignment"}
			</h2>
			<input
				type="text"
				placeholder="Assignment Name"
				value={newAssignmentName}
				onChange={(e) => setNewAssignmentName(e.target.value)}
				className="border p-2 mb-4 w-full"
			/>

			<button
				onClick={handleSetMaxScore}
				className="bg-gray-500 text-white px-4 py-2 mb-4"
			>
				Set Max Score (Current: {maxAssignmentScore})
			</button>

			<button
				onClick={handleAddRubric}
				className="bg-blue-500 text-white px-4 py-2 mb-4 ml-2"
			>
				Add Rubric
			</button>

			<div className="space-y-2">
				{rubrics.map((rubric, index) => (
					<div
						key={rubric.id}
						className="flex items-center space-x-4"
					>
						<input
							type="text"
							placeholder="Rubric Description"
							value={rubric.description}
							onChange={(e) =>
								handleRubricChange(
									index,
									"description",
									e.target.value
								)
							}
							className="border p-2 w-1/2"
						/>
						<input
							type="number"
							placeholder="Max Score"
							value={rubric.maxScore}
							onChange={(e) =>
								handleRubricChange(
									index,
									"maxScore",
									parseInt(e.target.value)
								)
							}
							className="border p-2 w-1/4"
						/>
					</div>
				))}
			</div>

			<p className="text-gray-600 mt-2">
				Total Rubric Score: {totalRubricScore} / {maxAssignmentScore}
			</p>

			{isEditing ? (
				<button
					onClick={handleSaveEdit}
					className="bg-green-500 text-white px-4 py-2 mt-4"
				>
					Save Changes
				</button>
			) : (
				<button
					onClick={handleAddAssignment}
					className="bg-green-500 text-white px-4 py-2 mt-4"
					disabled={newAssignmentName === ""}
				>
					Create Assignment
				</button>
			)}

			<h3 className="text-xl font-semibold mt-8">Existing Assignments</h3>
			<ul className="space-y-4">
				{assignments.map((assignment, index) => (
					<li key={index} className="border p-4">
						<div className="flex justify-between items-center">
							<h4 className="font-semibold">{assignment.name}</h4>
							<button
								onClick={() => handleEditAssignment(index)}
								className="bg-yellow-500 text-white px-4 py-2"
							>
								Edit
							</button>
						</div>
						<ul className="mt-2">
							{assignment.rubrics.map((rubric, rIndex) => (
								<li
									key={rIndex}
									className="flex justify-between"
								>
									<span>{rubric.description}</span>
									<span>Max Score: {rubric.maxScore}</span>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	);
}
