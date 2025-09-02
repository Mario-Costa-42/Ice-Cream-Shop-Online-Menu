let paginaAtual = 0;
const paginas = document.querySelectorAll(".pagina");

function mostrarPagina(index) {
    paginas.forEach(p => p.classList.remove("ativa"));
    paginas[index].classList.add("ativa");
    paginaAtual = index;
}
function proximaPagina() { if (paginaAtual < paginas.length-1) mostrarPagina(paginaAtual+1); }
function paginaAnterior() { if (paginaAtual > 0) mostrarPagina(paginaAtual-1); }

function carregarCarrinho() {
      let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
      let container = document.getElementById("carrinho");
      container.innerHTML = ""; 
      let container2 = document.getElementById("carrinho2");
      container2.innerHTML = "";

      if (carrinho.length > 0) {
        let totalGeral = 0;
        let listaPedidos = "";

        carrinho.forEach((item, index) => {
          let divItem = document.createElement("div");
          divItem.style.border = "1px solid #ccc";
          divItem.style.padding = "10px";
          divItem.style.margin = "10px 0";
          divItem.style.borderRadius = "8px";
          divItem.style.background = "#f9f9f9";

          let descricao = "";

          if (item.produto === "Milkshake") {
            descricao = `${item.produto} - ${item.nome} x${item.quantidade} = R$ ${item.subtotal.toFixed(2).replace(".", ",")}`;
          } else if (item.produto === "Açaí") {
            let extras = item.extras.map(e => `${e.nome} (+R$ ${e.preco.toFixed(2).replace(".", ",")})`).join(", ");
            descricao = `${item.produto} ${item.tamanho} - Coberturas: ${item.coberturas.join(", ")} - Acompanhamentos: ${item.acompanhamentos.join(", ")} - Extras: ${extras || "Nenhum"} = R$ ${item.subtotal.toFixed(2).replace(".", ",")}`;
          }

          let span = document.createElement("span");
          span.textContent = descricao;

          let btnRemover = document.createElement("button");
          btnRemover.textContent = "❌ Cancelar";
          btnRemover.style.marginLeft = "10px";
          btnRemover.style.background = "#ff4d4d";
          btnRemover.style.color = "#fff";
          btnRemover.style.border = "none";
          btnRemover.style.padding = "5px 10px";
          btnRemover.style.cursor = "pointer";
          btnRemover.style.borderRadius = "6px";

          btnRemover.onclick = () => {
            removerItem(index);
          };

          divItem.appendChild(span);
          divItem.appendChild(btnRemover);
          container.appendChild(divItem);

          totalGeral += item.subtotal;
          listaPedidos += `- ${descricao}\n`;
        });

        let totalP = document.createElement("h2");
        totalP.textContent = "Total: R$ " + totalGeral.toFixed(2).replace(".", ",");
        container.appendChild(totalP);
        container2.appendChild(totalP.cloneNode(true));

        localStorage.setItem("resumoPedido", listaPedidos + "\nTotal: R$ " + totalGeral.toFixed(2).replace(".", ","));
      } else {
        container.textContent = "Carrinho vazio.";
      }
    }

    function removerItem(index) {
      let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
      carrinho.splice(index, 1); 
      localStorage.setItem("carrinho", JSON.stringify(carrinho));
      carregarCarrinho();
    }

    function mostrarOpcaoPagamento() {
      let opcao = document.getElementById("pagamento").value;
      document.getElementById("pixInfo").style.display = (opcao === "pix") ? "block" : "none";
      document.getElementById("dinheiroInfo").style.display = (opcao === "dinheiro") ? "block" : "none";
    }

    function copiarPix() {
      let chavePix = "45.371.060/0001-59";
      navigator.clipboard.writeText(chavePix);
      alert("Chave Pix copiada!");
    }

    function enviarWhatsapp() {
      let resumo = localStorage.getItem("resumoPedido") || "";
      let pagamento = document.getElementById("pagamento").value;
      let textoPagamento = "";

      if (pagamento === "pix") {
        textoPagamento = "\nForma de pagamento: Pix ✅";
      } else if (pagamento === "dinheiro") {
        let troco = document.getElementById("troco").value;
        textoPagamento = `\nForma de pagamento: Dinheiro ✅ ${troco ? "(Troco para R$" + troco + ")" : ""}`;
      } else {
        textoPagamento = "\nForma de pagamento: Não informado ⚠️";
      }

      let textoFinal = "📋 Pedido:\n" + resumo + textoPagamento;

      let numero = "5532984976952"; 
      let url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(textoFinal);

      window.location.href = url;
    }

    carregarCarrinho();