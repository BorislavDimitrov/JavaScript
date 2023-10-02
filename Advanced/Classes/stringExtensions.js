function solve() {
  String.prototype.ensureStart = function (str) {
    let result = "";
    if (!this.includes(str)) {
      result += str;
    }
    result += this;
    return result;
  };

  String.prototype.ensureEnd = function (str) {
    let result = "";
    result += this;
    if (!this.includes(str)) {
      result += str;
    }

    return result;
  };

  String.prototype.isEmpty = function () {
    return this.length === 0 ? true : false;
  };

  String.prototype.truncate = function (n) {
    let result = "";

    if (this.length < n) {
      result = this;
    } else if (n < 4) {
      result += ".".repeat(n);
    } else if (this.length === n) {
      result += this.substring(0, n - 3);

      result += "...";
    } else if (this.length > n) {
      if (!this.includes(" ")) {
        result = this.substring(0, n - 3);
        result += "...";
      } else {
        let words = this.split(" ");
        let lenght = 0;
        let index = 0;

        for (let i = 0; i < words.length; i++) {
          const element = words[i];
          lenght += element.length;
          index = i;

          if (lenght + 3 > n) {
            index--;
            break;
          }
          lenght++;
        }

        for (let i = 0; i <= index; i++) {
          result += words[i] + " ";
        }

        result = result.trimEnd();
        result += "...";
      }
    }

    return result;
  };
}

solve();
