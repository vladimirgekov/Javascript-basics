function Graduation2(input) {
  let name = input.shift();
  let grade = 1;
  let sumGrade = 0;
  let excluded = 0;
  let isExcluded = false;

  while (grade <= 12) {
    let note = Number(input.shift());

    if (note >= 4.0) {
      grade++;
      sumGrade += note;
    }
    if (note < 4.0) {
      excluded++;
    }
    if (excluded >= 2) {
      isExcluded = true;
    }
    if (isExcluded) {
      console.log(`${name} has been excluded at ${grade} grade`);
      return;
    }
  }
  let avg = sumGrade / 12;
  console.log(`${name} graduated. Average grade: ${avg.toFixed(2)}`);
}
