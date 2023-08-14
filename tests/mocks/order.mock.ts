const orderListFindAll = [
  {
    "id": 1,
    "userId": 1,
    "productIds": [
      {
        "id": 2
      },
      {
        "id": 1
      }
    ]
  },
  {
    "id": 2,
    "userId": 3,
    "productIds": [
      {
        "id": 4
      },
      {
        "id": 3
      }
    ]
  },
  {
    "id": 3,
    "userId": 2,
    "productIds": [
      {
        "id": 5
      }
    ]
  }
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
  orderListFindAll,
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