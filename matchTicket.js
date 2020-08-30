function matchTicket (arg1,arg2,arg3) {
    let budget = Number(arg1);
    let tickettype = arg2;
    let people = Number(arg3);

    let transportcharges = 0.00;
    let moneyfortickets = 0.00;
    let momeydifference = 0.00;

    if (people <= 4) {
        transportcharges = 0.75 * budget;
    } else if (people <= 9) {
        transportcharges = 0.60 * budget;
    } else if (people <= 24) {
        transportcharges = 0.50 * budget;
    } else if (people <=49) {
        transportcharges = 0.40 * budget;
    } else if (people >= 50){
        transportcharges = 0.25 * budget;
    }
    switch (tickettype) {
        case "Normal" :
            moneyfortickets = people * 249.99;
            break;
        case "VIP" :
            moneyfortickets = people * 499.99;
            break;
        default :
            moneyfortickets = people * 249.99;
            break;
    }
    moneydifference = budget - transportcharges - moneyfortickets;
    let result = "Yes! You have " + moneydifference.toFixed(2) + " leva left.";

    if (moneydifference < 0) {
        result = "Not enough money! You need " + Math.abs(moneydifference).toFixed(2) + "leva.";
    }
    
    console.log(result);
}