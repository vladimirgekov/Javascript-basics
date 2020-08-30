function maxNumber(input) {
  let n = +input.shift();
  let k = 0;

  let maxNumber = -10000;

  while (k < n) {
    let number = +input.shift();

    if (number >= maxNumber) {
      maxNumber = number;
    }
    k++;
  }
  console.log(maxNumber);
}
