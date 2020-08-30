function factorial([arg1]) {
  let n = parseInt(arg1);
  let fact = 1;

  do {
    fact = fact * n;
    n--;
  } while (n > 1);
  console.log(fact);
}
