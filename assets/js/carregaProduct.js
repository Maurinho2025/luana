document.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const procedimentoNome = urlParams.get("procedimento");

  if (!procedimentoNome) {
    console.error("Nenhum procedimento foi encontrado na URL.");
    return;
  }

  try {
    // Busca o JSON localmente
    const response = await fetch("../../procedimentos.json");
    if (!response.ok) throw new Error("Erro ao carregar os dados.");

    const data = await response.json();
    const procedimentos = data.procedimentos;

    // Encontra o procedimento correspondente no JSON
    const procedimento = procedimentos.find(
      (p) => p.nome.toLowerCase() === procedimentoNome.toLowerCase()
    );

    if (!procedimento) {
      console.error("Procedimento não encontrado.");
      return;
    }

    // Atualiza os elementos da página com os dados do procedimento
    document.getElementById("procedimento-titulo").innerText =
      procedimento.nome;

    document.getElementById("primeiro-texto").innerHTML =
      procedimento.primeiro_texto;

    document.getElementById("segundo-texto").innerHTML =
      procedimento.segundo_texto;

    document.getElementById("imagem-procedimento").src =
      procedimento.imagem_procedimento;


  } catch (error) {
    console.error("Erro ao buscar os dados do procedimento:", error);
  }
});
