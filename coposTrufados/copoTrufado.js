// // ------- CONFIGURAÇÃO DE REGRAS E PREÇOS EXTRA
// const regrasGratis = {
//   "300ml": { acompanhamentos: 2, coberturas: 1, frutas: 1 },
//   "500ml": { acompanhamentos: 3, coberturas: 1, frutas: 1 },
//   "default": { acompanhamentos: 3, coberturas: 1, frutas: 1 }
// };

// const precosExtras = {
//   cobertura: 1.00,
//   acompanhamento: 1.00,
// };

// const acompanhamento = document.getElementById("acompanhamento");

// const precos = {
//   "Açaí trufado de Nutella": { ml300: 24.00, ml500: 28.00 },
//   "Açaí trufado creme de ninho": { ml300: 20.00, ml500: 24.00 },
//   "Açaí trufado 2 amores": { ml300: 22.00, ml500: 26.00 },
//   "Açaí trufado creme paçoca": { ml300: 20.00, ml500: 24.00 },
// };

// function getRegra(tamanho) {
//   return regrasGratis[tamanho] || regrasGratis["default"];
// }

// // ------- NAVEGAÇÃO ENTRE PÁGINAS
// let paginaAtual = 0;
// const paginas = document.querySelectorAll(".pagina");

// function mostrarPagina(index) {
//   paginas.forEach((p, i) => p.style.display = i === index ? "block" : "none");
//   paginaAtual = index;
// }
// function proximaPagina() { if (paginaAtual < paginas.length - 1) mostrarPagina(paginaAtual + 1); }
// function paginaAnterior() { if (paginaAtual > 0) mostrarPagina(paginaAtual - 1); }

// mostrarPagina(0);

// // ------- SELEÇÃO DE SABOR E TAMANHO
// let selecionado = {
//   produto: "Copos Trufados",
//   sabor: null,
//   tamanho: null,
//   preco: 0,
//   subtotal: 0,
//   coberturas: [],
//   acompanhamentos: [],
//   frutas: [],
//   extras: []
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
//   selecionado.tamanho = null;
//   selecionado.subtotal = 0;

//   if (precos[sabor]) {
//     document.getElementById("saborSelecionado").textContent = sabor;

//     const p300 = document.getElementById("preco300");
//     const p500 = document.getElementById("preco500");

//     p300.textContent = `300ml - R$ ${precos[sabor].ml300.toFixed(2).replace(".", ",")}`;
//     p500.textContent = `500ml - R$ ${precos[sabor].ml500.toFixed(2).replace(".", ",")}`;

//     p300.onclick = () => {
//       selecionado.tamanho = "300ml";
//       selecionado.preco = precos[sabor].ml300;
//       atualizarPreco();
//       p300.classList.add("selecionado");
//       p500.classList.remove("selecionado");
//       acompanhamento.innerText = "Escolha 2 acompanhamentos grátis";
//     };
//     p500.onclick = () => {
//       selecionado.tamanho = "500ml";
//       selecionado.preco = precos[sabor].ml500;
//       atualizarPreco();
//       p500.classList.add("selecionado");
//       p300.classList.remove("selecionado");
//       acompanhamento.innerText = "Escolha 3 acompanhamentos grátis";
//     };
//   }

//   proximaPagina();
// }

// // ------- SELEÇÃO DE COBERTURAS, ACOMPANHAMENTOS E EXTRAS
// document.querySelectorAll(".sabor").forEach(el => {
//   el.addEventListener("click", () => {
//     el.classList.toggle("selecionado");
//     atualizarPreco();
//   });
// });

// // ------- CÁLCULO DO TOTAL
// function atualizarPreco() {
//   let subtotal = selecionado.preco || 0;
//   const regra = getRegra(selecionado.tamanho);

//   // Coberturas
//   const coberturas = [...document.querySelectorAll(".sabor.selecionado[data-tipo='cobertura']")]
//     .map(e => e.textContent.trim());
//   if (coberturas.length > regra.coberturas) {
//     subtotal += (coberturas.length - regra.coberturas) * precosExtras.cobertura;
//   }
//   selecionado.coberturas = coberturas;

