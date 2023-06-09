function solve(arr) {
  let storage = new Map();

  for (const input of arr) {
    let info = input.split(" ");
    let product = info[0];
    let quantity = Number(info[1]);

    if (!storage.has(product)) {
      storage.set(product, 0);
    }

    let oldQuantity = storage.get(product);
    let newQuantity = oldQuantity + quantity;
    storage.set(product, newQuantity);
  }

  for (const [key, value] of storage) {
    console.log(`${key} -> ${value}`);
  }
}

solve(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
