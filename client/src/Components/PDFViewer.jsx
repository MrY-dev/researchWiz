import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PDFViewer.css';
import CommentList from './CommentList.jsx';
import InnerNavbar from './InnerNavbar.jsx';
import { cmntList } from './mockData.js';
import getPaperAPI from '../API/getPaperAPI.js';

export default function PDFViewerComponent() {
  const { title } = useParams();
  const [pdfUrl, setPdfUrl] = useState('');

  useEffect(() => {
    const fetchPdf = async () => {
      try {
        const response = await getPaperAPI({ title });
        const pdfBlob = await response.blob();
        const pdfObjectURL = URL.createObjectURL(pdfBlob);
        setPdfUrl(pdfObjectURL);
      } catch (error) {
        console.error('Error fetching PDF:', error);
      }
    };

    fetchPdf();
  }, [title]);

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
