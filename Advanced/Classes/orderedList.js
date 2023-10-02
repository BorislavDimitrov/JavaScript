let sortedList = (function solve() {
  let list = [];
  let sort = () => {
    list.sort((a, b) => a - b);
  };

  return {
    add: (element) => {
      list.push(element);
      size = list.length;
      sort();
    },
    remove: (index) => {
      if (index >= 0 && index <= list.length - 1) {
        list.splice(index, 1);
        size = list.length;
        sort();
      }
    },
    get: (index) => {
      if (index >= 0 && index <= list.length - 1) {
        return list[index];
      }
    },
    size: list.length,
  };
})();
