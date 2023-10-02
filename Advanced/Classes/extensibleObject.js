function solve(template) {
  let myObj = {
    extend: function (template) {
      let prototype = Object.getPrototypeOf(this);

      let entries = Object.entries(template);

      for (const [key, value] of entries) {
        if (typeof value === "function") {
          prototype[key] = value;
        } else {
          this[key] = value;
        }
      }
      console.log("he");
    },
  };

  myObj.extend(template);

  console.log(myObj);
  console.log(Object.getPrototypeOf(myObj));
}

solve({
  extensionMethod: function () {},

  extensionProperty: "someString",
});
