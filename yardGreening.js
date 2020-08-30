function yardGreening ([arg1]) {
    let metri=parseFloat(arg1);
    let price=7.61;

    let cena=metri*price;
    let discount=(cena*18/100).toFixed(2);
    let krainacena=(cena-discount).toFixed(2);

    console.log(`The final price is: ${krainacena} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}