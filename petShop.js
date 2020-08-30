function petShop([arg1,arg2]) {
    let numberofdogs=parseInt(arg1);
    let ostanalijivotni=parseInt(arg2);

    let razxodizakucheta=numberofdogs*2.50;
    let drygirazxodi=ostanalijivotni*4.00;

    let krainirazxodi=(razxodizakucheta+drygirazxodi).toFixed(2);
    console.log(`${krainirazxodi} lv.`);
}