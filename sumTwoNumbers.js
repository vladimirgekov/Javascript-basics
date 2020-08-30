function sumTwoNumbers(input) {
  let num1 = Number(input.shift());
  let num2 = Number(input.shift());
  let magicNumber = Number(input.shift());
  let combination = 0;

  for (let row = num1; row <= num2; row++) {
    for (let col = num1; col <= num2; col++) {
      combination++;
      if (row + col == magicNumber) {
        console.log(
          `Combination N:${combination} (${row} + ${col} = ${magicNumber})`
        );
        return;
      }
    }
  }
  console.log(`${combination} combinations - neither equals ${magicNumber}`);
}
