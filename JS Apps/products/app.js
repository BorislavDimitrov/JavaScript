function getInfo() {
  const textboxEl = document.getElementById("search");
  let value = textboxEl.value;
  textboxEl.value = "";
  const divEl = document.getElementById("productsTitle");
  divEl.textContent = value;

  document.getElementById("products").innerHTML = "";

  let url = `https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json`;

  fetch(url).then((response) => {
    if (response.status !== 200) {
      stopName = "Error";
    } else {
      let jsonResult = response.json();
      jsonResult.then((json) => {
        products = json.filter((product) => product.name.includes(value));

        createProducts(products);
      });
    }
  });

  function createProducts(products) {
    let productUlEl = document.getElementById("products");
    for (let i = 0; i < products.length; i++) {
      const currentProduct = products[i];

      const currentProductEl = document.createElement("li");
      currentProductEl.textContent = `Name: ${currentProduct.name} price: ${currentProduct.price} type: ${currentProduct.type}`;
      productUlEl.appendChild(currentProductEl);
    }
  }
}
