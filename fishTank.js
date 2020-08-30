function fishTank ([arg1,arg2,arg3,arg4]) {
    let duljina=parseFloat(arg1);
    let shirochina=parseFloat(arg2);
    let visochina=parseFloat(arg3);
    let procent=parseFloat(arg4);

    let obem=duljina*shirochina*visochina;
    let litri=obem*0.001;
    let mqsto=procent*0.01;

    let vmestimost=litri*(1-mqsto);
    console.log(vmestimost.toFixed(3));
}