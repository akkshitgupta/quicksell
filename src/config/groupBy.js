export function groupByStatus(tickets) {
  const group = {
    Backlog: [],
    Todo: [],
    "In progress": [],
    Done: [],
    Cancelled: [],
  };

  tickets.forEach((ticket) => {
    const property = ticket.status;
    group[property].push(ticket);
  });

  return group;
}

export function groupByPriority(tickets) {
  const group = {
    PriorityLow: [],
    PriorityMedium: [],
    PriorityHigh: [],
    PriorityUrgent: [],
  };

  tickets.forEach((ticket) => {
    const property = ticket.priority;
    group[property].push(ticket);
  });

  return group;
}

export function groupByUsers(tickets) {
  const group = {};
  tickets.forEach((ticket) => {
    const property = ticket.userID;
    if (!group[property]) {
      group[property] = [];
    }
    group[property].push(ticket);
  });
  return group;
}

export default function groupBy(tickets, criteria) {
  switch (criteria) {
    case "status":
      return groupByStatus(tickets);
    case "priority":
      return groupByPriority(tickets);
    case "users":
      return groupByUsers(tickets);
    default:
      return tickets;
  }
}
