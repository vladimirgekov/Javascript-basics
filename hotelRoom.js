function hotelRoom (arg1,arg2) {
    let month = arg1;
    let nights = Number(arg2);

    let studioprice = 50.00;
    let apartmentprice = 65.00;
    let studiorent = 0.00;
    let apartmentrent = 0.00;

    switch (month) {
        case "May":
        case "October":
            studioprice = 50.00;
            apartmentprice = 65.00;

            studiorent = studioprice * nights;
            apartmentrent = apartmentrent * nights;

            if (nights > 14) {
                studiorent *= 0.70;
                apartmentrent *= 0.90;
            } else if (nights >7) {
                studiorent *= 0.95;
            }
            break;

        case "June":
        case "September":
            studioprice = 75.20;
            apartmentprice = 68.70;

            studiorent = studioprice * nights;
            apartmentrent = apartmentprice * nights;

            if (night > 14) {
                studiorent *= 0.80;
                apartmentrent *= 0.90;
            }
            break;
        case "July":
        case "August":
            studioprice = 76.00;
            apartmentprice = 77.00;

            studiorent = studioprice * nights;
            apartmentrent = apartmentprice * nights;

            if (nights > 14) {
                apartmentrent *= 0.90;
            }
            break;
    }       
    let studioinfo = "Studio: " + studiorent.toFixed(2) + " lv.";
    let apartmentinfo = "Apartment: " + apartmentrent.toFixed(2) + " lv.";

    console.log(studioinfo);
    console.log(apartmentinfo);
}