function travelling(input) {
  let destination = "";

  while (destination != "End") {
    destination = input.shift();
    let pricedestination = Number(input.shift());
    let saving = 0;

    for (let overralmoney = 0; overralmoney < pricedestination; ) {
      saving = Number(input.shift());
      overralmoney += saving;

      if (overralmoney >= pricedestination) {
        console.log(`Going to ${destination}!`);
      }
    }
  }
}
