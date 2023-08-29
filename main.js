// Objetivo: arquivo principal do projeto
// Data: 01/07/2021
// Autor: Lucas Feliciano da Silva

const catalogo = [{
    id: 1,
    nome: 'Casaco Branco',
    marca: 'Zara',
    preco: 200,
    nomeArquivoImagem: 'product-1.jpg',
},
{
    id: 2,
    nome: 'Sobretudo Azul Marinho',
    marca: 'Vercace',
    preco: 700,
    nomeArquivoImagem: 'product-2.jpg',
},
{
    id: 3,
    nome: 'Calca Azul Marinho',
    marca: 'Disel',
    preco: 350,
    nomeArquivoImagem: 'product-3.jpg',
},
];
// faz repetir o codigo para cada produto do catalogo 
for(const produtoCatalogo of catalogo) {
    const cartaoProduto = `<div id="produto1">
<img
 src="assets/img/${produtoCatalogo.nomeArquivoImagem}" 
 alt="Produto-1-do-Magazine-Ecomerce."
 style="height: 300px"
 />
 <p>${produtoCatalogo.marca}</p>
 <p>${produtoCatalogo.nome}</p>
 <p>${produtoCatalogo.preco}</p>
 <button>Adicionar</button>
</div>`;

document.getElementById('container-produto').innerHTML += cartaoProduto;
}

