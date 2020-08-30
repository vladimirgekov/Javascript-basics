function fruitShop(input) {
  let fruit = input.shift();
  let dayOfWeek = input.shift();
  let quantity = Number(input.shift());
  let price = 0;

  switch (dayOfWeek) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      if (fruit === "banana") price = 2.5;
      else if (fruit === "apple") price = 1.2;
      else if (fruit === "orange") price = 0.85;
      else if (fruit === "grapefruid") price = 1.45;
      else if (fruit === "kiwi") price = 2.7;
      else if (fruit === "pineapple") price = 5.5;
      else if (fruit === "grapes") price = 3.85;
      break;
    case "Saturday":
    case "Sunday":
      if (fruit === "banana") price = 2.7;
      else if (fruit === "apple") price = 1.25;
      else if (fruit === "orange") price = 0.9;
      else if (fruit === "grapefruit") price = 1.6;
      else if (fruit === "kiwi") price = 3.0;
      else if (fruit === "pineapple") price = 5.6;
      else if (fruit === "grapes") price = 4.2;
      break;
  }
  let sum = quantity * price;
  if (sum > 0) {
    console.log(sum.toFixed(2));
  } else {
    console.log("error");
  }
}
