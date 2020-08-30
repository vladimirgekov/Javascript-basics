function fruitShop([arg1,arg2,arg3]) {
    let plod=arg1;
    let den=arg2;
    let kolichestvo=parseFloat(arg3);
    let cena=0;

    if (den==="Saturday" || den==="Sunday") {
        if (plod==="banana") cena=2.70;
        else if (plod==="apple") cena=1.25;
        else if (plod==="orange") cena=0.90;
        else if (plod==="grapefruit") cena=1.60;
        else if (plod==="kiwi") cena=3.00;
        else if (plod==="pineapple") cena=5.60;
        else if (plod==="grapes") cena=4.20;
    } else if (den==="Monday" || den==="Tuesday" || den==="Wednesday" || den==="Thursday" || den==="Friday") {
        if (plod==="banana") cena=2.50;
        else if (plod==="apple") cena=1.20;
        else if (plod==="orange") cena=0.85;
        else if (plod==="grapefruid") cena=1.45;
        else if (plod==="kiwi") cena=2.70;
        else if (plod==="pineapple") cena=5.50;
        else if (plod==="grapes") cena=3.85;
        }
    else {
        console.log("error");
    }
    let suma=kolichestvo*cena;
    console.log(suma.toFixed(2));
}