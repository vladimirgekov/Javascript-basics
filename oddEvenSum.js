function oddEvenSum(input) {
  let numbers = Number(input.shift());

  let evensum = 0;
  let oddsum = 0;

  for (let i = 1; i <= numbers; i++) {
    let currentnumber = Number(input.shift());

    if (i % 2 == 0) {
      evensum += currentnumber;
    } else {
      oddsum += currentnumber;
    }
  }
  if (evensum === oddsum) {
    console.log(`Yes\nSum = ${evensum}`);
  } else {
    let diff = Math.abs(evensum - oddsum);
    console.log(`No\nDiff = ${diff}`);
  }
}
