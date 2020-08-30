function characterSequence(input) {
  let string = input.shift();

  for (i = 0; i < string.length; i++) {
    let letter = string[i];
    console.log(letter);
  }
}
characterSequence(["abrakadabra"]);
