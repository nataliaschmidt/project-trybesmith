# Talker Manager

O objetivo do projeto é criar uma loja de itens medievais.

Neste projeto:

- Desenvolvi as camadas de Service e Controller da aplicação, utilizando o JWT para autenticar algumas rotas, além de seus testes de integração.

## Tecnologias Utilizadas
<hr>

- Docker
- Node.js
- Express
- SQL
- Sequelize
- TypeScript

## Instruções
<hr>

- Clone este repositório.

```bash
git clone git@github.com:nataliaschmidt/project-trybesmith.git
```
- Acesse o diretório do porjeto e instale suas dependências
```bash
npm install
```

- Execute o seguinte comando para rodar os serviços node e db:
```bash
docker-compose up -d
```
- Para criar o database rode o seguinte comando no terminal, na pasta raiz do projeto
```bash
npm run db:reset 

```

- Para a visualização dos logs do container
```bash
docker logs -f trybesmith_api 
```
# Rotas
## POST /products
Será criado o cadastro de um novo produto
```bash
# corpo para a requisição
{
  "name": "Martelo de Thor",
  "price": "30 peças de ouro",
  "orderId": 4
}
```

## GET /products
O retorno será a listagem de produtos existentes no banco de dados.

## GET /orders
O retorno será a listagem de pedidos.

## POST /login
O retorno será um token gerado pelo JWT que será utilizado em outras rotas para realizar a autenticação do usuário logado.
```bash
# corpo para a requisição
{
  "username": "Eddie",
  "password": "sortudo"
}
```
## POST /orders
Endpoint para o cadastro de um pedido
- É necessário passar no cabeçalho(headers) da requisição, com a chave Authorization, o token que é retornado na rota POST /login para que seja realizada a validação do usuário.
```bash
# corpo para a requisição
{
  "productIds": [1, 2],
  "userId": 1
}
```