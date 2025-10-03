// const precos = {
//   "Classico": { ml300: 14.50, ml500: 19.50 },
//   "Ovomaltine": { ml300: 18.00, ml500: 23.00 },
//   "KitKat": { ml300: 18.00, ml500: 23.00 },
//   "Kids": { ml300: 15.00, ml500: 20.00 },
// };

// let selecionado = {
//   produto: "Escolhas da Casa",
//   sabor: null,
//   volume: null,
//   preco: null,
//   subtotal: null
// };

// function selectContainer(el) {
//   // Limpa seleção anterior
//   document.querySelectorAll(".containerDeSabores").forEach(c => {
//     c.classList.remove("selected");
//     c.querySelector("input[type='radio']").checked = false;
//   });

//   // Seleciona o atual
//   el.classList.add("selected");
//   el.querySelector("input[type='radio']").checked = true;

//   const sabor = el.querySelector("input[type='radio']").value;
//   selecionado.sabor = sabor;
//   selecionado.volume = null;
//   selecionado.preco = null;
//   selecionado.subtotal = null;

//   if (precos[sabor]) {
//     document.getElementById("saborSelecionado").textContent = sabor;

//     const p300 = document.getElementById("preco300");
//     const p500 = document.getElementById("preco500");

//     // Exibe valores formatados (com vírgula)
//     p300.textContent = `300ml - \nR$ ${precos[sabor].ml300.toFixed(2).replace(".", ",")}`;
//     p500.textContent = `500ml - \nR$ ${precos[sabor].ml500.toFixed(2).replace(".", ",")}`;

//     // Remove destaque anterior
//     p300.classList.remove("selecionado");
//     p500.classList.remove("selecionado");

//     // Clique 300ml
//     p300.onclick = () => {
//       selecionado.volume = "300ml";
//       selecionado.preco = precos[sabor].ml300; // float
//       selecionado.subtotal = selecionado.preco; // salva subtotal
//       p300.classList.add("selecionado");
//       p500.classList.remove("selecionado");
//     };

//     // Clique 500ml
//     p500.onclick = () => {
//       selecionado.volume = "500ml";
//       selecionado.preco = precos[sabor].ml500; // float
//       selecionado.subtotal = selecionado.preco; // salva subtotal
//       p500.classList.add("selecionado");
//       p300.classList.remove("selecionado");
//     };
//   }

//   // Mostra a seção de preços e oculta escolhas
//   document.getElementById("sectionEscolhas").style.display = "none";
//   document.getElementById("sectionPrecos").style.display = "flex";
//   document.getElementById("linkHome").style.display = "none";
// }

// function voltar() {
//   document.getElementById("sectionEscolhas").style.display = "block";
//   document.getElementById("sectionPrecos").style.display = "none";
//   document.getElementById("linkHome").style.display = "inline-block";
// }

// function finalizar() {
//   if (!selecionado.sabor || !selecionado.volume) {
//     alert("Por favor, selecione um sabor e o volume!");
//     return;
//   }

//   if (isNaN(selecionado.preco)) {
//     alert("Erro ao adicionar ao carrinho. Preço inválido.");
//     return;
//   }

//   let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

//   // adiciona o item com subtotal
//   carrinho.push({ ...selecionado });

//   localStorage.setItem("carrinho", JSON.stringify(carrinho));

//   // alert(`${selecionado.sabor} ${selecionado.volume} R$${selecionado.preco.toFixed(2).replace(".", ",")} adicionado ao carrinho!`);

//   window.location.href = "carrinho.html";
// }



























































































// const precos = {
//   "Açaí trufado de Nutella": { ml300: 24.00, ml500: 28.00 },
//   "Açaí trufado creme de ninho": { ml300: 20.00, ml500: 24.00 },
//   "Açaí trufado 2 amores": { ml300: 22.00, ml500: 26.00 },
//   "Açaí trufado creme paçoca": { ml300: 20.00, ml500: 24.00 },
// };

// let paginaAtual = 0;
// const paginas = document.querySelectorAll(".pagina");

// function mostrarPagina(index) {
//   paginas.forEach((p, i) => p.style.display = i === index ? "block" : "none");
//   paginaAtual = index;
// }

// function proximaPagina() {
//   if (paginaAtual < paginas.length - 1) {
//     mostrarPagina(paginaAtual + 1);
//   }
// }

// function paginaAnterior() {
//   if (paginaAtual > 0) {
//     mostrarPagina(paginaAtual - 1);
//   }
// }

// mostrarPagina(0);

// let selecionado = {
//   produto: "Copos Trufados",
//   sabor: null,
//   volume: null,
//   preco: null,
//   subtotal: 0,
//   adicionais: []
// };

// function selectContainer(el) {
//   document.querySelectorAll(".containerDeSabores").forEach(c => {
//     c.classList.remove("selected");
//     c.querySelector("input[type='radio']").checked = false;
//   });

//   el.classList.add("selected");
//   el.querySelector("input[type='radio']").checked = true;

