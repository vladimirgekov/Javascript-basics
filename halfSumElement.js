function halfSumElement(input) {
  let end = Number(input.shift());
  let sum = 0;
  let maxnumber = Number.MIN_SAFE_INTEGER;

  for (let start = 1; start <= end; start++) {
    let number = Number(input.shift());
    sum += number;

    if (number > maxnumber) {
      maxnumber = number;
    }
  }
  let result = sum - maxnumber;
  if (result === maxnumber) {
    console.log(`Yes`);
    console.log(`Sum = ${maxnumber}`);
  } else {
    let diff = Math.abs(maxnumber - result);
    console.log(`No`);
    console.log(`Diff = ${diff}`);
  }
}
