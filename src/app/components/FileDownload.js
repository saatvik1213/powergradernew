"use client"

import { useState } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase";

export default function FileDownload() {
	const [filePath, setFilePath] = useState("");
	const [downloadUrl, setDownloadUrl] = useState("");
	const [error, setError] = useState("");

	// Function to get the download URL for the file
	const handleDownload = async () => {
		if (!filePath) {
			setError("Please enter a file path.");
			return;
		}

		try {
			const fileRef = ref(storage, filePath);
			const url = await getDownloadURL(fileRef);
			setDownloadUrl(url);
			setError(""); // Clear any previous errors
		} catch (err) {
			setError(
				"File not found or you do not have permission to access it."
			);
			console.error("Error fetching download URL:", err);
		}
	};

	return (
		<div className="p-4 border border-gray-300 rounded-md">
			<input
				type="text"
				placeholder="Enter file path (e.g., uploads/filename.jpg)"
				value={filePath}
				onChange={(e) => setFilePath(e.target.value)}
				className="p-2 border border-gray-200 w-full mb-2"
			/>
			<button
				onClick={handleDownload}
				className="mt-2 p-2 bg-blue-500 text-white rounded"
			>
				Fetch Download Link
			</button>

			{downloadUrl && (
				<p className="mt-4">
					<a
						href={downloadUrl}
						download
						className="text-blue-600 underline"
					>
						Click here to download the file
					</a>
				</p>
			)}

			{error && <p className="text-red-500 mt-2">{error}</p>}
		</div>
	);
}
