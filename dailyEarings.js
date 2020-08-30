function dailyEarings ([arg1,arg2,arg3]) {
    let workDays = parseInt(arg1);
    let moneyPerDay = parseFloat(arg2);
    let currencyRate = parseFloat(arg3);

    let monthSalary = workDays * moneyPerDay ;
    let yearSalary = (monthSalary*12) + (monthSalary * 2.5);
    let taxes = yearSalary * 0.25;
    let netSalary = yearSalary - taxes;
    let salaryInLeva = netSalary * currencyRate;

    console.log((salaryInLeva/365).toFixed(2));
}