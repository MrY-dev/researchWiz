import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

export default function PDFViewer() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div style={{ overflowY: 'auto', height: '500px' }}> {/* Adjust height as needed */}
      <Document
        file="./Exam Rules-2023.pdf" // Replace 'your_pdf_file.pdf' with your PDF file path
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
      <button onClick={() => setPageNumber(pageNumber - 1)} disabled={pageNumber <= 1}>
        Previous
      </button>
      <button onClick={() => setPageNumber(pageNumber + 1)} disabled={pageNumber >= numPages}>
        Next
      </button>
    </div>
  );
}
