import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PDFViewer.css';
import CommentList from './CommentList.jsx';
import InnerNavbar from './InnerNavbar.jsx';
import getPaperAPI from '../API/getPaperAPI.js';
import getCommentAPI from '../API/getCommentAPI.js';
import addCommentAPI from '../API/addCommentAPI.js';

export default function PDFViewerComponent() {
  const { paperid } = useParams();
  const [pdfUrl, setPdfUrl] = useState('');
  const [commList, setComList] = useState([]);
  const [newComment, setNewComment] = useState('');

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

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleAddComment = async () => {
    const response = await addCommentAPI({
      paperid: paperId,
      email: email,
      comment: newComment,
    });

    // Update the comment list if the comment was added successfully
    if (response.statusCode === 200) {
      setComList([...commList, response.data]);
      setNewComment('');
    } else {
      console.error('Error adding comment: ', response.data);
    }
  };

  return (
    <div>
    <InnerNavbar type="pdf"/>
    <div className="pdf-page-container">
      <div className="comments-container">
        <h2>Comments</h2>
        <CommentList comments={commList}/>
        <div>
          <input
              type="text"
              value={newComment}
              onChange={handleCommentChange}
              placeholder="Add a comment..."
          />
          <button className="add-comment-button" onClick={handleAddComment}>+</button>
        </div>
      </div>
      <div className="pdf-container">
        {pdfUrl && <iframe src={pdfUrl} width="100%" height="100%" title="Embedded PDF"></iframe>}
      </div>
    </div>
    </div>
  );
}
