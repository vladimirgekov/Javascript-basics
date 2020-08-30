function numbers1toNStep3(input) {
  let numbers = Number(input.shift());
  for (let i = 1; i <= numbers; i += 3) {
    console.log(i);
  }
}
