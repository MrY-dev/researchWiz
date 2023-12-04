import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PDFViewer.css';
import CommentList from './CommentList.jsx';
import InnerNavbar from './InnerNavbar.jsx';
import getPaperAPI from '../API/getPaperAPI.js';
import getCommentAPI from '../API/getCommentAPI.js';

export default function PDFViewerComponent() {
  const { paperid } = useParams();
  const [pdfUrl, setPdfUrl] = useState('');
  const [commList, setComList] = useState([]);

  const email = localStorage.getItem('email');
  const paperId = localStorage.getItem('selectedPaperId');

  useEffect(() => {
    const fetchComm = async () => {
      const response = await getCommentAPI({ paperid: paperId, email: email });
        if (response.statusCode === 200) {
          setComList(response.data);
        } else {
          setComList([]);
        }
      };
      fetchComm();  
    }, [email, paperId]);

  useEffect(() => {
    const fetchPdf = async () => {
      try {
        const response = await getPaperAPI({ paperid });
        const pdfObjectURL = URL.createObjectURL(response);
        setPdfUrl(pdfObjectURL);
      } catch (error) {
        console.error('Error fetching PDF:', error);
      }
    };

    fetchPdf();
  }, [paperid]);

  return (
    <div>
    <InnerNavbar type="pdf"/>
    <div className="pdf-page-container">
      <div className="comments-container">
        <h2>Comments</h2>
        <CommentList comments={commList}/>
        <button className="add-comment-button">+</button>
      </div>
      <div className="pdf-container">
        {pdfUrl && <iframe src={pdfUrl} width="100%" height="100%" title="Embedded PDF"></iframe>}
      </div>
    </div>
    </div>
  );
}
