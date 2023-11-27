import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

export default function PDFViewer() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [comments, setComments] = useState([]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const addComment = () => {
    // Logic to add comment to the comments state
  };

  return (
    <div>
      <Document
        file="2023201022_lec2.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        <button onClick={addComment}>Add Comment</button>
        {/* Render comments */}
        {comments.map((comment, index) => (
          <div key={index}>{comment}</div>
        ))}
      </div>
    </div>
  );
}
