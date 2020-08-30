function radiansToDegrees ([arg1, arg2]) {
    var rad=parseFloat(arg1);
    var deg=parseFloat(arg2);

    var pi=Math.PI;
    var deg=rad*(180/pi);
    console.log ("Degrees are: " + deg);
}