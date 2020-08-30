function equalPairs(input) {
  let numbers = Number(input.shift());

  let maxdiff = 0;
  let prevsum = 0;

  for (let i = 0; i < numbers; i++) {
    let i1 = Number(input.shift());
    let i2 = Number(input.shift());
    let sum = i1 + i2;

    if (i == 0) {
      prevsum = sum;
    }
    let diff = Math.abs(prevsum - sum);

    if (diff > maxdiff) {
      maxdiff = diff;
    }
    prevsum = sum;

    if (maxdiff == 0) {
      console.log(`Yes, value=${prevsum}`);
    } else {
      console.log(`No, maxdiff=${maxdiff}`);
    }
  }
}
