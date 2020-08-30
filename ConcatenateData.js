function ConcatenateData([arg1,arg2,arg3,arg4]){
    let firstname=arg1;
    let lastname=arg2;
    let age=parseInt(arg3);
    let town=arg4;

    console.log(`You are ${firstname} ${lastname}, a ${age}-years old person from ${town}.`);
}