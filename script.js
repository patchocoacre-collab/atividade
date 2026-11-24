let listaProdutos = document.querySelector(".listaProdutos")
function criarCard(title,category,imagen,price) {
    let cardProduto = document.createElement("div");
    let imagemProduto = document.createElement("img");    
    let produtoNome = document.createElement("div");
    let produtoInfomacoes = document.createElement("div");
    let produtoPreco = document.createElement("span");
    let produtoCategoria = document.createElement("span");
    let produtoComprar = document.createElement("button");

    cardProduto.classList.add("cardProduto")
    imagemProduto.classList.add("imagemProduto")
    produtoNome.classList.add("produtoNome")
    produtoInfomacoes.classList.add("produtoInfomacoes")
    produtoPreco.classList.add("produtoPreco")
    produtoCategoria.classList.add("produtoCategoria")
    produtoComprar.classList.add("produtoComprar")

    return cardProduto;
}





async function buscarProdutos() {
let url = "https://fakestoreapi.com/products"
    let resporta = await fetch(url);
        let data = await resporta.json();
        
        return data;


}