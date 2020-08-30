function trainTheTrainers(input) {
  let jury = Number(input.shift());

  let currentline = input.shift();

  let allaveragegrades = 0;

  let totalpresentations = 0;

  while (currentline !== "Finish") {
    let presentation = currentline;
    let sumofgrades = 0;

    for (let step = 1; step <= jury; step++) {
      let currentjurygrade = Number(input.shift());
      sumofgrades += currentjurygrade;
    }
    let allaveragegrade = sumofgrades / jury;
    console.log(`${presentation} - ${allaveragegrade.toFixed(2)}.`);
    allaveragegrades += allaveragegrade;
    totalpresentations++;

    currentline = input.shift();
  }
  let totalaverage = allaveragegrades / totalpresentations;
  console.log(`Student's final assessment is ${totalaverage.toFixed(2)}.`);
}
