function sumSeconds(input) {
    let timefirst = Number(input.shift());
    let timesecond = Number(input.shift());
    let timethird = Number(input.shift());

    let totaltime = timefirst + timesecond + timethird;

    let minutes = Math.floor(totaltime/60);
    let seconds = totaltime % 60;

    if (seconds < 10) {
        console.log (`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}