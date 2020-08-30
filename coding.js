function coding(input) {
  let number = Number(input.shift());

  while (number > 0) {
    let lastdigit = number % 10;

    if (lastdigit === 0) {
      console.log("ZERO");
    } else {
      let asciisymbol = String.fromCharCode(lastdigit + 33);
      let row = "";
      for (let index = 1; index <= lastdigit; index++) {
        row += asciisymbol;
      }
      console.log(row);
    }
    number = parseInt(number / 10);
  }
}
