function invalidNumber ([arg1]) {
    let num=Number(arg1);

    let inRange=(num>=100 && num<=200) || num===0;

    if (!inRange) {
        console.log("invalid");
    }
}