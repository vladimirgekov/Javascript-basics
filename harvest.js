function harvest([arg1,arg2,arg3,arg4]) {
    let plosht=parseInt(arg1);
    let kggrozdezakvm=parseFloat(arg2);
    let nujnilitrivino=parseFloat(arg3);
    let broirabotnici=parseInt(arg4);

    let rekolta=0.4*(plosht*kggrozdezakvm);
    let vino=rekolta/2.5;

    if (vino>=nujnilitrivino) {
        let ostanalovino=vino-nujnilitrivino;
        console.log(`Good harvest this year! Total wine: ${Math.floor(vino)} liters.`);
        console.log(`${Math.ceil(ostanalovino)} liters left -> ${Math.ceil(ostanalovino/broirabotnici)} liters per person.`);
    } else {
        console.log(`It will be a tough winter! More ${Math.floor(nujnilitrivino-vino)} liters wine needed.`);
    }
}