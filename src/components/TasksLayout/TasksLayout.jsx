import Data from "../../../response.json";
import { Card, GroupHeader } from "..";
import "./TasksLayout.css";

export default function TasksLayout() {
  return (
    <div className="tasks-layout">
      {/* {Object.keys(group)?.map((status, ind) => (
        <div key={ind}>
          <GroupHeader
            icon={statusIcon(status)}
            title={status}
            length={group[status].length}
          />
          {group[status].map((ticket, cardInd) => (
            <Card task={ticket} key={cardInd} />
          ))}
        </div>
      ))} */}
    </div>
  );
}
