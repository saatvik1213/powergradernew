import FileDownload from "../components/FileDownload";

export default function DownloadPage() {
	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold text-center mb-4">
				Download a File
			</h1>
			<FileDownload />
		</div>
	);
}
