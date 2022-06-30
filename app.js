require('dotenv').config();
const express = require('express');
const errorMiddleware = require('./middlewares/errorMiddleware');
const productsRouter = require('./Routes/productsRoutes')
const app = express();
app.use(express.json());

// const productsRoutes = require('./Routes/productsRoutes');
// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', productsRouter);
// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 

app.use(errorMiddleware);
module.exports = app;