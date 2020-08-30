function CelsiusToFahrenheit ([arg1, arg2]) {
    var cel=parseFloat(arg1);
    var far=parseFloat(arg2);

    var far=cel * 9/5 + 32;
    console.log ("Temp by fahrenheit is: " + far.toFixed(2));
}

