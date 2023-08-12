const productsList =  [
  {
    "id": 1,
    "name": "Excalibur",
    "price": "10 peças de ouro",
    "orderId": 1
  },
  {
    "id": 2,
    "name": "Espada Justiceira",
    "price": "20 peças de ouro",
    "orderId": 1
  },
  {
    "id": 3,
    "name": "Lira de Orfeu",
    "price": "1 peça de ouro",
    "orderId": 2
  },
]

const noProductNameBody = {
  name: "",
  price: "25 peças de ouro",
  orderId: 8,
}

const noProductPriceBody = {
  name: "Arco Fulminante",
  price: "",
  orderId: 8,
}

const createProductBody = {
  name: "Arco Fulminante",
  price: "25 peças de ouro",
  orderId: 8,
}

const noNameString = {
  name: 5,
  price: "25 peças de ouro",
  orderId: 8,
}

const noPriceString = {
  name: "Arco Fulminante",
  price: 5,
  orderId: 8,
}


const nameLengthLess = {
  name: "ab",
  price: "25 peças de ouro",
  orderId: 8,
}

const priceLengthLess = {
    name: "Arco Fulminante",
    price: "ab",
    orderId: 8,
}

const createdProduct = {
  id: 5,
  name: "Arco Fulminante",
  price: "25 peças de ouro",
  orderId: 8,
}

const resultCreatProduct = {
  id: 5,
  name: "Arco Fulminante",
  price: "25 peças de ouro",
}

export default {
  productsList,
  noProductNameBody,
  noProductPriceBody,
  createProductBody,
  resultCreatProduct,
  noNameString,
  noPriceString,
  nameLengthLess,
  priceLengthLess,
  createdProduct
}