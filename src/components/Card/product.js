let product = await fetch('https://shoes-store-api.vlavr.ru/products/')
  .then((response) => response.json())
  .then((data) => data[0])

console.log(product)
