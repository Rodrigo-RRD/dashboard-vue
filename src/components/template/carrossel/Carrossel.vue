<template>
    <section class="py-5 bg-light" id="benefits">
      <div class="text-center">
        <h2 class="mb-4">Benefícios</h2>
        <div id="benefitsCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <!-- Item 1 -->
            <div class="carousel-item active">
              <div class="card mx-auto shadow-lg" style="width: 20rem">
                <img
                  src=""
                  class="card-img-top"
                  alt="Imagem do benefício"
                />
                <div class="card-body">
                  <h5 class="card-title">Fácil de usar</h5>
                  <p class="card-text">
                    Mesmo iniciantes podem aproveitar todos os recursos sem
                    dificuldades.
                  </p>
                </div>
              </div>
            </div>
            <!-- Item 2 -->
            <div class="carousel-item">
              <div class="card mx-auto shadow-lg" style="width: 20rem">
                <img
                  src=""
                  class="card-img-top"
                  alt="Imagem do benefício"
                />
                <div class="card-body">
                  <h5 class="card-title">Acesso 24 horas</h5>
                  <p class="card-text">
                    Ferramenta disponível para você em qualquer momento.
                  </p>
                </div>
              </div>
            </div>
            <!-- Item 3 -->
            <div class="carousel-item">
              <div class="card mx-auto shadow-lg" style="width: 18rem">
                <img
                  src=""
                  class="card-img-top"
                  alt="Imagem do benefício"
                />
                <div class="card-body">
                  <h5 class="card-title">Resultados rápidos</h5>
                  <p class="card-text">
                    Tenha sua produtividade dobrada com nossos recursos.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- Controle de navegação -->
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#benefitsCarousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#benefitsCarousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  /* Personalizando o efeito de sombra com Bootstrap */
  .shadow-lg {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra mais intensa */
  }
  
  /* Adicionando um efeito de hover para interação */
  .card:hover {
    transform: translateY(
      -5px
    ); /* Leve deslocamento para dar efeito de elevação */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  /* Estilo responsivo para o carrossel, para garantir boa exibição em telas menores */
  @media (max-width: 576px) {
    .carousel-item {
      width: 100%;
      margin: 0 auto;
    }
  }
  </style>