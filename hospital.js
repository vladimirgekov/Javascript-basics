function hospital(input) {
  let period = Number(input.shift());
  let treatedpatiens = 0;
  let untreatedpatiens = 0;
  let countofdoctors = 7;

  for (let days = 1; days <= period; days++) {
    let currentpatiens = Number(input.shift());

    if (days % 3 == 0 && untreatedpatiens > treatedpatiens) {
      countofdoctors++;
    }
    if (currentpatiens > countofdoctors) {
      treatedpatiens += countofdoctors;
      untreatedpatiens += currentpatiens - countofdoctors;
    } else {
      treatedpatiens += currentpatiens;
    }
  }
  console.log(`Treated patients: ${treatedpatiens}.`);
  console.log(`Untreated patients: ${untreatedpatiens}.`);
}
