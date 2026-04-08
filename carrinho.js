// Navegação entre páginas do carrinho
let paginaAtual = 0;
const paginas = document.querySelectorAll(".pagina");

function mostrarPagina(index) {
  paginas.forEach(p => p.classList.remove("ativa"));
  paginas[index].classList.add("ativa");
  paginaAtual = index;
}

function proximaPagina() {
  const carrinho = getCarrinho();
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio.");
    return;
  }
  if (paginaAtual < paginas.length - 1) mostrarPagina(paginaAtual + 1);
}

function paginaAnterior() {
  if (paginaAtual > 0) mostrarPagina(paginaAtual - 1);
}

// Helpers carrinho
function getCarrinho() {
  return JSON.parse(localStorage.getItem("carrinho")) || [];
}

function setCarrinho(c) {
  localStorage.setItem("carrinho", JSON.stringify(c));
}

function brl(n) {
  return Number(n || 0).toFixed(2).replace(".", ",");
}

// 🔥 NOVA FUNÇÃO: alterar quantidade
function alterarQuantidade(index, delta) {
  const carrinho = getCarrinho();

  if (!carrinho[index]) return;

  if (!carrinho[index].quantidade) {
    carrinho[index].quantidade = 1;
  }

  carrinho[index].quantidade += delta;

  if (carrinho[index].quantidade < 1) {
    carrinho[index].quantidade = 1;
  }

  setCarrinho(carrinho);
  carregarCarrinho();
}

// Descrição dos itens
function descricaoItem(item) {
  const qtd = item.quantidade || 1;
  const totalItem = (item.subtotal || 0) * qtd;

  if (item.produto === "Milkshake") {
    return `${item.produto} - ${item.nome || ""} (x${qtd}) = R$ ${brl(totalItem)}`;
  }

  if (item.produto === "Açaí") {
    const extrasArr = Array.isArray(item.extras) ? item.extras : [];
    const extrasTxt = extrasArr.length
      ? extrasArr.map(e => `${e.nome} (+R$ ${brl(e.preco)})`).join(", ")
      : "Nenhum";

    const cob = (item.coberturas && item.coberturas.length)
      ? item.coberturas.join(", ")
      : "Nenhuma";

    const acomp = (item.acompanhamentos && item.acompanhamentos.length)
      ? item.acompanhamentos.join(", ")
      : "Nenhum";

    return `${item.produto} ${item.tamanho} (x${qtd}) - Coberturas: ${cob} - Acompanhamentos: ${acomp} - Extras: ${extrasTxt} = R$ ${brl(totalItem)}`;
  }

  if (item.produto === "Escolhas da Casa") {
    return `${item.produto}: ${item.sabor} ${item.volume} (x${qtd}) = R$ ${brl(totalItem)}`;
  }

  if (item.produto === "Copos Trufados") {
    const coberturas = (item.coberturas && item.coberturas.length)
      ? item.coberturas.join(", ")
      : "Nenhuma";

    const acompanhamentos = (item.acompanhamentos && item.acompanhamentos.length)
      ? item.acompanhamentos.join(", ")
      : "Nenhum";

    const frutas = (item.frutas && item.frutas.length)
      ? item.frutas.join(", ")
      : "Nenhuma";

    const extras = (item.extras && item.extras.length)
      ? item.extras.map(e => `${e.nome} (+R$ ${brl(e.preco)})`).join(", ")
      : "Nenhum";

    return `${item.produto}: ${item.sabor} ${item.tamanho} (x${qtd}) - Coberturas: ${coberturas} - Acompanhamentos: ${acompanhamentos} - Frutas: ${frutas} - Extras: ${extras} = R$ ${brl(totalItem)}`;
  }

  if (item.produto === "Vitamina") {
    return `${item.produto} - ${item.nome || ""} (x${qtd}) = R$ ${brl(totalItem)}`;
  }

  return `Item (x${qtd}) = R$ ${brl(totalItem)}`;
}

