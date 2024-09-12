export function groupBy(tickets, criteria) {
  const group = {};

  tickets.forEach((ticket) => {
    const property = ticket[criteria];
    if (!group[property]) {
      group[property] = [];
    }
    group[property].push(ticket);
  });
  return group;
}
