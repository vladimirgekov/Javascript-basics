function salary(input) {
  let openedtabas = Number(input.shift());
  let salary = Number(input.shift());
  let facebook = 150;
  let instagram = 100;
  let reddit = 50;

  for (let tab = 1; tab <= openedtabas; tab++) {
    if (salary <= 0) {
      break;
    }

    let currenttab = input.shift();

    if (currenttab === "Facebook") {
      salary -= facebook;
    } else if (currenttab === "Instagram") {
      salary -= instagram;
    } else if (currenttab === "Reddit") {
      salary -= reddit;
    }
  }

  if (salary > 0) {
    console.log(parseInt(salary));
  } else {
    console.log("You have lost your salary.");
  }
}
