function skiTrip (input) {
    let days = Number(input.shift());
    let roomtype = input.shift();
    let grade = input.shift();
    let price = 0;

    switch (roomtype) {
        case "room for one person" :
        nights = days - 1;
        price = 18.00 * nights;
        break;

        case "apartment" :
        nights = days - 1;
        price = 25.00 * nights;
        if (days < 10) {
            price *= 0.7;
        } else if (days >=10 && days <= 15) {
            price *= 0.65;
        } else if (days > 15) {
            price *= 0.5;
        }
        break;

        case "president apartment" :
        nights = days - 1;
        price = 35.00 * nights;
        if (days < 10) {
            price *= 0.9;
        } else if (days >= 10 && days <= 15) {
            price *=0.85;
        } else if (days > 15) {
            price *= 0.8;
        } 
        break;
    }
     if (grade === "positive") {
         price *= 1.25;
     } else if (grade === "negative") {
         price *= 0.90;
     }
     
     console.log(price.toFixed(2));
}