function toyShop (input) {
    let pricevacantion = Number(input.shift());
    let puzzels = Number(input.shift());
    let dolls = Number(input.shift());
    let bears = Number(input.shift());
    let minions = Number(input.shift());
    let trucks = Number(input.shift());
    let profit = ((puzzels*2.60) + (dolls*3) + (bears*4.10) + (minions*8.20) + (trucks*2));
    

    let numberoftoys = puzzels + dolls + bears + minions + trucks;
    
    if (numberoftoys >= 50) {
        profit -= (profit*25/100);
    }

    let rent = profit*0.10;
    profit -= rent;

    if (profit>=pricevacantion) {
        console.log(`Yes! ${(profit - pricevacantion).toFixed(2)} lv left.`);
    }   else {
        console.log(`Not enough money! ${(pricevacantion - profit).toFixed(2)} lv needed.`);
    }
}