//   // Acompanhamentos
//   const acompanhamentos = [...document.querySelectorAll(".sabor.selecionado[data-tipo='acompanhamento']")]
//     .map(e => e.textContent.trim());
//   if (acompanhamentos.length > regra.acompanhamentos) {
//     subtotal += (acompanhamentos.length - regra.acompanhamentos) * precosExtras.acompanhamento;
//   }
//   selecionado.acompanhamentos = acompanhamentos;

//   // ------- FRUTAS (preços individuais) -------
// const frutasSelecionadas = [...document.querySelectorAll(".sabor.selecionado[data-tipo='frutas']")];

// // pega o número máximo de frutas grátis permitido
// const regraFrutasGratis = getRegra(selecionado.tamanho).frutas || 0;

// // cria um array com nome e preço das frutas selecionadas
// const frutas = frutasSelecionadas.map(e => ({
//   nome: e.querySelector("span.preco")
//     ? e.textContent.replace(e.querySelector("span.preco").textContent, "").trim()
//     : e.textContent.trim(),
//   preco: parseFloat(e.getAttribute("data-preco")) || 0
// }));

// // se o cliente escolheu mais frutas que o limite grátis, cobra pelas extras
// if (frutas.length > regraFrutasGratis) {
//   // pega apenas as frutas pagas (a partir do limite grátis)
//   const frutasPagas = frutas.slice(regraFrutasGratis);
//   frutasPagas.forEach(f => subtotal += f.preco);
// }

// // salva no objeto selecionado
// selecionado.frutas = frutas.map(f => f.nome);



//   // Extras
//   const extras = [...document.querySelectorAll(".sabor.selecionado[data-tipo='extra']")]
//     .map(e => ({
//       nome: e.childNodes[0].textContent.trim(),
//       preco: parseFloat(e.getAttribute("data-preco")) || 0
//     }));
//   extras.forEach(e => subtotal += e.preco);
//   selecionado.extras = extras;

//   selecionado.subtotal = subtotal;

//   const visor = document.getElementById("precoTotal");
//   if (visor) visor.textContent = "Total: R$" + subtotal.toFixed(2).replace(".", ",");
// }

// // ------- BADGE CARRINHO
// function atualizarBadgeCarrinho() {
//   const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
//   const badge = document.getElementById("carrinho-contador");
//   if (!badge) return;
//   if (carrinho.length > 0) {
//     badge.style.display = "inline";
//     badge.textContent = carrinho.length;
//   } else {
//     badge.style.display = "none";
//   }
// }

// // ------- FINALIZAR
// function finalizar() {
//   if (!selecionado.sabor || !selecionado.tamanho) {
//     alert("Selecione um sabor e o tamanho!");
//     return;
//   }

//   const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
//   const novoItem = { ...selecionado };

//   const editIndex = localStorage.getItem("editarIndex");
//   if (editIndex !== null) {
//     carrinho[editIndex] = novoItem;
//     localStorage.removeItem("editarIndex");
//   } else {
//     carrinho.push(novoItem);
//   }

//   localStorage.setItem("carrinho", JSON.stringify(carrinho));
//   atualizarBadgeCarrinho();
//   window.location.href = "../carrinho.html";
// }

// // ------- PRÉ-PREENCHER EM MODO EDIÇÃO
// function preencherEdicaoSeNecessario() {
//   const editIndex = localStorage.getItem("editarIndex");
//   if (editIndex === null) return;

//   const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
//   const item = carrinho[editIndex];
//   if (!item || item.produto !== "Copos Trufados") return;

//   selecionado = item;

//   // Coberturas
//   (item.coberturas || []).forEach(c => {
//     const div = [...document.querySelectorAll(".sabor[data-tipo='cobertura']")]
//       .find(el => el.textContent.trim() === c);
//     if (div) div.classList.add("selecionado");
//   });

//   // Acompanhamentos
//   (item.acompanhamentos || []).forEach(a => {
//     const div = [...document.querySelectorAll(".sabor[data-tipo='acompanhamento']")]
//       .find(el => el.textContent.trim() === a);
//     if (div) div.classList.add("selecionado");
//   });