//   const sabor = el.querySelector("input[type='radio']").value;
//   selecionado.sabor = sabor;
//   selecionado.volume = null;
//   selecionado.preco = null;
//   selecionado.subtotal = null;

//   if (precos[sabor]) {
//     document.getElementById("saborSelecionado").textContent = sabor;

//     const p300 = document.getElementById("preco300");
//     const p500 = document.getElementById("preco500");

//     p300.textContent = `300ml - R$ ${precos[sabor].ml300.toFixed(2).replace(".", ",")}`;
//     p500.textContent = `500ml - R$ ${precos[sabor].ml500.toFixed(2).replace(".", ",")}`;

//     p300.onclick = () => {
//       selecionado.volume = "300ml";
//       selecionado.preco = precos[sabor].ml300;
//       selecionado.subtotal = selecionado.preco;
//       atualizarTotal();
//     };

//     p500.onclick = () => {
//       selecionado.volume = "500ml";
//       selecionado.preco = precos[sabor].ml500;
//       selecionado.subtotal = selecionado.preco;
//       atualizarTotal();
//     };
//   }

//   proximaPagina();
// }

// document.querySelectorAll(".sabor").forEach(el => {
//   el.onclick = () => {
//     el.classList.toggle("selected");
//     const tipo = el.getAttribute("data-tipo");
//     const precoExtra = parseFloat(el.getAttribute("data-preco")) || 0;

//     if (el.classList.contains("selected")) {
//       selecionado.adicionais.push({ nome: el.textContent.trim(), tipo, preco: precoExtra });
//       selecionado.subtotal += precoExtra;
//     } else {
//       selecionado.adicionais = selecionado.adicionais.filter(item => item.nome !== el.textContent.trim());
//       selecionado.subtotal -= precoExtra;
//     }
//     atualizarTotal();
//   };
// });

// function atualizarTotal() {
//   const total = selecionado.subtotal || 0;
//   document.getElementById("precoTotal").textContent = `Total: R$${total.toFixed(2).replace(".", ",")}`;
// }

// function finalizar() {
//   if (!selecionado.sabor || !selecionado.volume) {
//     alert("Por favor, selecione um sabor e o volume!");
//     return;
//   }

//   let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
//   carrinho.push({ ...selecionado });
//   localStorage.setItem("carrinho", JSON.stringify(carrinho));

//   window.location.href = "../carrinho.html";
// }



// ------- CONFIGURAÇÃO DE REGRAS E PREÇOS EXTRA
const regrasGratis = {
  "300ml": { acompanhamentos: 2, coberturas: 1, frutas: 1 },
  "500ml": { acompanhamentos: 3, coberturas: 1, frutas: 1 },
  "default": { acompanhamentos: 3, coberturas: 1, frutas: 1 }
};

const precosExtras = {
  cobertura: 1.00,
  acompanhamento: 1.00,
  frutas: 1.00,
};

const precos = {
  "Açaí trufado de Nutella": { ml300: 24.00, ml500: 28.00 },
  "Açaí trufado creme de ninho": { ml300: 20.00, ml500: 24.00 },
  "Açaí trufado 2 amores": { ml300: 22.00, ml500: 26.00 },
  "Açaí trufado creme paçoca": { ml300: 20.00, ml500: 24.00 },
};

function getRegra(tamanho) {
  return regrasGratis[tamanho] || regrasGratis["default"];
}

// ------- NAVEGAÇÃO ENTRE PÁGINAS
let paginaAtual = 0;
const paginas = document.querySelectorAll(".pagina");

function mostrarPagina(index) {
  paginas.forEach((p, i) => p.style.display = i === index ? "block" : "none");
  paginaAtual = index;
}
function proximaPagina() { if (paginaAtual < paginas.length - 1) mostrarPagina(paginaAtual + 1); }
function paginaAnterior() { if (paginaAtual > 0) mostrarPagina(paginaAtual - 1); }

mostrarPagina(0);

// ------- SELEÇÃO DE SABOR E TAMANHO
let selecionado = {
  produto: "Copos Trufados",
  sabor: null,
  tamanho: null,
  preco: 0,
  subtotal: 0,
  coberturas: [],
  acompanhamentos: [],
  frutas: [],
  extras: []
};

function selectContainer(el) {
  document.querySelectorAll(".containerDeSabores").forEach(c => {
    c.classList.remove("selected");
    c.querySelector("input[type='radio']").checked = false;
  });

  el.classList.add("selected");
  el.querySelector("input[type='radio']").checked = true;

  const sabor = el.querySelector("input[type='radio']").value;
  selecionado.sabor = sabor;
  selecionado.tamanho = null;
  selecionado.subtotal = 0;

  if (precos[sabor]) {
    document.getElementById("saborSelecionado").textContent = sabor;

    const p300 = document.getElementById("preco300");
    const p500 = document.getElementById("preco500");

    p300.textContent = `300ml - R$ ${precos[sabor].ml300.toFixed(2).replace(".", ",")}`;
    p500.textContent = `500ml - R$ ${precos[sabor].ml500.toFixed(2).replace(".", ",")}`;

    p300.onclick = () => {
      selecionado.tamanho = "300ml";
      selecionado.preco = precos[sabor].ml300;
      atualizarPreco();
      p300.classList.add("selecionado");
      p500.classList.remove("selecionado");
    };
    p500.onclick = () => {
      selecionado.tamanho = "500ml";
      selecionado.preco = precos[sabor].ml500;
      atualizarPreco();
      p500.classList.add("selecionado");
      p300.classList.remove("selecionado");
    };
  }

  proximaPagina();
}

