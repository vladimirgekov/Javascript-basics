function autobus(input) {
  let numPassengers = input.shift();
  let numStops = input.shift();
  let stopsCount = 0;

  for (let i = 0; i < input.length; i += 2) {
    stopsCount++;

    if (stopsCount % 2 !== 0) {
      numPassengers -= input[i];
      numPassengers += input[i + 1] + 2;
    } else if (stopsCount % 2 === 0) {
      numPassengers -= input[i];
      numPassengers += input[i + 1] - 2;
    }
  }

  console.log(`The final number of passengers is : ${numPassengers}`);
}
