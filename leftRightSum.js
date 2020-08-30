function leftAndRightSum(input) {
  let numbering = Number(input.shift());
  let end = numbering * 2;
  let leftsum = 0;
  let rightsum = 0;

  for (let i = 1; i <= end; i++) {
    let currentnumber = Number(input.shift());

    if (i <= numbering) {
      leftsum += currentnumber;
    } else {
      rightsum += currentnumber;
    }
  }
  if (leftsum === rightsum) {
    console.log(`Yes, sum = ${leftsum}`);
  } else {
    let difference = Math.abs(leftsum - rightsum);
    console.log(`No, diff = ${difference}`);
  }
}