//   // Frutas
//   (item.frutas || []).forEach(a => {
//     const div = [...document.querySelectorAll(".sabor[data-tipo='frutas']")]
//       .find(el => el.textContent.trim() === a);
//     if (div) div.classList.add("selecionado");
//   });

//   // Extras
//   (item.extras || []).forEach(e => {
//     const div = [...document.querySelectorAll(".sabor[data-tipo='extra']")]
//       .find(el => el.childNodes[0].textContent.trim() === e.nome);
//     if (div) div.classList.add("selecionado");
//   });

//   const btn = document.getElementById("btnAdicionar");
//   if (btn) btn.textContent = "Salvar Alterações";

//   atualizarPreco();
// }

// preencherEdicaoSeNecessario();



// ------- CONFIGURAÇÃO DE REGRAS E PREÇOS EXTRA
const regrasGratis = {
  "300ml": { acompanhamentos: 2, coberturas: 1, frutas: 1 },
  "500ml": { acompanhamentos: 3, coberturas: 1, frutas: 1 },
  "default": { acompanhamentos: 3, coberturas: 1, frutas: 1 }
};

const precosExtras = {
  cobertura: 1.00,
  acompanhamento: 1.00,
};

const acompanhamento = document.getElementById("acompanhamento");

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
      acompanhamento.innerText = "Escolha 2 acompanhamentos grátis";
    };
    p500.onclick = () => {
      selecionado.tamanho = "500ml";
      selecionado.preco = precos[sabor].ml500;
      atualizarPreco();
      p500.classList.add("selecionado");
      p300.classList.remove("selecionado");
      acompanhamento.innerText = "Escolha 3 acompanhamentos grátis";
    };
  }

  proximaPagina();
}

// ------- SELEÇÃO DE COBERTURAS, ACOMPANHAMENTOS, FRUTAS E EXTRAS
document.querySelectorAll(".sabor").forEach(el => {
  el.addEventListener("click", () => {
    el.classList.toggle("selecionado");

    if (el.classList.contains("selecionado")) {
      el.setAttribute("data-selected-time", Date.now().toString());
    } else {
      el.removeAttribute("data-selected-time");
    }

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

  // ------- FRUTAS (com ordem de seleção) -------
  const frutasSelecionadas = [...document.querySelectorAll(".sabor.selecionado[data-tipo='frutas']")];

  // ordena pela ordem de clique
  frutasSelecionadas.sort((a, b) => {
    const ta = parseInt(a.getAttribute("data-selected-time") || "0");
    const tb = parseInt(b.getAttribute("data-selected-time") || "0");
    return ta - tb;
  });

  const frutas = frutasSelecionadas.map(e => {
    const precoSpan = e.querySelector("span.preco");
    const nome = precoSpan
      ? e.textContent.replace(precoSpan.textContent, "").trim()
      : e.textContent.trim();
    return {
      nome,
      preco: parseFloat(e.getAttribute("data-preco")) || 0
    };
  });

  const regraFrutasGratis = getRegra(selecionado.tamanho).frutas || 0;

  if (frutas.length > regraFrutasGratis) {
    const frutasPagas = frutas.slice(regraFrutasGratis);
    frutasPagas.forEach(f => subtotal += f.preco);
  }

  selecionado.frutas = frutas.map(f => f.nome);

  // ------- EXTRAS -------
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

// ------- BADGE CARRINHO -------
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

// ------- FINALIZAR -------
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

// ------- PRÉ-PREENCHER EM MODO EDIÇÃO -------
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

  // Frutas (mantém ordem original)
  (item.frutas || []).forEach((nomeFruta, index) => {
    const div = [...document.querySelectorAll(".sabor[data-tipo='frutas']")]
      .find(el => {
        const precoSpan = el.querySelector("span.preco");
        const nomeEl = precoSpan ? el.textContent.replace(precoSpan.textContent, "").trim() : el.textContent.trim();
        return nomeEl === nomeFruta;
      });
    if (div) {
      div.classList.add("selecionado");
      const base = Date.now();
      div.setAttribute("data-selected-time", String(base + index));
    }
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
