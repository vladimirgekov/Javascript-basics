function poolPipes ([arg1,arg2,arg3,arg4]) {
    let obem=parseFloat(arg1);
    let debit1=parseFloat(arg2);
    let debit2=parseFloat(arg3);
    let chasove=parseFloat(arg4);

    let voda=(debit1+debit2)*chasove;
     if (voda<=obem) {
        console.log(
            `The pool is ${Math.trunc((voda/obem)*100)}% full.
            Pipe 1:${Math.trunc((debit1*chasove/obem)*100)}%.
            Pipe 2:${Math.trunc((debit2*chasove/obem)*100)}%
            `
        )
    } else {
        console.log(
            `For ${chasove} hours the pool overflows with ${voda-obem} liters. `
        );
    }
}