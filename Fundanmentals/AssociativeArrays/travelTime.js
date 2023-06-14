function solve(arr) {
  let trips = {};

  for (const trip of arr) {
    let info = trip.split(" > ");
    let country = info[0];
    let city = info[1];
    let price = Number(info[2]);

    if (!trips.hasOwnProperty(country)) {
      trips[country] = {
        [city]: price,
      };
    } else {
      let cities = trips[country];

      if (!cities.hasOwnProperty(city)) {
        trips[country][city] = price;
      }
      if (cities[city] > price) {
        cities[city] = price;
      }
    }
  }

  let tripsEntries = Object.entries(trips);

  let sortedTrips = tripsEntries.sort((a, b) => a[0].localeCompare(b[0]));

  for (const [key, value] of sortedTrips) {
    let sortedCities = Object.entries(value).sort((a, b) => a[1] - b[1]);
    let cityPrice = "";

    for (const [city, price] of sortedCities) {
      cityPrice += `${city} -> ${price} ->`;
    }

    console.log(`${key} -> ${cityPrice.substring(0, cityPrice.length - 3)}`);
  }
}

solve([
  "Bulgaria > Sofia > 500",

  "Bulgaria > Sopot > 800",

  "France > Paris > 2000",

  "Albania > Tirana > 1000",

  "Bulgaria > Sofia > 200",
]);
