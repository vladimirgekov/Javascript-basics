function logistics(input) {
  let numberofgoods = Number(input.shift()); //broi na tovarite
  let microbus = 200;
  let truck = 175;
  let train = 120;

  let sumoftons = 0;
  let microbustons = 0;
  let trucktons = 0;
  let traintons = 0;

  for (i = 0; i <= numberofgoods - 1; i++) {
    let tons = Number(input.shift());

    sumoftons += tons;

    if (tons <= 3) {
      microbustons += tons;
    } else if (tons > 3 && tons <= 11) {
      trucktons += tons;
    } else if (tons > 11) {
      traintons += tons;
    }
  }
  let t1 = (microbustons * microbus) / 100;
  let t2 = (trucktons * truck) / 100;
  let t3 = (traintons * train) / 100;

  let tt1 = (microbustons / sumoftons) * 100;
  let tt2 = (trucktons / sumoftons) * 100;
  let tt3 = (traintons / sumoftons) * 100;

  let totalprice = t1 + t2 + t3;

  let averageprice = (totalprice / sumoftons) * 100;

  console.log(averageprice.toFixed(2));
  console.log(`${tt1.toFixed(2)}%`);
  console.log(`${tt2.toFixed(2)}%`);
  console.log(`${tt3.toFixed(2)}%`);
}
