function magicNumber(input) {
  const magicNum = Number(input);
  let solution = "";

  for (var d1 = 1; d1 < 10; d1++) {
    for (var d2 = 1; d2 < 10; d2++) {
      for (var d3 = 1; d3 < 10; d3++) {
        for (var d4 = 1; d4 < 10; d4++) {
          for (var d5 = 1; d5 < 10; d5++) {
            for (var d6 = 1; d6 < 10; d6++) {
              if (d1 * d2 * d3 * d4 * d5 * d6 === magicNum) {
                solution = solution.concat(d1, d2, d3, d4, d5, d6, " ");
              }
            }
          }
        }
      }
    }
  }
  return solution;
}
