function onTimeForTheExam (arg1,arg2,arg3,arg4) {
    let examhour = Number(arg1);
    let examminutes = Number(arg2);
    let arrivalhour = Number (arg3);
    let arrivalminutes = Number (arg4);

    let late = "Late";
    let early = "Early";
    let ontime = "On time";

    let examtime = (examhour*60) + examminutes;
    let arrivaltime = (arrivalhour*60) + arrivalminutes;

    let totalminutesdifference = arrivaltime - examtime;

    let studentarrival = late;
    if (totalminutesdifference < -30) {
        studentarrival = early;
    } else if (totalminutesdifference <= 0) {
        studentarrival = ontime;
    }

    let result = "";
    if (totalminutesdifference != 0) {
        let hoursdifference = Math.abs (~~(totalminutesdifference/60));
        let minutesdifference = Math.abs (totalminutesdifference % 60);

        if (hoursdifference > 0) {
            result = hoursdifference + ":" + (minutesdifference > 9 ? minutesdifference : "0" + minutesdifference) + "hours";
        } else {
            result = minutesdifference + " minutes";
        } 
        if (totalminutesdifference < 0){
            result += " before the start";
        } else {
            result += " after the start";
        }
    } 
    
    console.log (studentarrival);
    if (result) {
        console.log (result);
    }
}