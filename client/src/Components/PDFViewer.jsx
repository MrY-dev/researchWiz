import { useState, useEffect } from 'react';
import './PDFViewer.css';
import InnerNavbar from './InnerNavbar';

export default function PDFViewerComponent() {
  const [pdfUrl, setPdfUrl] = useState(null);

  useEffect(() => {
    const fetchPdf = async () => {
      try {
        // Replace 'great' with your actual PDF endpoint
        const response = await fetch('great');
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
    <InnerNavbar />
    <div className="pdf-page-container">
      <div className="comments-container">
        <h2>Comments Section</h2>
        {/* Add your comment component and add button here */}
      </div>
      <div className="pdf-container">
        {/*pdfUrl && <iframe src={pdfUrl} width="100%" height="100%" title="Embedded PDF"></iframe>*/}
        <iframe src="./Exam Rules-2023.pdf" width="100%" height="600px" title="Embedded PDF"></iframe>
      </div>
    </div>
    </div>
  );
}
