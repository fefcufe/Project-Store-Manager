# Projeto Store Manager 

Projeto realizado individualmente no módulo  de Back-end do curso da Trybe.
O projeto é uma API utilizando a arquitetura MSC (model-service-controller) e RESTful. 
A API construida é um sistema de gerenciamento de vendas no formato dropshipping em que é possível criar, visualizar, deletar e atualizar produtos e vendas. O banco de dados utilizado para a gestão de dados foi o MySQL. A Api também possui testes unitários dos endpoints feitos utilizando as bibliotecas `chai`, `sinon` e `mocha`.

  #### Diagrama de Entidade-Relacionamento

  DER do banco de dados utilizado a seguir:

  ![DER](./public/erStoreManager.png)

  ---
  
   ## Utilizando o MongoDB via Docker 🐳:

  1. Baixe a imagem do MongoDB:

  ```sh
  docker pull mongo
  ```

  2. Crie o contêiner do MongoDB:

  ```sh
  docker run --name <nome-do-container> -p 27017:27017 -d mongo
  ```

  3. Confira se o contêiner está rodando:

  ```sh
  docker ps
  ```

 ## Rodando o projeto com Docker 🐳

 1. Rode os serviços `node` e `mongodb`:

  ```sh
  docker-compose up -d
  ```
 2. Instale as dependências dentro do container `car_shop` do `node`:

  ```sh
  docker exec -it car_shop bash
  npm install
  ```
