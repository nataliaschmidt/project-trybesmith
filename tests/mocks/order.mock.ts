const orderListResultFindAll = [
  {
    "id": 1,
    "userId": 1,
    "productIds": [1, 2]
  },
  {
    "id": 2,
    "userId": 2,
    "productIds": [3]
  },
]

const orderBuildMock = [
  {
    "id": 1,
    "userId": 1,
    "productIds": [{
      id: 1,
      name: "Excalibur",
      price: "10 peças de ouro",
      orderId: 1
    },
    {
      id: 2,
      name: "Espada Justiceira",
      price: "20 peças de ouro",
      orderId: 1
    }]
  },
  {
    "id": 2,
    "userId": 2,
    "productIds": [{
      id: 3,
      name: "Lira de Orfeu",
      price: "1 peça de ouro",
      orderId: 2
    }]
  },
]

const createProductvalid = {
  "productIds": [1, 2],
  "userId": 1
}

const tokenPayload = {
  id: 2,
  username: 'Eddie',
}

const noUserId = {
  "productIds": [1, 2],
}

const noproductId = {
  "userId": 1
}

const findUser = {
  id: 1,
  username: 'Hagar',
  vocation: 'Guerreiro',
  level: 10,
  password: '$2a$10$tdezp48.rMCtJHY21scfnO0gOz3wsdc80HZ6UsJ96ZyxhC/uoBgFm'
}

const userIdNoNumber = {
  "productIds": [1, 2],
  "userId": '1'
}

const productIdNoArray = {
  "productIds": '2',
  "userId": 1
}

const userNotFound = {
  "productIds": [1, 2],
  "userId": 10,
}

const productIdEmptyArray = {
  "productIds": [],
  "userId": 1
}

export default {
  orderBuildMock,
  orderListResultFindAll,
  createProductvalid,
  noUserId,
  tokenPayload,
  noproductId,
  findUser,
  userIdNoNumber,
  productIdNoArray,
  userNotFound,
  productIdEmptyArray,
}