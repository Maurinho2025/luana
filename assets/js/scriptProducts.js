document.addEventListener("DOMContentLoaded", () => {
  fetch("procedimentos.json") // Substitua pelo caminho correto do JSON
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("procedimentos-container");
      container.innerHTML = "";

      data.procedimentos.forEach((procedimento) => {
        const card = document.createElement("div");
        card.classList.add("p-5", "max-sm:p-0");
        card.innerHTML = `
                        <img src="${procedimento.imagem}" alt="Imagem de ${procedimento.nome}">
                        <h2 class="text-2xl font-display font-bold text-center text-title-color leading-6 mt-5 max-sm:text-lg">
                            ${procedimento.nome}
                        </h2>
                        <p class="text-base font-display text-center my-5 text-[#313131] max-sm:text-sm">
                            ${procedimento.descricao}
                        </p>
                        <div class="mx-auto text-center mt-2">
                            <a href="produto.html?procedimento=${procedimento.nome}" class="bg-title-color text-primary text-base font-display px-5 py-2 rounded-lg max-sm:text-xs max-sm:px-2">
                                Ver procedimento
                            </a>
                        </div>
                    `;
        container.appendChild(card);
      });
    })
    .catch((error) =>
      console.error("Erro ao carregar os procedimentos:", error)
    );
});
