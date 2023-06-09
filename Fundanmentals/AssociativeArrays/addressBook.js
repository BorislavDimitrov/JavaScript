function solve(arr) {
  let addressBook = {};

  for (let item of arr) {
    [person, address] = item.split(":");
    addressBook[person] = address;
  }

  let sort = Object.entries(addressBook);

  sort.sort((a, b) => a[0].localeCompare(b[0]));

  for (const [name, adress] of sort) {
    console.log(`${name} => ${adress}`);
  }
}
solve([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
