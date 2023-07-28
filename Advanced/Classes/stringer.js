class Stringer {
  constructor(innerString, innerLength) {
    this.innerString = innerString;
    this.innerLength = innerLength;
  }

  increase(number) {
    this.innerLength += number;
  }

  decrease(number) {
    this.innerLength -= number;

    if (this.innerLength < 0) {
      this.innerLength = 0;
    }
  }

  toString() {
    let result = this.innerString;

    if (this.innerString.length === this.innerLength) {
      return this.innerString;
    } else if (this.innerString.length > this.innerLength) {
      result = this.innerString.substring(0, this.innerLength);
      result += "...";
    } else if (this.innerLength === 0) {
      result = "...";
    }

    return result;
  }
}

function useStringer() {
  let stringer = new Stringer("text", 1);
  stringer.increase(2);
  stringer.decrease(1);
  stringer.increase(3);
  console.log(stringer.toString());
}

useStringer();
