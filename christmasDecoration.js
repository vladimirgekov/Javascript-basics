function christmasDecoration(input) {
  let budget = Number(input.shift());
  let inputLine = input.shift();
  let isEverythingOk = true;

  while (inputLine !== "Stop") {
    let sum = 0;
    let decoration = inputLine;

    for (let index = 0; index < decoration.length; index++) {
      let char = decoration[index];

      sum += char.charCodeAt();
    }
    if (isEverythingOk) {
    }

    if (budget >= sum) {
      budget -= sum;
      console.log(`Item successfully purchased!`);
      inputLine = input.shift();
    } else {
      isEverythingOk = false;
      break;
    }
  }
  if (isEverythingOk) {
    console.log(`Money left: ${budget}`);
  } else {
    console.log(`Not enough money!`);
  }
}
