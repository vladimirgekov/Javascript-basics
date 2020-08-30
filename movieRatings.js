function movieRatings(input) {
  let moviesCount = Number(input.shift());
  let totalRatingForAllMovies = 0;
  let maxRating = 1;
  let maxRatingFilm = "";
  let minRating = 10;
  let minRatingFilm = "";

  for (let movie = 1; movie <= moviesCount; movie++) {
    let name = input.shift();
    let rating = Number(input.shift());

    if (rating > maxRating) {
      maxRating = rating;
      maxRatingFilm = name;
    }

    if (rating < minRating) {
      minRating = rating;
      minRatingFilm = name;
    }
    totalRatingForAllMovies += rating;
  }
  let averageRating = totalRatingForAllMovies / moviesCount;

  console.log(
    `${maxRatingFilm} is with highest rating: ${maxRating.toFixed(1)}`
  );
  console.log(
    `${minRatingFilm} is with lowest rating: ${minRating.toFixed(1)}`
  );
  console.log(`Average rating: ${averageRating.toFixed(1)}`);
}
