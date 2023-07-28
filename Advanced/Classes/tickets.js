class Ticket {
  constructor(destination, price, status) {
    (this.destination = destination),
      (this.price = price),
      (this.status = status);
  }
}

function solve(arr, criteria) {
  let tickets = [];

  for (let i = 0; i < arr.length; i++) {
    [destination, price, ticketStatus] = arr[i].split("|");
    let newTicket = new Ticket(destination, price, ticketStatus);
    tickets.push(newTicket);
  }

  switch (criteria) {
    case "destination":
      tickets = tickets.sort((a, b) => {
        return a.destination.localeCompare(b.destination);
      });
      break;
    case "price":
      tickets = tickets.sort((a, b) => {
        return a.price - b.price;
      });
      break;
    case "status":
      tickets = tickets.sort((a, b) => {
        return a.status.localeCompare(b.status);
      });
      break;
  }

  return tickets;
}

solve(
  [
    "Philadelphia|94.20|available",

    "New York City|95.99|available",

    "New York City|95.99|sold",

    "Boston|126.20|departed",
  ],

  "price"
);
