function numberOfSeats([length, width]){
    let lengthInCm = length * 100;
    let widthhInCm = width * 100;
   
    let rowsLength = Math.floor(lengthInCm / 120);
    let rowsWidth = Math.floor((widthhInCm - 100 ) / 70);
    
    let totalPositions = (rowsLength * rowsWidth) - 3;
    console.log(totalPositions);
    
}