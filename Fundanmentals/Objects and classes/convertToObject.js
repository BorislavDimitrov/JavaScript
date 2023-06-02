function solve(jsonObject) {
  let obj = JSON.parse(jsonObject);

  for (const key of Object.keys(obj)) {
    console.log(`${key}: ${obj[key]}`);
  }
}

solve('{"name": "George", "age": 40, "town": "Sofia"}');
