function evenPowersOf2(input) {
  let number = Number(input.shift());
  let num = 1;

  for (let i = 0; i <= number; i += 2) {
    console.log(num);
    num = num * 2 * 2;
  }
}
