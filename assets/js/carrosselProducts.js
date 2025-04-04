const swiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

document.addEventListener("DOMContentLoaded", () => {
  fetch("procedimentos.json") // Substitua pelo caminho correto do JSON
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("procedimentos-carrossel");
      container.innerHTML = "";

      data.procedimentos.forEach((procedimento) => {
        const card = document.createElement("div");
        card.classList.add("swiper-slide");
        card.innerHTML = `
        <a href="produto.html?procedimento=${procedimento.nome}">
       
          <img src="${procedimento.imagem}" alt="Procedimento 1" class="w-40 mx-auto">
          <h2 class="text-2xl font-display font-bold text-center text-title-color leading-6 mt-5 max-sm:text-lg">
                            ${procedimento.nome}
                        </h2>
                         </a>
                         `;
        container.appendChild(card);
      });
    })
    .catch((error) =>
      console.error("Erro ao carregar os procedimentos:", error)
    );
});