// Renderização
function carregarCarrinho() {
  const carrinho = getCarrinho();
  const container = document.getElementById("carrinho");
  const container2 = document.getElementById("carrinho2");

  container.innerHTML = "";
  container2.innerHTML = "";

  if (carrinho.length === 0) {
    container.textContent = "Carrinho vazio.";
    localStorage.setItem("resumoPedido", "");
    return;
  }

  let totalGeral = 0;
  let listaPedidos = "";

  carrinho.forEach((item, index) => {
    const qtd = item.quantidade || 1;

    const divItem = document.createElement("div");
    divItem.style.border = "1px solid #ccc";
    divItem.style.padding = "10px";
    divItem.style.margin = "10px 0";
    divItem.style.borderRadius = "8px";
    divItem.style.background = "#f9f9f9";

    const desc = descricaoItem(item);

    const span = document.createElement("span");
    span.textContent = desc;

    // 🔥 CONTROLE DE QUANTIDADE
    const qtdContainer = document.createElement("div");
    qtdContainer.style.marginTop = "10px";

    const btnMenos = document.createElement("button");
    btnMenos.textContent = "➖";
    btnMenos.onclick = () => alterarQuantidade(index, -1);

    const qtdSpan = document.createElement("span");
    qtdSpan.textContent = qtd;
    qtdSpan.style.margin = "0 10px";

    const btnMais = document.createElement("button");
    btnMais.textContent = "➕";
    btnMais.onclick = () => alterarQuantidade(index, 1);

    qtdContainer.appendChild(btnMenos);
    qtdContainer.appendChild(qtdSpan);
    qtdContainer.appendChild(btnMais);

    // Botões
    const btnEditar = document.createElement("button");
    btnEditar.textContent = "✏️ Editar";
    btnEditar.style.marginLeft = "10px";
    btnEditar.style.background = "#1976d2";
    btnEditar.style.color = "#fff";
    btnEditar.style.borderRadius = "6px";
    btnEditar.onclick = () => editarItem(index);

    const btnRemover = document.createElement("button");
    btnRemover.textContent = "❌ Cancelar";
    btnRemover.style.marginLeft = "10px";
    btnRemover.style.background = "#ff4d4d";
    btnRemover.style.color = "#fff";
    btnRemover.style.borderRadius = "6px";
    btnRemover.onclick = () => removerItem(index);

    divItem.appendChild(span);
    divItem.appendChild(qtdContainer);
    divItem.appendChild(btnEditar);
    divItem.appendChild(btnRemover);

    container.appendChild(divItem);

    // Página 2
    const resumoLinha = document.createElement("div");
    resumoLinha.textContent = `• ${desc}`;
    container2.appendChild(resumoLinha);

    totalGeral += (item.subtotal || 0) * qtd;
    listaPedidos += `- ${desc}\n`;
  });

  const totalP = document.createElement("h2");
  totalP.textContent = "Total: R$ " + brl(totalGeral);

  container.appendChild(totalP);
  container2.appendChild(totalP.cloneNode(true));

  localStorage.setItem("resumoPedido", listaPedidos + "\nTotal: R$ " + brl(totalGeral));
}

// Ações
function editarItem(index) {
  localStorage.setItem("editarIndex", String(index));
  const item = getCarrinho()[index];
  if (!item) return;

  if (item.produto === "Açaí") {
    window.location.href = "acai.html";
  } else if (item.produto === "Milkshake") {
    window.location.href = "milkshake.html";
  } else if (item.produto === "Escolhas da Casa") {
    window.location.href = "prontos.html";
  } else if (item.produto === "Copos Trufados") {
    window.location.href = "./coposTrufados/copoTrufado.html";
  } else if (item.produto === "Vitamina") {
    window.location.href = "vitamina.html";
  } else {
    alert("Não é possível editar este item.");
  }
}

function removerItem(index) {
  const carrinho = getCarrinho();
  carrinho.splice(index, 1);
  setCarrinho(carrinho);
  carregarCarrinho();
}

// Pagamento
function mostrarOpcaoPagamento() {
  const opcao = document.getElementById("pagamento").value;
  document.getElementById("pixInfo").style.display = (opcao === "pix") ? "block" : "none";
  document.getElementById("dinheiroInfo").style.display = (opcao === "dinheiro") ? "block" : "none";
}

function enviarWhatsapp() {
  const resumo = localStorage.getItem("resumoPedido") || "";
  const pagamento = document.getElementById("pagamento").value;

  let textoPagamento = "";

  if (pagamento === "pix") {
    textoPagamento = "\nForma de pagamento: Pix ✅";
  } else if (pagamento === "dinheiro") {
    const troco = document.getElementById("troco").value;
    textoPagamento = `\nForma de pagamento: Dinheiro ✅ ${troco ? "(Troco para R$" + troco + ")" : ""}`;
  } else {
    textoPagamento = "\nForma de pagamento: Não informado ⚠️";
  }

  const textoFinal = "📋 Pedido:\n" + resumo + textoPagamento;
  const numero = "5532984976952";
  const url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(textoFinal);

  window.location.href = url;
  localStorage.clear();
}

// Init
document.addEventListener("DOMContentLoaded", carregarCarrinho);
