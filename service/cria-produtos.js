const criaSecao = (categoria) => {
  const secao = document.createElement("section");
  secao.classList = `${categoria} produtos container`;
  secao.innerHTML = `
      <div class="produtos__titulo">
        <h3 class="titulo__texto">${categoria}</h3>
        <a href="./produtos.html?categoria=${categoria.replace(" ", "")}" class="titulo__verMais">Ver mais
          <img
            src="../assets/img/seta.svg"
            alt="Seta do link ver mais"
            class="verMais__seta"
          />
        </a>
      </div>
      <ul class="produtos__cards" data-list='${categoria}'>
      </ul>
  `;
  return secao;
};

const criaCardProduto = (produto, categoria) => {
  const novoProduto = document.createElement("li");
  if (window.location.href.includes("/telas/produtos.html")) {
    novoProduto.className = "card__item todos__produtos";
  } else {
    novoProduto.classList.add("card__item");
  }
  novoProduto.innerHTML = `<img
        src="${produto.urlImagem}"
        alt="Produto ${categoria}"
        class="card__imagem"
      />
      <p class="card__titulo">${produto.nome}</p>
      <p class="card__preco">${produto.preco}</p>
      <a href="" class="card__link">Ver produto</a>`;
  return novoProduto;
};

export const produtoService = {
  criaSecao,
  criaCardProduto,
};