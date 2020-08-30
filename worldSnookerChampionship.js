function worldSnookerChampionship(input) {
  let stage = input.shift();
  let ticketType = input.shift();
  let tickets = Number(input.shift());
  let picture = input.shift();

  let total = 0;

  if (stage === "Quarter final") {
    switch (ticketType) {
      case "Standard":
        total += 55.5 * tickets;
        break;
      case "Premium":
        total += 105.2 * tickets;
        break;
      case "VIP":
        total += 118.9 * tickets;
        break;
    }
  } else if (stage === "Semi final") {
    switch (ticketType) {
      case "Standard":
        total += 75.88 * tickets;
        break;
      case "Premium":
        total += 125.22 * tickets;
        break;
      case "VIP":
        total += 300.4 * tickets;
        break;
    }
  } else if (stage === "Final") {
    switch (ticketType) {
      case "Standard":
        total += 110.1 * tickets;
        break;
      case "Premium":
        total += 160.66 * tickets;
        break;
      case "VIP":
        total += 400 * tickets;
        break;
    }
  }
  let isSpecial = true;

  if (total > 4000) {
    total *= 0.75;
    isSpecial = false;
  } else if (total > 2500) {
    total *= 0.9;
  }

  if (picture === "Y" && isSpecial === true) {
    total += tickets * 40;
  }
  console.log(total.toFixed(2));
}
