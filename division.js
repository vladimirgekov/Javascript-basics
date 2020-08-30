function division(input) {
  let numbers = Number(input.shift());
  let divisibleBy2 = 0;
  let divisibleBy3 = 0;
  let divisibleBy4 = 0;

  for (let i = 0; i <= numbers; i++) {
    let currentnumber = Number(input.shift());

    if (currentnumber % 2 == 0) {
      divisibleBy2++;
    }
    if (currentnumber % 3 == 0) {
      divisibleBy3++;
    }
    if (currentnumber % 4 == 0) {
      divisibleBy4++;
    }
  }
  let p1 = (divisibleBy2 / 10) * 100;
  let p2 = (divisibleBy3 / 10) * 100;
  let p3 = (divisibleBy4 / 10) * 100;

  console.log(`${p1.toFixed(2)}%`);
  console.log(`${p2.toFixed(2)}%`);
  console.log(`${p3.toFixed(2)}%`);
}
division([10, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65]);
