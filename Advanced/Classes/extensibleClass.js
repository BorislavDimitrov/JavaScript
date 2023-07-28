const classCreator = function () {
  let idCount = 1;
  class Extensible {
    constructor() {
      this.id = idCount;
      idCount++;
    }

    extend(template) {
      let entries = Object.entries(template);

      for (const [key, value] of entries) {
        if (typeof value == "function") {
          Extensible.prototype[key] = value;
        } else {
          this[key] = value;
        }
      }
    }
  }

  return Extensible;
};

function solve() {
  let Extensible = classCreator();

  let obj1 = new Extensible();
  console.log(obj1.id);
  let obj2 = new Extensible();
  console.log(obj2.id);

  obj2.extend({
    extensionMethod: function () {
      console.log("hi");
    },
    extensionProperty: "someString",
  });

  console.log(obj2);
  console.log(Object.getPrototypeOf(obj2));
}

solve();
