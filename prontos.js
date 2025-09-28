// const precos = {
//   "Classico": { ml300: 14.50, ml500: 19.50 },
//   "Ovomaltine": { ml300: 18.00, ml500: 23.00 },
//   "KitKat": { ml300: 18.00, ml500: 23.00 },
//   "Kids": { ml300: 15.00, ml500: 20.00 },
//   "Tropical": { ml300: 20.00, ml500: 24.00 },
//   "Nutella": { ml300: 21.00, ml500: 26.00 }
// };

// let selecionado = { sabor: null, volume: null, preco: null };

// function selectContainer(el) {
//   document.querySelectorAll(".container").forEach(c => {
//     c.classList.remove("selected");
//     c.querySelector("input[type='radio']").checked = false;
//   });

//   el.classList.add("selected");
//   el.querySelector("input[type='radio']").checked = true;

//   const sabor = el.querySelector("input[type='radio']").value;
//   selecionado.sabor = sabor;

//   if (precos[sabor]) {
//     document.getElementById("saborSelecionado").textContent = sabor;

//     document.getElementById("preco300").textContent = 
//       "300ml - \nR$" + precos[sabor].ml300.toFixed(2).replace(".", ",");
//     document.getElementById("preco500").textContent = 
//       "500ml - \nR$" + precos[sabor].ml500.toFixed(2).replace(".", ",");
    
//     // Define os dados para o clique
//     document.getElementById("preco300").onclick = () => {
//       selecionado.volume = "300ml";
//       selecionado.preco = precos[sabor].ml300.toFixed(2).replace(".", ",");
//       document.getElementById("preco300").classList.add("selecionado");
//       document.getElementById("preco500").classList.remove("selecionado");
//     };

//     document.getElementById("preco500").onclick = () => {
//       selecionado.volume = "500ml";
//       selecionado.preco = precos[sabor].ml500.toFixed(2).replace(".", ",");
//       document.getElementById("preco500").classList.add("selecionado");
//       document.getElementById("preco300").classList.remove("selecionado");
//     };
//   }

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

//   // Recupera o carrinho salvo no localStorage
//   let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

//   // Adiciona o item selecionado
//   carrinho.push(selecionado);

//   // Salva novamente no localStorage
//   localStorage.setItem("carrinho", JSON.stringify(carrinho));

//   alert(`${selecionado.sabor} ${selecionado.volume} ${selecionado.preco} adicionado ao carrinho!`);
//   window.location.href = "carrinho.html";
// }
























// const precos = {
//   "Classico": { ml300: 14.50, ml500: 19.50 },
//   "Ovomaltine": { ml300: 18.00, ml500: 23.00 },
//   "KitKat": { ml300: 18.00, ml500: 23.00 },
//   "Kids": { ml300: 15.00, ml500: 20.00 },
//   "Tropical": { ml300: 20.00, ml500: 24.00 },
//   "Nutella": { ml300: 21.00, ml500: 26.00 }
// };

// let selecionado = {produto:"Escolhas da Casa", sabor: null, volume: null, preco: null, subtotal: null};

// function selectContainer(el) {
//   // Limpa seleção anterior
//   document.querySelectorAll(".container").forEach(c => {
//     c.classList.remove("selected");
//     c.querySelector("input[type='radio']").checked = false;
//   });

//   // Seleciona o atual
//   el.classList.add("selected");
//   el.querySelector("input[type='radio']").checked = true;

//   const sabor = el.querySelector("input[type='radio']").value;
//   selecionado.sabor = sabor;
//   selecionado.volume = null; // reseta volume ao trocar sabor
//   selecionado.preco = null;

//   // Atualiza a seção de preços
//   // if (precos[sabor]) {
//   //   document.getElementById("saborSelecionado").textContent = sabor;

//   //   const p300 = document.getElementById("preco300");
//   //   const p500 = document.getElementById("preco500");

//   //   p300.textContent = `300ml - \nR$ ${precos[sabor].ml300.toFixed(2).replace(".", ",")}`;
//   //   p500.textContent = `500ml - \nR$ ${precos[sabor].ml500.toFixed(2).replace(".", ",")}`;

//   //   // Remove destaque anterior
//   //   p300.classList.remove("selecionado");
//   //   p500.classList.remove("selecionado");

//   //   // Define clique para selecionar volume
//   //   p300.onclick = () => {
//   //     selecionado.volume = "300ml";
//   //     selecionado.preco = precos[sabor].ml300.toFixed(2).replace(".", ",");
//   //     p300.classList.add("selecionado");
//   //     p500.classList.remove("selecionado");
//   //   };

//   //   p500.onclick = () => {
//   //     selecionado.volume = "500ml";
//   //     selecionado.preco = precos[sabor].ml500.toFixed(2).replace(".", ",");
//   //     p500.classList.add("selecionado");
//   //     p300.classList.remove("selecionado");
//   //   };
//   // }

//   if (precos[sabor]) {
//   document.getElementById("saborSelecionado").textContent = sabor;

//   const p300 = document.getElementById("preco300");
//   const p500 = document.getElementById("preco500");

