function multitable(input) {
  for (let row = 1; row <= 10; row++) {
    for (let col = 1; col <= 10; col++) {
      result = row * col;
      console.log(`${row} * ${col} = ${result}`);
    }
  }
}
