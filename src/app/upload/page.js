import FileUpload from "../components/FileUpload";

export default function UploadPage() {
	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold text-center mb-4">
				Upload a File
			</h1>
			<FileUpload />
		</div>
	);
}
