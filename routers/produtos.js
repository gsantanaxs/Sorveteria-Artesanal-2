const express = require('express');
const router = express.Router();
const produtosData = require('../data/produtos'); // ou database.js se for lá

router.get('/produtos', (req, res) => {
  res.json(produtosData.getProdutos());
});

router.post('/produtos', (req, res) => {
  const novoProduto = req.body;
  produtosData.addProduto(novoProduto);
  res.status(201).json(novoProduto);
});

module.exports = router;

const db = require('../data/database');

const produtosSorveteria = [
  { id: 1, nome: 'Casquinha de Chocolate Belga', categoria: 'Cremoso', preco: 15.00 },
  { id: 2, nome: 'Casquinha de Flocos', categoria: 'Cremoso', preco: 15.00 },
  { id: 3, nome: 'Casquinha de Baunilha', categoria: 'Cremoso', preco: 15.00 },
  { id: 5, nome: 'Casquinha de Morango Orgânico', categoria: 'Frutado', preco: 12.00 },
  { id: 6, nome: 'Casquinha de Coco Orgânico', categoria: 'Frutado', preco: 12.00 },
  { id: 7, nome: 'Casquinha de Abacaxi Orgânico', categoria: 'Frutado', preco: 12.00 },
  { id: 8, nome: 'Casquinha de Manga Orgânico', categoria: 'Frutado', preco: 12.00 },
  { id: 9, nome: 'Sorvete Vegano de Açaí', categoria: 'Vegano', preco: 20.00 },
  { id: 10, nome: 'Sorvete Vegano de Chocolate', categoria: 'Vegano', preco: 20.00 },
  { id: 11, nome: 'Pote Sem Lactose de Napolitano', categoria: 'Sem Lactose', preco: 30.00 },
  { id: 12, nome: 'Pote Sem Lactose de Morango', categoria: 'Sem Lactose', preco: 30.00 },
  { id: 13, nome: 'Pote Sem Lactose de Chocolate', categoria: 'Sem Lactose', preco: 30.00 }
];

function getProdutos() {
  return produtosSorveteria;
}

function addProduto(produto) {
  produtosSorveteria.push(produto);
}

module.exports = { getProdutos, addProduto };

router.get('/erro-teste', (req, res) => {
    throw new Error("O servidor erro teste");
});

router.get('/', (req, res) => {
    const categoriaId = req.query.categoriaId;
    if (categoriaId) {
        const produtosFiltrados = db.produtos.filter(p => p.categoriaId === categoriaId);
        return res.json(produtosFiltrados);
    }
    res.json(db.produtos);
});

router.post('/', (req, res) => {
    const novoProduto = {
        id: db.produtos.length > 0 ?
        Math.max(...db.produtos.map(p => p.id)) + 1 : 1,
        categoriaId: req.body.categoriaId, 
    }
});