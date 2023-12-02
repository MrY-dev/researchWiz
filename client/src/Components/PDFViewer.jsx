import { useState, useEffect } from 'react';

export default function PDFViewer() {
  const [pdfUrl, setPdfUrl] = useState(null);

  useEffect(() => {
    const fetchPdf = async () => {
      try {
        const response = 'great'
        const pdfBlob = await response.blob();
        const pdfObjectURL = URL.createObjectURL(pdfBlob);
        setPdfUrl(pdfObjectURL);
      } catch (error) {
        console.error('Error fetching PDF:', error);
      }
    };

    fetchPdf();
  }, []);

  return (
    <div>
      <h1>PDF Viewer</h1>
      <p>Here is the embedded PDF:</p>
      pdfUrl && (
        <iframe src={pdfUrl} width="100%" height="600px" title="Embedded PDF"></iframe>
      )

      {/* <iframe src="./Exam Rules-2023.pdf" width="100%" height="600px" title="Embedded PDF"></iframe> */}
    </div>
  );
}