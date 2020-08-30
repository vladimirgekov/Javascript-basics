function passwordGenerator(input) {
  const n = Number(input[0]);
  const l = Number(input[1]);
  let solution = ``;

  for (var s1 = 1; s1 <= n; s1++) {
    for (var s2 = 1; s2 <= n; s2++) {
      for (var s3ascii = 97; s3ascii < 97 + l; s3ascii++) {
        let s3 = String.fromCharCode(s3ascii);

        for (var s4ascii = 97; s4ascii < 97 + l; s4ascii++) {
          let s4 = String.fromCharCode(s4ascii);

          for (var s5 = Math.max(s1, s2) + 1; s5 <= n; s5++) {
            solution = `${s1}${s2}${s3}${s4}${s5}`;
          }
        }
      }
    }
  }
  return solution;
}
