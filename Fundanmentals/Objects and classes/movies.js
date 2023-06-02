function solve(arr) {
  class Movie {
    constructor(name, date, director) {
      this.name = name;
      this.date = date;
      this.director = director;
    }
  }

  let movies = [];

  for (let i = 0; i < arr.length; i++) {
    let command = arr[i];

    if (command.includes("addMovie")) {
      let movieName = command.replace("addMovie", "").trim();
      let movie = new Movie();
      movie["name"] = movieName;
      movies.push(movie);
    } else if (command.includes("directedBy")) {
      let replacedString = command.replace("directedBy", "*");
      let splitString = replacedString.split("*");
      let movieName = splitString[0].trim();
      let movieDirector = splitString[1].trim();
      let isMovieExisting = false;
      let addedMovie = {};

      for (const movie of movies) {
        if (movie.name == movieName) {
          addedMovie = movie;
          isMovieExisting = true;
          break;
        }
      }

      if (isMovieExisting == false) {
        continue;
      }

      addedMovie["director"] = movieDirector;
    } else if (command.includes("onDate")) {
      let replacedString = command.replace("onDate", "*");
      let splitString = replacedString.split("*");
      let movieName = splitString[0].trim();
      let movieDate = splitString[1].trim();
      let isMovieExisting = false;
      let addedMovie = {};

      for (const movie of movies) {
        if (movie.name == movieName) {
          addedMovie = movie;
          isMovieExisting = true;
          break;
        }
      }

      if (isMovieExisting == false) {
        continue;
      }

      addedMovie["date"] = movieDate;
    }
  }

  for (const movie of movies) {
    console.log(JSON.stringify(movie));
  }
}

solve([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
