function divideWithoutReminder(input) {
  let end = Number(input.shift());
  let p1 = 0; //N % 2 === 0
  let p2 = 0; //N % 3 === 0
  let p3 = 0; //N % 4 === 0

  for (let possition = 1; possition <= end; possition++) {
    let number = Number(input.shift());

    if (number % 2 === 0) {
      p1++;
    }
    if (number % 3 === 0) {
      p2++;
    }
    if (number % 4 === 0) {
      p3++;
    }
  }
  let p1percent = (p1 / end) * 100;
  let p2percent = (p2 / end) * 100;
  let p3percent = (p3 / end) * 100;

  console.log(`${p1percent.toFixed(2)}%`);
  console.log(`${p2percent.toFixed(2)}%`);
  console.log(`${p3percent.toFixed(2)}%`);
}
