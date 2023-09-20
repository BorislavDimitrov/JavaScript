let x = (function () {
  let list = [];

  let add = function add(text) {
    list.push(text);
  };

  let remove = function remove(text) {
    list = list.filter((x) => x != text);
  };

  let print = function print() {
    console.log(list.join(" "));
  };

  return { add, remove, print };
})();

x.add("Hi");
x.print();
x.remove("Hi");
x.add("Hello");
x.add("hello");
x.print();
