document.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const procedimentoNome = urlParams.get("procedimento");

  if (!procedimentoNome) {
    console.error("Nenhum procedimento foi encontrado na URL.");
    return;
  }

  try {
    // Busca o JSON localmente
    const response = await fetch("https://maurinho2025.github.io/luana/procedimentos.json");
    if (!response.ok) throw new Error("Erro ao carregar os dados.");

    const data = await response.json();
    const procedimentos = data.procedimentos;

    // Encontra o procedimento correspondente no JSON
  //const procedimento = procedimentos.find(
 // (p) => p.nome.toLowerCase() === procedimentoNome.toLowerCase()
 // );
 function normalizarTexto(texto) {
  return texto
    .normalize("NFD") 
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim(); 
}

const procedimento = procedimentos.find(
  (p) => normalizarTexto(p.nome) === normalizarTexto(procedimentoNome)
);

    if (!procedimento) {
      console.error("Procedimento não encontrado.");
      return;
    }

    // Atualiza os elementos da página com os dados do procedimento
  /*ocument.getElementById("procedimento-titulo").innerText =
      procedimento.nome;

    document.getElementById("primeiro-texto").innerHTML =
      procedimento.primeiro_texto;

    document.getElementById("segundo-texto").innerHTML =
      procedimento.segundo_texto;

    document.getElementById("imagem-procedimento").src =
      procedimento.imagem_procedimento;
*/
if (document.getElementById("procedimento-titulo")) {
  document.getElementById("procedimento-titulo").innerText = procedimento.nome;
}

if (document.getElementById("primeiro-texto")) {
  document.getElementById("primeiro-texto").innerHTML = procedimento.primeiro_texto || "Descrição não disponível";
}

if (document.getElementById("segundo-texto")){
  document.getElementById("segundo-texto").innerHTML = procedimento.segundo_texto || "descrição não disponível";
}

if (document.getElementById("imagem-procedimento")) {
  document.getElementById("imagem-procedimento").src = procedimento.imagem_procedimento || "https://dummyimage.com/300x200/ccc/000";
}

  } catch (error) {
    console.error("Erro ao buscar os dados do procedimento:", error);
  }
});
