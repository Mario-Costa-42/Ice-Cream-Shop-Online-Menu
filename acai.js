let paginaAtual = 0;
const paginas = document.querySelectorAll(".pagina");

function mostrarPagina(index) {
  paginas.forEach(p => p.classList.remove("ativa"));
  paginas[index].classList.add("ativa");
  paginaAtual = index;
}
function proximaPagina() { if (paginaAtual < paginas.length-1) mostrarPagina(paginaAtual+1); }
function paginaAnterior() { if (paginaAtual > 0) mostrarPagina(paginaAtual-1); }

// Seleção de tamanho
document.querySelectorAll(".Quantidademl").forEach(div => {
  div.addEventListener("click", () => {
    document.querySelectorAll(".Quantidademl").forEach(d => d.classList.remove("selecionado"));
    div.classList.add("selecionado");
    atualizarPreco();
  });
});

// Seleção de sabores (cobertura, acompanhamento e extra)
document.querySelectorAll(".sabor").forEach(div => {
  div.addEventListener("click", () => {
    div.classList.toggle("selecionado");
    atualizarPreco();
  });
});

// Atualiza o preço em tempo real
function atualizarPreco() {
  let precoTotal = 0;

  let tamanho = document.querySelector(".Quantidademl.selecionado");
  if (tamanho) precoTotal += parseFloat(tamanho.getAttribute("data-preco"));

  let coberturas = [...document.querySelectorAll(".sabor.selecionado[data-tipo='cobertura']")];
  if (coberturas.length > 1) precoTotal += (coberturas.length - 1) * 1;

  let acompanhamentos = [...document.querySelectorAll(".sabor.selecionado[data-tipo='acompanhamento']")];
  if (acompanhamentos.length > 3) precoTotal += (acompanhamentos.length - 3) * 1;

  let extras = [...document.querySelectorAll(".sabor.selecionado[data-tipo='extra']")];
  extras.forEach(e => precoTotal += parseFloat(e.getAttribute("data-preco")));

  document.getElementById("precoTotal").textContent = "Total: R$" + precoTotal.toFixed(2).replace(".", ",");
}

// Adiciona ao carrinho (localStorage)
function finalizar() {
  let tamanhoSelecionado = document.querySelector(".Quantidademl.selecionado");
  if (!tamanhoSelecionado) {
    alert("Selecione o tamanho do açaí!");
    return;
  }

  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  let tamanho = tamanhoSelecionado.getAttribute("data-tamanho");
  let precoBase = parseFloat(tamanhoSelecionado.getAttribute("data-preco"));

  let coberturas = [...document.querySelectorAll(".sabor.selecionado[data-tipo='cobertura']")].map(e => e.textContent.trim());
  let acompanhamentos = [...document.querySelectorAll(".sabor.selecionado[data-tipo='acompanhamento']")].map(e => e.textContent.trim());

  let extras = [...document.querySelectorAll(".sabor.selecionado[data-tipo='extra']")].map(e => {
    return {
      nome: e.childNodes[0].textContent.trim(),
      preco: parseFloat(e.getAttribute("data-preco"))
    };
  });

  // Calcula subtotal
  let subtotal = precoBase + extras.reduce((sum, e) => sum + e.preco, 0);
  if (coberturas.length > 1) subtotal += (coberturas.length - 1) * 1;
  if (acompanhamentos.length > 3) subtotal += (acompanhamentos.length - 3) * 1;

  // Adiciona ao carrinho
  carrinho.push({
    produto: "Açaí",
    tamanho: tamanho,
    coberturas: coberturas,
    acompanhamentos: acompanhamentos,
    extras: extras,
    preco: precoBase,
    subtotal: subtotal
  });

  localStorage.setItem("carrinho", JSON.stringify(carrinho));

  // alert("Açaí adicionado ao carrinho com sucesso!");
  window.location.href = "carrinho.html"; 
}