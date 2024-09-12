import { priorityLabel, statusIcon } from "../../config/icons";
import "./Card.css";

export default function Card({ task }) {
  return (
    <div className="card">
      <div className="card-header">
        <p className="card-id">{task.id}</p>
        <img src="user_image.jpg" alt="User Profile" />
      </div>
      <div className="card-content">
        <img src={statusIcon(task.status)} alt="Status" className="status" />
        <p className="card-title">{task.title}</p>
        <div className="card-tags">
          <img
            className="tag"
            src={priorityLabel(task.priority)}
            alt="Priority"
          />
          {task.tag.map((tag, ind) => (
            <span key={ind} className="tag">
              {tag}
            </span>
          ))}
        </div>

        {/* <p className="card-description">Feature Request</p> */}
      </div>
    </div>
  );
}
