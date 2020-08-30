function nameWars(input) {
  let name = "";
  name = input.shift();
  let maxsum = 0;
  let winner = "";
  while (name != "STOP") {
    let sum = 0;
    for (let letter = 0; letter < name.length; letter++) {
      sum += name.charCodeAt(letter);
    }
    if (sum > maxsum) {
      maxsum = sum;
      winner = name;
    }
    name = input.shift();
  }
  console.log(`Winner is ${winner} - ${maxsum}!`);
}
