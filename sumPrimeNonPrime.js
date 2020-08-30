function sumPrimeNonPrime(input) {
  let number = input.shift();
  let primesum = 0;
  let nonprimesum = 0;

  while (number !== "stop") {
    let isprime = true;
    number = Number(number);

    if (number < 0) {
      console.log(`Number is negative.`);
    } else {
      for (let digit = 2; digit <= Math.sqrt(number); digit++) {
        if (number % digit === 0) {
          isprime = false;
          break;
        }
      }
      if (isprime) {
        primesum += number;
      } else {
        nonprimesum += number;
      }
    }
    number = input.shift();
  }
  console.log(`Sum of all prime numbers is: ${primesum}`);
  console.log(`Sum of all non prime numbers is: ${nonprimesum}`);
}
