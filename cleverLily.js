function cleverLily(input) {
  let age = Number(input.shift());
  let priceforwashingmashine = Number(input.shift());
  let toyprice = Number(input.shift());

  let toyscount = 0;
  let moneyforbirthdays = 0;

  for (let i = 1; i <= age; i++) {
    if (i % 2 == 1) {
      toyscount++;
    } else {
      moneyforbirthdays += (10 * i) / 2;
      moneyforbirthdays--;
    }
  }
  let money = moneyforbirthdays + toyprice * toyscount;

  if (money >= priceforwashingmashine) {
    console.log(`Yes! ${(money - priceforwashingmashine).toFixed(2)}`);
  } else {
    console.log(`No! ${(priceforwashingmashine - money).toFixed(2)}`);
  }
}
