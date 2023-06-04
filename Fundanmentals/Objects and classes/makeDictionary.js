function solve(arr) {
  class DictionaryMember {
    constructor(term, value) {
      this.term = term;
      this.value = value;
    }
  }
  let dictionary = [];

  for (let i = 0; i < arr.length; i++) {
    let parsedElement = JSON.parse(arr[i]);
    let objectKeys = Object.keys(parsedElement);
    let key = objectKeys[0];
    let value = parsedElement[key];
    let dictionaryMember = new DictionaryMember(key, value);

    dictionary.push(dictionaryMember);
  }

  dictionary.sort((a, b) => a.term.localeCompare(b.term));

  for (const term of dictionary) {
    let keys = Object.keys(term);

    console.log(`Term: ${term[keys[0]]} => definition ${term[keys[1]]}`);
  }
}

solve([
  '{"Coffee":"A hot drink madefrom the roasted and groundseeds (coffee beans) of a  tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road,typically one serving the public on a fixed route and for afare."}',
  '{"Boiler":"A fuel-burningapparatus or container forheating water."}',
  '{"Tape":"A narrow strip ofmaterial, typically used to holdor fasten something."}',
  '{"Microphone":"An instrumentfor converting sound waves intoelectrical energy variationswhich may then be amplified,transmitted, or recorded."}',
]);
