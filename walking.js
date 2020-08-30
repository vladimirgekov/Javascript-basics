function walking(input) {
  let stepsgoal = 10000;
  let stepsmade = Number(input.shift());

  if ((stepsmade = stepsgoal)) {
    console.log("Goal reached! Good job!");
  } else {
    let command = input.shift();
    if (command === "Going home") {
      stepsmade = Number(input.shift());
    }
    if (stepsmade < stepsgoal) {
      let steps = stepsgoal - stepsmade;
      console.log(`${steps} more steps to reach the goal.`);
    }
  }
}
