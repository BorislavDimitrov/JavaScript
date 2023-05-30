function solve(products) {
  let orderedProducts = products.sort();

  for (let i = 0; i < orderedProducts.length; i++) {
    orderedProducts[i] = `${i + 1}.` + orderedProducts[i];
  }

  console.log(orderedProducts);
}

solve(["Potatoes", "Tomatoes", "Onions", "Apples"]);
