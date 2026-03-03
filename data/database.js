let categories = [
    { id: 1, nome:"Cremoso" },
    { id: 2, nome:"Frutado" },
    { id: 3, nome:"Vegano" },
    { id: 4, nome:"Sem Lactose" }
];

let produtos = [
    {
        categoriaId: 1,
        nome: "Casquinha de Chocolate Belga",
        descricao: "Sorvete cremoso de chocolate belga",
        preco: 15.00,
        imagem: "https://img.cdndsgni.com/preview/10896950.jpg"
},
{
    categoriaId: 2,
    nome: "Casquinha de Morango Orgânico",
    descricao: "Casquinha de Morango artesanal",
    preco: 12.00,
    imagem: "https://img.elo7.com.br/product/685x685/4DEBCA5/sorvete-de-feltro-casquinha-morango-com-baunilha-sorvete-de-casquinha.jpg"
},
{
    categoriaId: 3,
    nome: "Sorvete Vegano de Açaí",
    descricao: "Sorvete vegano de açaí.",
    preco: 20.00,
    imagem: "https://media-cdn.tripadvisor.com/media/photo-s/12/32/d0/dd/acai-na-casquinha.jpg"
},
{
    categoriaId: 4,
    nome: "Pote Sem Lactose de Napolitano",
    descricao: "Pote de 300ml",
    preco: 30.00,
    imagem: "https://www.jeitofrio.com.br/site/wp-content/uploads/2025/08/NAPOLITANO-POTE-1L-LINHA-ZERO-1024x1024.jpg"
}
];

module.exports = { categorias,produtos };