const express = require('express');
const router = express.Router();
const db = require('../data/database');

const categoriasSorvete = [
  { id: 1, nome: 'Cremoso', descricao: 'Sorvetes com textura cremosa e rica.' },
  { id: 2, nome: 'Frutado', descricao: 'Sorvetes feitos com frutas frescas.' },
  { id: 3, nome: 'Vegano', descricao: 'Sorvetes sem ingredientes de origem animal.' },
  { id: 4, nome: 'Sem Lactose', descricao: 'Sorvetes para intolerantes à lactose.' }
];

function getCategorias() {
  return categoriasSorvete;
}

function addCategoria(categoria) {
  categoriasSorvete.push(categoria);
}

router.get('/', (req, res) => {
  res.json(getCategorias());
});

router.post('/', (req, res) => {
  const novaCategoria = {
    id: categoriasSorvete.length + 1,
    nome: req.body.nome
  };
  addCategoria(novaCategoria);
  res.status(201).json(novaCategoria);
});

module.exports = router;