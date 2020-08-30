function chirstmasSweets(input) {
  let baklavaPricePerKilo = Number(input.shift());
  let mufinPricePerKilo = Number(input.shift());
  let shtolenKilos = Number(input.shift());
  let bobnbonKilos = Number(input.shift());
  let biscuitsKilos = Number(input.shift());

  let shtolenPricePerKilo = baklavaPricePerKilo * 1.6;
  let bonbonsPricePerKilo = mufinPricePerKilo * 1.8;
  let biscuitsPricePerKilo = 7.5;

  let total =
    shtolenPricePerKilo * shtolenKilos +
    bonbonsPricePerKilo * bobnbonKilos +
    biscuitsPricePerKilo * biscuitsKilos;
  console.log(total.toFixed(2));
}
