function getInfo() {
  const textboxEl = document.getElementById("search");
  let value = textboxEl.value;
  textboxEl.value = "";
  const divEl = document.getElementById("productsTitle");
  divEl.textContent = value;

  clearProducts();

  let url = `https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json`;

  fetch(url).then((response) => {
    if (response.status !== 200) {
      stopName = "Error";
    } else {
      let jsonResult = response.json();
      jsonResult.then((json) => {
        console.log(json);
        products = json.filter((product) => product.name.includes(value));

        console.log(`products after map: ${products}`);
        createProducts(products);
      });
    }
  });

  function createProducts(products) {
    let productUlEl = document.getElementById("products");
    for (let i = 0; i < products.length; i++) {
      const currentProduct = products[i];
      console.log(`product number ${i + 1} ${currentProduct}`);
      const currentProductEl = document.createElement("li");
      currentProductEl.textContent = `Name: ${currentProduct.name} price: ${currentProduct.price} type: ${currentProduct.type}`;
      productUlEl.appendChild(currentProductEl);
    }
  }

  function clearProducts() {
    const productUlEl = document.getElementById("products");

    while (productUlEl.firstChild) {
      productUlEl.removeChild(productUlEl.firstChild);
    }
  }
}
