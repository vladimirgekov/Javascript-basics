function fibonacci([arg1]) {
  let n = Number(arg1);
  let f0 = 1;
  let f1 = 1;

  for (let i = 0; i < n - 1; i++) {
    let fnext = f0 + f1;
    f0 = f1;
    f1 = fnext;
  }
  console.log(f1);
}
