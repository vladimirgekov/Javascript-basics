function number100to200 ([arg1]) {
    let num=parseFloat(arg1);

    if (num<100) {
        console.log("Less than 100");
    } else if (num>200) {
        console.log("Greater than 200");
    } else if (100>num<200) {
        console.log("Between 100 and 200");
    }
}