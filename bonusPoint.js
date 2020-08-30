function scoreCalculation ([arg1]) {
    let num=parseInt(arg1);
    let bonuspoint = 0;

    if (num<=100) {
        bonuspoint +=5;
    }
    else if (num>1000) {
        bonuspoint = num * 0.1;
    }
    else if (num>100) {
        bonuspoint = num* 0.2;
    }
    if (num%2===0) {
        bonuspoint +=1;
    }
    else if (num%10===5) {
        bonuspoint +=2;
    }
    console.log("Bonus score: " + bonuspoint);
    console.log("Total score: " + (num+bonuspoint));
}