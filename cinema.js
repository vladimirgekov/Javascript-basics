function cinema(input) {
  let movie = input.shift();
  let students = 0;
  let standarts = 0;
  let kids = 0;

  while (movie != "Finish") {
    let totalseats = Number(input.shift());
    let soldseats = 0;
    for (let i = 0; i < totalseats; i++) {
      let currenttype = input.shift();

      if (currenttype == "End") {
        break;
      }
      soldseats++;

      switch (currenttype) {
        case "standard":
          standarts++;
          break;

        case "student":
          students++;
          break;

        case "kid":
          kids++;
          break;
      }
    }
    console.log(
      `${movie} - ${((soldseats / totalseats) * 100).toFixed(2)}% full.`
    );
    movie = input.shift();
  }
  totaltickets = kids + standarts + students;
  console.log(`Total tickets: ${totaltickets}`);
  console.log(
    `${((students / totaltickets) * 100).toFixed(2)}% student tickets.`
  );
  console.log(
    `${((standarts / totaltickets) * 100).toFixed(2)}% standard tickets.`
  );
  console.log(`${((kids / totaltickets) * 100).toFixed(2)}% kids tickets.`);
}
