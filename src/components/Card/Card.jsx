import { priorityLabel, statusIcon } from "../../config/icons";
import "./Card.css";

export default function Card({ task }) {
  return (
    <div className="card">
      <div className="card-header">
        <p className="card-id">{task.id}</p>
        <img src="user_image.jpg" alt={task.userId} />
      </div>
      <div className="card-content">
        <div className="card-title">
          <img src={statusIcon(task.status)} alt="Status" />
          <span>{task.title}</span>
        </div>
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
      </div>
    </div>
  );
}
