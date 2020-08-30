function equalSumEvenOddPosition(input) {
  let start = Number(input.shift());
  let end = Number(input.shift());
  let output = "";

  for (let number = start; number <= end; number++) {
    let numberasstring = `${number}`;
    let oddsum = 0;
    let evensum = 0;

    for (let index = 0; index < numberasstring.length; index++) {
      const digit = Number(numberasstring[index]);

      if (index % 2 !== 0) {
        oddsum += digit;
      } else {
        evensum += digit;
      }
    }
    if (evensum === oddsum) {
      output += number + " ";
    }
  }
  console.log(output);
}
