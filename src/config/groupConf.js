export function groupByPriority() {}

/**
 * Groups tickets by status.
 *
 * @return {object} A mapping of status names to arrays of tickets.
 */

export function groupTickets(response, criteria) {
  const groupedTickets = response.reduce((obj, ticket) => {
    const criteria = ticket[criteria];
    if (!obj[criteria]) {
      obj[criteria] = [];
    }
    obj[criteria].push(ticket);
    return obj;
  }, {});

  return groupedTickets;
}

export function groupTicketsByStatus(tickets, criteria) {
  const groupedTickets = {
    Backlog: [],
    Todo: [],
    "In progress": [],
    Done: [],
    Cancelled: [],
  };

  tickets.forEach((ticket) => {
    const property = ticket[criteria];
    groupedTickets[property].push(ticket);
  });

  return groupedTickets;
}
