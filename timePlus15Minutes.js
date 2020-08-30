function timePlus15Minutes (arg1) {
    let hours = Number(arg1.shift());
    let minutes = Number(arg1.shift());
  
    if (hours===23 && minutes===45) {
        console.log(`0:00`);
    } else if (hours===23 && minutes>45) {
      if(minutes < 55) {
          console.log(`0:0${minutes-45}`);
      } else {
          console.log(`0:${minutes-45}`);
      }
    } else if (minutes===45) {
        console.log(`${hours+1}:00`);
    } else if (minutes<45) {
        console.log(`${hours}:${minutes+15}`);
    } else if (minutes>45) {
        if(minutes < 55) {
            console.log(`${hours+1}:0${minutes-45}`);
        } else {
            console.log(`${hours+1}:${minutes-45}`);
        }
    }
  }