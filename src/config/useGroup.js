import { useState } from "react";

const gropuByStatus = {
  Backlog: [],
  Todo: [],
  "In progress": [],
  Done: [],
  Cancelled: [],
};

export const groupByPriority = {
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
};

export default function useGroup(tickets, criteria) {
  const [group, setGroup] = useState(gropuByStatus);

  tickets.forEach((ticket) => {
    const property = ticket[criteria];
    if (!group[property]) {
      group[property] = [];
    }
    group[property].push(ticket);
  });

  return [group, setGroup];
}
