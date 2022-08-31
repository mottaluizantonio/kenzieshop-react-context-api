import formatValue from "../utils/formatValue";

export const products = [
  {
    name: "Kindle 10a. geração",
    price: 299.0,
    image: "https://m.media-amazon.com/images/I/41qhlF9xUDL.jpg",
  },
  {
    name: "Console Nintendo Switch",
    price: 2540.0,
    image:
      "https://m.media-amazon.com/images/I/61-PblYntsL._AC_UY436_QL65_.jpg",
  },
  {
    name: "Lego Star Wars - The Mandalorian",
    price: 80.0,
    image:
      "https://m.media-amazon.com/images/I/71UlCkpyEuL._AC_UL640_QL65_.jpg",
  },
  {
    name: "Fones de Ouvido Xiaomi Redmi AirDots 2",
    price: 78.9,
    image:
      "https://m.media-amazon.com/images/I/51XGj-eyCnL._AC_UL640_QL65_.jpg",
  },
  {
    name: "Bateria Externa Samsung",
    price: 99.0,
    image:
      "https://m.media-amazon.com/images/I/81rQ8szm+iL._AC_UL640_QL65_.jpg",
  },
  {
    name: "Jogo Elden Ring",
    price: 199.0,
    image:
      "https://m.media-amazon.com/images/I/6161slXZUTL._AC_UY436_FMwebp_QL65_.jpg",
  },
];

export const productsDataBase = products.map((product) => ({
  ...product,
  priceFormatted: formatValue(product.price),
}));
