function numbersFrom1To100(input) {
  let number = Number(input.shift());

  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
}
numbersFrom1To100([]);
