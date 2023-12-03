import './AlertModal.css';

export default function AlertModal({ children, onClose }) {
    return (
      <div className="modal-overlay">
        <div className="modal">
          <button className="close-button" onClick={onClose}>
            close
          </button>
          {children}
        </div>
      </div>
    );
  };
  
