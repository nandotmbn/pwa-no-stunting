import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";


export default function PDFViewer() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
	return (
		<Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.js">
			<div style={{ height: "100%" }}>
				<Viewer
					fileUrl="http://localhost:8081/cdn/document/documents_8bbd209d-1961-400e-aef9-065eb9f8ebc5.pdf"
					plugins={[defaultLayoutPluginInstance]}
				/>
			</div>
		</Worker>
	);
}
