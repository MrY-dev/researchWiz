import { useState, useEffect } from 'react';
import './PDFViewer.css';
import CommentList from './CommentList.jsx';
import InnerNavbar from './InnerNavbar.jsx';
import { cmntList } from './mockData.js';

export default function PDFViewerComponent() {
  const [pdfUrl, setPdfUrl] = useState('./Exam Rules-2023.pdf');

  useEffect(() => {
    const fetchPdf = async () => {
      try {
        // Replace 'great' with your actual PDF endpoint
        // const response = await fetch('great');
        // const pdfBlob = await response.blob();
        // const pdfObjectURL = URL.createObjectURL(pdfBlob);
        // setPdfUrl(pdfObjectURL);
      } catch (error) {
        console.error('Error fetching PDF:', error);
      }
    };

    fetchPdf();
  }, []);

  return (
    <div>
    <InnerNavbar type="pdf"/>
    <div className="pdf-page-container">
      <div className="comments-container">
        <h2>Comments</h2>
        <CommentList comments={cmntList[0].comments}/>
        <button className="add-comment-button">+</button>
      </div>
      <div className="pdf-container">
        {pdfUrl && <iframe src={pdfUrl} width="100%" height="100%" title="Embedded PDF"></iframe>}
      </div>
    </div>
    </div>
  );
}
