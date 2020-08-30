function cake(input) {
  let length = Number(input.shift());
  let width = Number(input.shift());

  let cakearea = length * width;
  let data = input.shift();

  while ("STOP" !== data) {
    let pieces = Number(data);
    cakearea = cakearea - pieces;
    if (cakearea < 0) {
      let piecesneed = Math.abs(cakearea);
      console.log(`No more cake left! You need ${piecesneed} pieces more.`);
      break;
    }
    data = input.shift();
  }
  if (cakearea >= 0) {
    console.log(`${cakearea} pieces are left.`);
  }
}
