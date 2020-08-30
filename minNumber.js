function minNumber(input) {
  let n = Number(input.shift());
  let k = 0;

  let minNumber = Number.MAX_VALUE;

  while (k < n) {
    let number = Number(input.shift());

    if (number <= minNumber) {
      minNumber = number;
    }
    k++;
  }
  console.log(minNumber);
}
