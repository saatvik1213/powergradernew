export default function Classbox({ className, onClick, isSelected }) {
	return (
		<div
			className={`p-6 bg-white shadow-md rounded-lg border text-center cursor-pointer transition-all duration-200 ${
				isSelected
					? "border-blue-500 ring-2 ring-blue-300"
					: "border-gray-200"
			}`}
			onClick={onClick}
		>
			<h2 className="text-xl font-semibold mb-4">{className}</h2>
			View Details
		</div>
	);
}
