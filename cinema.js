function cinema ([arg1,arg2,arg3]) {
    let projekciq=arg1.toLowerCase();
    let redove=parseInt(arg2);
    let koloni=parseInt(arg3);

    let mestavzalata=redove*koloni;
    let prixodi=0;

    switch (projekciq) {
        case "premiere" :
        prixodi=mestavzalata*12;
        break;
        case "normal":
        prixodi=mestavzalata*7.50;
        break;
        case "discount":
        prixodi=mestavzalata*5;
        break;
    }
    console.log(prixodi);
}