const app = require('./app');
require('dotenv').config();
const productsRouter = require('./Routes/productsRoutes')
// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto

app.use('/products', productsRouter);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});