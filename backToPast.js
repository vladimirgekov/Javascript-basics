function backToPast(input) {
  let heritage = Number(input.shift());
  let yearstolive = Number(input.shift());
  let years = 18;

  for (let currentyear = 1800; currentyear <= yearstolive; currentyear++) {
    if (currentyear % 2 == 0) {
      heritage -= 12000;
    } else {
      heritage -= 12000 + 50 * years;
    }
    years++;
  }
  if (heritage >= 0) {
    console.log(
      `Yes! He will live a carefree life and will have ${heritage.toFixed(
        2
      )} dollars left.`
    );
  } else {
    console.log(
      `He will need ${Math.abs(heritage).toFixed(2)} dollars to survive.`
    );
  }
}
