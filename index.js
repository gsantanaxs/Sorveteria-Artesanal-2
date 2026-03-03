const express = require('express');
const app = express();

app.use(express.json());

let produtos = [
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

// 1. Rota para listar todos os produtos
app.get('/produtos', (req, res) => {
    res.json(produtos);
});

// 2. Rota consertada: Listar apenas as categorias (sem repetir nomes)
app.get('/categoria', (req, res) => {
    // Extrai todas as categorias e usa o Set para remover as duplicadas
    const categoriasUnicas = [...new Set(produtos.map(p => p.categoria))];
    res.json(categoriasUnicas);
});


// 3. Rota para buscar produtos der uma categoria específica
app.get('/produtos/categoria/:nomeCategoria', (req, res) => {
    const { nomeCategoria } = req.params;
    
    const produtosFiltrados = produtos.filter(
        p => p.categoria.toLowerCase() === nomeCategoria.toLowerCase()
    );

    res.json(produtosFiltrados);
});

// 4. Rota para criar um novo produto
app.post('/produtos', (req, res) => {
    const { nome, preco, categoria } = req.body;
    
    if (!nome || !preco || !categoria) {
        return res.status(400).json({ message: "Nome, preço e categoria são obrigatórios." });
    }

    const novoProduto = {
        id: produtos.length > 0 ? produtos[produtos.length - 1].id + 1 : 1, 
        nome,
        preco,
        categoria
    };
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
});

// 5. Rota para atualizar um produto existente
app.put("/produtos/:id", (req, res) => {
    const { id } = req.params;
    const { nome, preco, categoria } = req.body;
    const produtoIndex = produtos.findIndex(p => p.id === parseInt(id));
    
    if (produtoIndex !== -1) {
        produtos[produtoIndex] = { id: parseInt(id), nome, preco, categoria };
        res.json(produtos[produtoIndex]);
    } else {
        res.status(404).json({ message: "Produto não encontrado" });
    }
});

// 6. Rota para deletar um produto  
app.delete("/produtos/:id", (req, res) => {
    const { id } = req.params;
    const produtoIndex = produtos.findIndex(p => p.id === parseInt(id));
    
    if (produtoIndex !== -1) {
        produtos.splice(produtoIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Produto não encontrado" });
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
