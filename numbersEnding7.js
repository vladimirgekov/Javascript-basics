function numbersEnding7(input) {
  for (number = 1; number <= 1000; number++) {
    if (number % 10 === 7) {
      console.log(number);
    }
  }
}
