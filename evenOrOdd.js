function evenOrOdd(arg1) {
    let num = Number (arg1.shift());

    if (num%2==0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}