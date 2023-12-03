import './Notification.css';

export default function Notification ({ title, comments }) {
  return (<div className="notification"><ul>{comments.map((comment, index) => (<li key={index} >You commented "{comment}" on {title}</li>))}</ul></div>);
};