// ------- SELEÇÃO DE COBERTURAS, ACOMPANHAMENTOS E EXTRAS
document.querySelectorAll(".sabor").forEach(el => {
  el.addEventListener("click", () => {
    el.classList.toggle("selecionado");
    atualizarPreco();
  });
});

// ------- CÁLCULO DO TOTAL
function atualizarPreco() {
  let subtotal = selecionado.preco || 0;
  const regra = getRegra(selecionado.tamanho);

  // Coberturas
  const coberturas = [...document.querySelectorAll(".sabor.selecionado[data-tipo='cobertura']")]
    .map(e => e.textContent.trim());
  if (coberturas.length > regra.coberturas) {
    subtotal += (coberturas.length - regra.coberturas) * precosExtras.cobertura;
  }
  selecionado.coberturas = coberturas;

  // Acompanhamentos
  const acompanhamentos = [...document.querySelectorAll(".sabor.selecionado[data-tipo='acompanhamento']")]
    .map(e => e.textContent.trim());
  if (acompanhamentos.length > regra.acompanhamentos) {
    subtotal += (acompanhamentos.length - regra.acompanhamentos) * precosExtras.acompanhamento;
  }
  selecionado.acompanhamentos = acompanhamentos;

  // frutas
  const frutas = [...document.querySelectorAll(".sabor.selecionado[data-tipo='frutas']")]
    .map(e => e.textContent.trim());
  if (frutas.length > regra.frutas) {
    subtotal += (frutas.length - regra.frutas) * precosExtras.frutas;
  }
  selecionado.frutas = frutas;

  // Extras
  const extras = [...document.querySelectorAll(".sabor.selecionado[data-tipo='extra']")]
    .map(e => ({
      nome: e.childNodes[0].textContent.trim(),
      preco: parseFloat(e.getAttribute("data-preco")) || 0
    }));
  extras.forEach(e => subtotal += e.preco);
  selecionado.extras = extras;

  selecionado.subtotal = subtotal;

  const visor = document.getElementById("precoTotal");
  if (visor) visor.textContent = "Total: R$" + subtotal.toFixed(2).replace(".", ",");
}

// ------- BADGE CARRINHO
function atualizarBadgeCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  const badge = document.getElementById("carrinho-contador");
  if (!badge) return;
  if (carrinho.length > 0) {
    badge.style.display = "inline";
    badge.textContent = carrinho.length;
  } else {
    badge.style.display = "none";
  }
}

// ------- FINALIZAR
function finalizar() {
  if (!selecionado.sabor || !selecionado.tamanho) {
    alert("Selecione um sabor e o tamanho!");
    return;
  }

  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  const novoItem = { ...selecionado };

  const editIndex = localStorage.getItem("editarIndex");
  if (editIndex !== null) {
    carrinho[editIndex] = novoItem;
    localStorage.removeItem("editarIndex");
  } else {
    carrinho.push(novoItem);
  }

  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  atualizarBadgeCarrinho();
  window.location.href = "../carrinho.html";
}

// ------- PRÉ-PREENCHER EM MODO EDIÇÃO
function preencherEdicaoSeNecessario() {
  const editIndex = localStorage.getItem("editarIndex");
  if (editIndex === null) return;

  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  const item = carrinho[editIndex];
  if (!item || item.produto !== "Copos Trufados") return;

  selecionado = item;

  // Coberturas
  (item.coberturas || []).forEach(c => {
    const div = [...document.querySelectorAll(".sabor[data-tipo='cobertura']")]
      .find(el => el.textContent.trim() === c);
    if (div) div.classList.add("selecionado");
  });

  // Acompanhamentos
  (item.acompanhamentos || []).forEach(a => {
    const div = [...document.querySelectorAll(".sabor[data-tipo='acompanhamento']")]
      .find(el => el.textContent.trim() === a);
    if (div) div.classList.add("selecionado");
  });

  // Extras
  (item.extras || []).forEach(e => {
    const div = [...document.querySelectorAll(".sabor[data-tipo='extra']")]
      .find(el => el.childNodes[0].textContent.trim() === e.nome);
    if (div) div.classList.add("selecionado");
  });

  const btn = document.getElementById("btnAdicionar");
  if (btn) btn.textContent = "Salvar Alterações";

  atualizarPreco();
}

preencherEdicaoSeNecessario();
