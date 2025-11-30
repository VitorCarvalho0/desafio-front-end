let listaDeOrdem = [];
const selectOrdem = document.querySelector("#ordemSelect");
const infoProduto = document.querySelector("#infoproduto");
const descProduto = document.querySelector("#descProduto");
const imagem = document.querySelector("#imgProduto");
const selectMaterial = document.querySelector("#materialSelect");
const btn = document.querySelector("#btnEnviar");
let intervaloTempo = null;
const formulario = document.getElementById("formProducao");

async function carregarOrdem() {
  try {
    const resposta = await fetch("dados.json");
    const dados = await resposta.json();

    listaDeOrdem = dados.orders;

    preecherSelect();
  } catch (erro) {
    alert("Não foi possivelcarregar as ordem");
  }
}

function preecherSelect() {
  selectOrdem.innerHTML = `<option value="">Selecione uma ordem</option>`;

  listaDeOrdem.forEach((ordem) => {
    const novaOpcao = document.createElement("option");
    novaOpcao.value = ordem.order;
    novaOpcao.textContent = `${ordem.order} - ${ordem.productDescription}`;

    selectOrdem.appendChild(novaOpcao);
  });
}

carregarOrdem();

selectOrdem.addEventListener("change", () => {
  const idSelecionado = selectOrdem.value;

  const ordemEncontrada = listaDeOrdem.find(
    (item) => item.order === idSelecionado
  );

  if (ordemEncontrada) {
    descProduto.textContent = ordemEncontrada.productDescription;
    imagem.src = ordemEncontrada.image;
    imagem.style.display = "block";

    selectMaterial.innerHTML = `<option value="">Aguardando seleção de ordem.</option>`;
    const listaMaterial = ordemEncontrada.materials;
    listaMaterial.forEach((material) => {
      const opcaoMaterial = document.createElement("option");
      opcaoMaterial.value = material.materialCode;
      opcaoMaterial.textContent = material.materialDescription;
      selectMaterial.appendChild(opcaoMaterial);
    });

    clearInterval(intervaloTempo);

    btn.disabled = true;
    btn.textContent = "Aguardando...";
    btn.style.cursor = "not-allowed";

    const horarioInicio = new Date();
    const tempoNecessario = ordemEncontrada.cycleTime;

    intervaloTempo = setInterval(() => {
      const horaAgora = new Date();

      const segundosPassados = (horaAgora - horarioInicio) / 1000;

      if (segundosPassados >= tempoNecessario) {
        btn.disabled = false;
        btn.textContent = "Enviar";
        btn.style.cursor = "pointer";

        clearInterval(intervaloTempo);
      }
    }, 1000);
  } else {
    descProduto.textContent = "---";
    imagem.style.display = "none";
    selectMaterial.innerHTML = '<option value="">Aguardando ordem...</option>';

    clearInterval(intervaloTempo);
    btn.disabled = true;
    btn.textContent = "Enviar";
  }
});

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const idSelecionado = selectOrdem.value;

  const ordemParaSalvar = listaDeOrdem.find(
    (item) => item.order === idSelecionado
  );

  const materialValor =
    selectMaterial.options[selectMaterial.selectedIndex].text;
  const quantidadeValor = document.querySelector("#quantidade").value;

  const novaLinha = document.createElement("tr");

  novaLinha.innerHTML = `
        <td>${idSelecionado}</td>
        <td>${materialValor}</td>
        <td>${quantidadeValor}</td>
        <td>${ordemParaSalvar ? ordemParaSalvar.cycleTime : "-"}</td>
    `;

  tabelaCorpo.appendChild(novaLinha);

  formulario.reset();

  if (imagem) imagem.style.display = "none";
  if (descProduto) descProduto.textContent = "---";

  btn.disabled = true;
  btn.textContent = "Aguardando...";
  clearInterval(intervaloTempo);
});
