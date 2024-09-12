import { Card, GroupHeader } from "..";
import { statusIcon } from "../../config/icons";
import groupBy from "../../config/groupBy";
import useFetchApi from "../../config/useFetchApi";
import "./TasksLayout.css";
import { useEffect, useState } from "react";

export default function TasksLayout() {
  const { data } = useFetchApi();
  const [group, setGroup] = useState(null);
  useEffect(() => {
    if (!data) return;
    setGroup(groupBy(data.tickets, "status"));
  }, [data]);

  return !group ? (
    <div className="loader-screen">
      <span className="loader"></span>
    </div>
  ) : (
    <div className="tasks-layout">
      {Object.keys(group).map((status, ind) => (
        <div key={ind}>
          <GroupHeader
            icon={statusIcon(status)}
            title={status}
            length={group[status]?.length}
          />
          {group[status].map((ticket, cardInd) => (
            <Card task={ticket} key={cardInd} />
          ))}
        </div>
      ))}
    </div>
  );
}
