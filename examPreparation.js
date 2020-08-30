function examPreparation(input) {
  let inpuitofbadgrades = Number(input.shift());

  let countforbadgrades = 0;
  let sumgrades = 0;
  let counterforbadgrades = 0;
  let lastproblem = "";

  while (counterforbadgrades < inpuitofbadgrades) {
    let nameofexercise = input.shift();
    let grade = Number(input.shift());

    sumgrades += grade;
    counterforbadgrades++;
    lastproblem = nameofexercise;

    if (nameofexercise === "Enough") {
      let averagegrade = sumgrades / counterforbadgrades;
      console.log("Average score: " + averagegrade);
      console.log("Number of problems: " + counterforbadgrades);
      console.log("Last problem: " + lastproblem);
    }
    if (grade <= 4) {
      counterforbadgrades++;
      lastproblem = grade;
    }
    if (counterforbadgrades == inpuitofbadgrades) {
      console.log(`You need a break, ${counterforbadgrades} poor grades.`);
    }
  }
}
