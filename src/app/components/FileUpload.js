"use client"

import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase.js";

export default function FileUpload() {
	const [file, setFile] = useState(null);
	const [url, setUrl] = useState("");

	const handleFileChange = (e) => {
		setFile(e.target.files[0]);
	};

	const handleUpload = async () => {
		if (file) {
			const storageRef = ref(storage, `uploads/${file.name}`);
			await uploadBytes(storageRef, file);
			const downloadURL = await getDownloadURL(storageRef);
			setUrl(downloadURL);
		}
	};

	return (
		<div className="p-4 border border-gray-300 rounded-md">
			<input
				type="file"
				onChange={handleFileChange}
				className="p-2 border border-gray-200"
			/>
			<button
				onClick={handleUpload}
				className="mt-2 p-2 bg-blue-500 text-white rounded"
			>
				Upload File
			</button>
			{url && (
				<p className="mt-4 text-blue-600">
					File uploaded!{" "}
					<a href={url} target="_blank">
						Download it here
					</a>
				</p>
			)}
		</div>
	);
}
