const express = require('express');
const app = express();

const categoriasRouter = require('./routers/categorias');
const produtosRouter = require('./routers/produtos');

app.use(express.json());
app.use(categoriasRouter);
app.use(produtosRouter);

app.get('/', (req, res) => {
  res.send('Bem-vindo à Sorveteria Artesanal! Confira nossas categorias e produtos.');
});

app.listen(3000, () => {
  console.log('Sorveteria artesanal rodando na porta 3000!');
});