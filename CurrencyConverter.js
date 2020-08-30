function currencyConverter([arg1, arg2, arg3]) {
    let amount = Number(arg1)
    let currencyFrom = arg2
    let currencyTo = arg3
    let USD = 1.79549
    let EUR = 1.95583
    let GBP = 2.53405
    let BGN = 1
    let USDtoEUR = ((amount * USD) / EUR).toFixed(2)
    let USDtoGBP = ((amount * USD) / GBP).toFixed(2)
    let USDtoBGN = (amount * USD).toFixed(2)
    let EURtoGBP = ((amount * EUR) / GBP).toFixed(2)
    let EURtoUSD = ((amount * EUR) / USD).toFixed(2)
    let EURtoBGN = (amount * EUR).toFixed(2)
    let GBPtoEUR = ((amount * GBP) / EUR).toFixed(2)
    let GBPtoUSD = ((amount * GBP) / USD).toFixed(2)
    let GBPtoBGN = (amount * GBP).toFixed(2)
    let BGNtoEUR = (amount / EUR).toFixed(2)
    let BGNtoUSD = (amount / USD).toFixed(2)
    let BGNtoGBP = (amount / GBP).toFixed(2)
 
 
    if (currencyFrom === "USD" && currencyTo === "EUR") {
        console.log(USDtoEUR)
    } else if (currencyFrom === "USD" && currencyTo === "GBP") {
        console.log(USDtoGBP)
    } else if (currencyFrom === "USD" && currencyTo === "BGN") {
        console.log(USDtoBGN)
    } else if (currencyFrom === "EUR" && currencyTo === "GBP") {
        console.log(EURtoGBP)
    } else if (currencyFrom === "EUR" && currencyTo === "USD") {
        console.log(EURtoUSD)
    } else if (currencyFrom === "EUR" && currencyTo === "BGN") {
        console.log(EURtoBGN)
    } else if (currencyFrom === "GBP" && currencyTo === "EUR") {
        console.log(GBPtoEUR)
    } else if (currencyFrom === "GBP" && currencyTo === "USD") {
        console.log(GBPtoUSD)
    } else if (currencyFrom === "GBP" && currencyTo === "BGN") {
        console.log(GBPtoBGN)
    } else if (currencyFrom === "BGN" && currencyTo === "EUR") {
        console.log(BGNtoEUR)
    } else if (currencyFrom === "BGN" && currencyTo === "USD") {
        console.log(BGNtoUSD)
    } else if (currencyFrom === "BGN" && currencyTo === "GBP") {
        console.log(BGNtoGBP)
    }
}