//   // Exibe formatado na tela (com vírgula)
//   p300.textContent = `300ml - \nR$ ${precos[sabor].ml300.toFixed(2).replace(".", ",")}`;
//   p500.textContent = `500ml - \nR$ ${precos[sabor].ml500.toFixed(2).replace(".", ",")}`;

//   // Remove destaque anterior
//   p300.classList.remove("selecionado");
//   p500.classList.remove("selecionado");

//   // Define clique para selecionar volume
//   p300.onclick = () => {
//     selecionado.volume = "300ml";
//     selecionado.preco = parseFloat(precos[sabor].ml300); // valor em float
//     p300.classList.add("selecionado");
//     p500.classList.remove("selecionado");
//   };

//   p500.onclick = () => {
//     selecionado.volume = "500ml";
//     selecionado.preco = parseFloat(precos[sabor].ml500); // valor em float
//     p500.classList.add("selecionado");
//     p300.classList.remove("selecionado");
//   };
// }


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

//   // Recupera o carrinho do localStorage
//   let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

//   if (selecionado.preco === isNaN) {
//     alert("Erro ao adicionar ao carrinho. Preço inválido.");
//   } else {
//     // Adiciona o item selecionado
//     carrinho.push({ ...selecionado }); // clone do objeto
//   }

//   // Salva novamente
//   localStorage.setItem("carrinho", JSON.stringify(carrinho));

//   alert(`${selecionado.sabor} ${selecionado.volume} R$${selecionado.preco} adicionado ao carrinho!`);

//   // Redireciona para carrinho.html
//   window.location.href = "carrinho.html";
// }




const precos = {
  "Classico": { ml300: 14.50, ml500: 19.50 },
  "Ovomaltine": { ml300: 18.00, ml500: 23.00 },
  "KitKat": { ml300: 18.00, ml500: 23.00 },
  "Kids": { ml300: 15.00, ml500: 20.00 },
  "Tropical": { ml300: 20.00, ml500: 24.00 },
  "Nutella": { ml300: 21.00, ml500: 26.00 }
};

let selecionado = {
  produto: "Escolhas da Casa",
  sabor: null,
  volume: null,
  preco: null,
  subtotal: null
};

function selectContainer(el) {
  // Limpa seleção anterior
  document.querySelectorAll(".container").forEach(c => {
    c.classList.remove("selected");
    c.querySelector("input[type='radio']").checked = false;
  });

  // Seleciona o atual
  el.classList.add("selected");
  el.querySelector("input[type='radio']").checked = true;

  const sabor = el.querySelector("input[type='radio']").value;
  selecionado.sabor = sabor;
  selecionado.volume = null;
  selecionado.preco = null;
  selecionado.subtotal = null;

  if (precos[sabor]) {
    document.getElementById("saborSelecionado").textContent = sabor;

    const p300 = document.getElementById("preco300");
    const p500 = document.getElementById("preco500");

    // Exibe valores formatados (com vírgula)
    p300.textContent = `300ml - \nR$ ${precos[sabor].ml300.toFixed(2).replace(".", ",")}`;
    p500.textContent = `500ml - \nR$ ${precos[sabor].ml500.toFixed(2).replace(".", ",")}`;

    // Remove destaque anterior
    p300.classList.remove("selecionado");
    p500.classList.remove("selecionado");

    // Clique 300ml
    p300.onclick = () => {
      selecionado.volume = "300ml";
      selecionado.preco = precos[sabor].ml300; // float
      selecionado.subtotal = selecionado.preco; // salva subtotal
      p300.classList.add("selecionado");
      p500.classList.remove("selecionado");
    };

    // Clique 500ml
    p500.onclick = () => {
      selecionado.volume = "500ml";
      selecionado.preco = precos[sabor].ml500; // float
      selecionado.subtotal = selecionado.preco; // salva subtotal
      p500.classList.add("selecionado");
      p300.classList.remove("selecionado");
    };
  }

  // Mostra a seção de preços e oculta escolhas
  document.getElementById("sectionEscolhas").style.display = "none";
  document.getElementById("sectionPrecos").style.display = "flex";
  document.getElementById("linkHome").style.display = "none";
}

function voltar() {
  document.getElementById("sectionEscolhas").style.display = "block";
  document.getElementById("sectionPrecos").style.display = "none";
  document.getElementById("linkHome").style.display = "inline-block";
}

function finalizar() {
  if (!selecionado.sabor || !selecionado.volume) {
    alert("Por favor, selecione um sabor e o volume!");
    return;
  }

  if (isNaN(selecionado.preco)) {
    alert("Erro ao adicionar ao carrinho. Preço inválido.");
    return;
  }

  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  // adiciona o item com subtotal
  carrinho.push({ ...selecionado });

  localStorage.setItem("carrinho", JSON.stringify(carrinho));

  alert(`${selecionado.sabor} ${selecionado.volume} R$${selecionado.preco.toFixed(2).replace(".", ",")} adicionado ao carrinho!`);

  window.location.href = "carrinho.html";
}
