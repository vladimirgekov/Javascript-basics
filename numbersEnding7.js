function numbersEnding7 (arg1) {
    let i = Number(arg1); 

    for (i = 0; i <= 1000; i++) {
        if (i % 10 == 7) {
            console.log(i);
        }
    }
}