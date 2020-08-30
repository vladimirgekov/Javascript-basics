function vacantion(input) {
  let neededmoney = Number(input.shift());
  let ownedmoney = Number(input.shift());

  let spendcounter = 0;
  let dayscounter = 0;

  while (ownedmoney < neededmoney && spendcounter < 5) {
    let command = input.shift();
    let money = Number(input.shift());

    if (command === "spend") {
      ownedmoney--;
      spendcounter++;
    } else if (command === "save") {
      ownedmoney++;
      spendcounter = 0;
    }
    if (ownedmoney < 0) {
      ownedmoney = 0;
    }
    dayscounter++;
  }
  if (spendcounter == 5) {
    console.log("You can't save the money.");
    console.log(dayscounter);
  }
  if (ownedmoney >= neededmoney) {
    console.log(`You saved the money for ${dayscounter} days.`);
  }
}
