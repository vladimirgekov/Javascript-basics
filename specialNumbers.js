function specialNumbers(input) {
  let n = Number(input.shift());
  let output = "";

  for (let number = 1111; number <= 9999; number++) {
    let isspecial = true;
    let numberasstring = number + "";

    for (let index = 0; index < numberasstring.length; index++) {
      let digit = numberasstring[index];

      if (n % digit !== 0) {
        isspecial = false;
        break;
      }
    }
    if (isspecial) {
      output += number + " ";
    }
  }
  console.log(output);
}
