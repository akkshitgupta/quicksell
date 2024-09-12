import { Card, GroupHeader } from "..";
import Data from "../../../response.json"; // make the api call to fetch data
import { groupTicketsByStatus } from "../../config/groupConf";
import { statusIcon } from "../../config/icons";
import "./TasksLayout.css";

export default function TasksLayout() {
  const group = groupTicketsByStatus(Data.tickets, "status");
  return (
    <div className="tasks-layout">
      {Object.keys(group)?.map((status, ind) => (
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
      ))}
    </div>
  );
}
