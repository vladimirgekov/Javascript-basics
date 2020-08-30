function chirstmasMarket(input) {
  let fantasyBookPrice = 14.9;
  let horrorBookPrice = 9.8;
  let romanticBookPrice = 4.3;

  let desireAmount = Number(input.shift());
  let fantasyBooks = Number(input.shift());
  let horrorBooks = Number(input.shift());
  let romanticBooks = Number(input.shift());

  let total =
    (fantasyBookPrice * fantasyBooks +
      horrorBookPrice * horrorBooks +
      romanticBookPrice * romanticBooks) *
    0.8;

  if (total > desireAmount) {
    let leftMoney = total - desireAmount;
    let commission = Math.floor(leftMoney * 0.1);

    let donatedmoney = desireAmount + (leftMoney - commission);
    console.log(`${donatedmoney.toFixed(2)} leva donated.`);
    console.log(`Sellers will receive ${commission} leva.`);
  } else {
    let neededmoney = desireAmount - total;
    console.log(`${neededmoney.toFixed(2)} money needed.`);
  }
}
