function operation (arg1,arg2,arg3) {
    let n1 = Number(arg1);
    let n2 = Number(arg2);
    let noperator = arg3;

    let result = 0.00;
    let output = "";

    if (n2 === 0 && (noperator === "/" || noperator === "%")) {
        output = "Cannot drive " + n1 + "by zero";
    } else if (noperator === "/") {
        result = (n1/n2).toFixed(2);
        output = n1 + " " + noperator + " " + n2 + " = " + result;
    } else if (noperator === "%") {
        result = (n1%n2).toFixed(2);
        output = n1 + " " + noperator + " " + n2 + " = " + result;
    } else if (noperator === "+") {
        result = (n1+n2).toFixed(2);
    } else if (noperator === "-") {
        result = (n1-n2).toFixed(2);
    } else if (noperator === "*") {
        result = (n1*n2).toFixed(2);
    }
    output = n1 + " " + noperator + " " + n2 + " = " + result + " - " + (result % 2 == 0 ? "even" : "odd");
    console.log (output);
}