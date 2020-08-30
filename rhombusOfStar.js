function rhombusOfStar(n) {
  for (let row = 1; row <= n; row++) {
    let line = "";
  }

  line += "*";
  for (let col = 1; col < row; col++) {
    line += " *";
  }

  console.log(line);
}
