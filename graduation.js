function gradiation(input) {
  let name = input.shift();
  let grade = 0;
  let summark = 0;

  while (grade < 12) {
    let mark = Number(input.shift());
    if (mark >= 4) {
      grade++;
      summark += mark;
    }
  }

  let averagemark = summark / grade;
  if (averagemark >= 4.0) {
    console.log(`${name} graduated. Average grade: ${averagemark.toFixed(2)}`);
  }
}
