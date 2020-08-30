function GodzillaVsKong (input) {
    let budget = Number(input.shift());
    let statisti = Number(input.shift());
    let pricefordress = Number(input.shift());

    let  decor = budget*0.10;

    if (statisti > 150) {
        pricefordress -= (pricefordress*10/100);
    }
    let price = pricefordress*statisti;
    let money = price + decor;

    if (money>budget) {
        console.log ("Not enough money!");
        console.log (`Wingard needs ${(money-budget).toFixed(2)} leva more.`);
    } else if (money<=budget) {
        console.log ("Action!");
        console.log (`Wingard starts filming with ${(budget-money).toFixed(2)} leva left. `)
    }
}


