function numberSequence(input) {
  let numbers = Number(input.shift());

  let maxnumber = Number.MIN_SAFE_INTEGER;
  let minnumber = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i <= numbers; i++) {
    let nextnumber = Number(input.shift());

    if (minnumber > nextnumber) {
      minnumber = nextnumber;
    } else if (maxnumber < nextnumber) {
      maxnumber = nextnumber;
    }
  }
  console.log(`Max number: ${maxnumber}`);
  console.log(`Min number: ${minnumber}`);
}
numberSequence([4, 5, 7, 10, -3]);
