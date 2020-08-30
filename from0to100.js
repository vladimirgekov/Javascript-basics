function from0to100(num){

let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        if (num === 0) {
            console.log('zero');
        }
     else if (num < 10) {
          console.log(ones[num]);
      }
      else if (num >= 10 && num < 20) { 
         console.log(teens[num - 10]);
         
        }
      else if (num >= 20 && num < 100) {
        console.log((tens[Math.floor(num / 10)] + ' ' + ones[num % 10]).trim());
      }
      else if (num === 100){
          console.log('one hundred');
      }
    
}