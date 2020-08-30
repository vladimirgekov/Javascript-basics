function circleAreaAndPerimeter([arg1]) {
    let r=parseFloat(arg1);
    let Area=(r*r*Math.PI).toFixed(2);
    let Perimeter=(2*Math.PI*r).toFixed(2);

    console.log(Area);
    console.log(Perimeter);
}

