function solve(text) {
  let firstPart = text
    .substring(0, text.length / 2)
    .split("")
    .reverse()
    .join("");

  let secondPart = text
    .substring(text.length / 2, text.length)
    .split("")
    .reverse()
    .join("");

  console.log(firstPart);
  console.log(secondPart);
}

solve("sihToDtnaCuoYteBIboJsihTtAdooGoSmI");
