import Data from "../../../response.json";
import { Card, GroupHeader } from "..";
import "./TasksLayout.css";
import { groupTicketsByStatus } from "../../config/groupConf";
import { statusIcon } from "../../config/icons";

export default function TasksLayout() {
  const groupedTickets = groupTicketsByStatus(Data.tickets, "status");
  console.log(groupedTickets);

  return (
    <div className="tasks-layout">
      {Object.keys(groupedTickets)?.map((status, ind) => (
        <div key={ind}>
          <GroupHeader
            icon={statusIcon(status)}
            title={status}
            length={groupedTickets[status].length}
          />
          {groupedTickets[status].map((ticket, cardInd) => (
            <Card task={ticket} key={cardInd} />
          ))}
        </div>
      ))}
      {/* {Data.tickets.map((ticket, ind) => (
        <Card task={ticket} key={ind} />
      ))} */}
    </div>
  );
}
