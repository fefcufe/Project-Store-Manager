require('dotenv').config();
const express = require('express');
const productsRouter = require('./Routes/productsRoutes');
const salesRoutes = require('./Routes/salesRoutes');

const app = express();
app.use(express.json());

// const productsRoutes = require('./Routes/productsRoutes');
// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', productsRouter);

app.use('/sales', salesRoutes);
// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 

module.exports = app;