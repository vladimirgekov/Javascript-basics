function powersOfTwo([arg1]) {
  let n = parseInt(arg1);
  let num = 1;

  for (let i = 0; i <= n; i++) {
    console.log(num);
    num = num * 2;
  }
}
