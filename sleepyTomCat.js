function sleepyTomCat([arg1]) {
    let broipochivnidni=parseInt(arg1);
    let broirabotnidni=365-broipochivnidni;

    let minutizaigra=broirabotnidni*63+broipochivnidni*127;
    let razlika=Math.abs(minutizaigra-30000);

    let chasove=(razlika/60);
    let minuti=(razlika%60);

    if (minutizaigra>30000) {
        console.log("Tom will run away");
        console.log(`${Math.floor(chasove)} hours and ${Math.floor(minuti)} minutes more for play`);
    } else {
        console.log("Tom sleeps well");
        console.log(`${Math.floor(chasove)} hours and ${Math.floor(minuti)} minutes less for play`);
    }
    
}