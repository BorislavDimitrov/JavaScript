Array.prototype.last = function () {
  let result = this[this.length - 1];
  return result;
};

Array.prototype.skip = function (n) {
  let result = [];
  let counter = 0;

  for (let i = 0; i < this.length; i++) {
    counter++;
    if (counter > n) {
      result.push(this[i]);
    }
  }
  return result;
};

Array.prototype.take = function (n) {
  let result = [];
  let counter = 0;

  for (let i = 0; i < this.length; i++) {
    if (counter < n) {
      result.push(this[i]);
    }
    counter++;
  }
  return result;
};

Array.prototype.sum = function () {
  let sum = 0;

  for (let i = 0; i < this.length; i++) {
    sum += this[i];
  }

  return sum;
};

Array.prototype.average = function () {
  let sum = 0;

  for (let i = 0; i < this.length; i++) {
    sum += this[i];
  }

  return sum / this.length;
};
