import DisplayIcon from "../../assets/Display.svg";
import TasksLayout from "../TasksLayout/TasksLayout.jsx";
import Dropdown from "../Dropdown/Dropdown.jsx";
import "./board.css";

export default function Board() {
  return (
    <div className="task-board">
      <div className="nav">
        <Dropdown>
          <img src={DisplayIcon} alt="Display Icon" />
          Display
        </Dropdown>
      </div>
      <TasksLayout />
    </div>
  );
}
