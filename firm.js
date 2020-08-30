function firm ([arg1,arg2,arg3]) {
    let neobxodimichasove=parseInt(arg1);
    let dnizarabota=parseInt(arg2);
    let broislujiteli=parseInt(arg3);

    let rabotnichasove=dnizarabota*8;
    let izvunrednovreme=broislujiteli*dnizarabota*2;
    let rabotnidni=dnizarabota*0.9;
    let obshtochasove=Math.floor(rabotnichasove+izvunrednovreme);

    if (rabotnichasove>=obshtochasove){
        console.log(`Yes! ${rabotnichasove-neobxodimichasove} hours left.`);
    }
    else {
        console.log(`Not enough time! ${neobxodimichasove-rabotnichasove} hours needed.`);
    }
}