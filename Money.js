function money([arg1,arg2,arg3]) {
    let bitcoins=parseInt(arg1);
    let yuans=parseFloat(arg2);
    let commission=parseFloat(arg3 / 100);

    let bitcoinsToLeva = bitcoins * 1168;
    let yuansToDollars = yuans * 0.15;
    let dollarsToLeva = yuansToDollars * 1.76;
    
    let euro=(bitcoinsToLeva+dollarsToLeva) / 1.95;

    commission = commission * euro;
    let result = euro - commission;

    console.log(result.toFixed(2));
}