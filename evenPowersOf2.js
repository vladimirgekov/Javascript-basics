function evenPowersOf2([arg1]) {
  let n = parseInt(arg1);
  let num = 1;

  for (let i = 0; i <= n; i += 2) {
    console.log(num);
    num = num * 2 * 2;
  }
}
