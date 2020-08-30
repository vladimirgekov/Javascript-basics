function sumNumbers(input) {
  let numbers = Number(input.shift());
  let sum = 0;

  for (let i = 0; i < numbers; i++) {
    let newnumber = Number(input.shift());
    sum += newnumber;
  }
  console.log(sum);
}
