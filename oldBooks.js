function oldBooks(input) {
  let favoritebook = input.shift();
  let numberofbooks = Number(input.shift());
  let counter = 0;
  let bookisfound = false;

  while (numberofbooks > counter) {
    let nextbookname = input.shift();
    if (nextbookname === favoritebook) {
      bookisfound = true;
      break;
    }
    counter++;
  }
  if (bookisfound) {
    console.log(`You checked ${counter} books and found it.`);
  } else {
    console.log("The book you search is not here!");
    console.log(`You checked ${numberofbooks} books.`);
  }
}
