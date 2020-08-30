function numberinRange1To100(input) {
  let i = 0;
  let num = Number(input.shift());

  while (num < 1 || num > 100) {
    i++;
    console.log("Invalid number!");
    num = Number(input.shift());
  }
  console.log(`The number is: ${num}`);
}
