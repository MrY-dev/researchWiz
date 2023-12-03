import Notification from './Notification.jsx';
import './NotificationContainer.css';

export default function NotificationContainer ({ notifications, clearNotifications }) {
  return (
    <div className="notifications-container">
      {notifications.map((alert, index) => (
        <Notification key={index} title={alert.title} comments={alert.comment} />
      ))}
      {notifications.length > 0 && (
        <button onClick={clearNotifications}>Clear Notifications</button>
      )}
    </div>
  );
};

