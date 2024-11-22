<script setup>
import './GraficoColuna.css';
</script>

<template>
  <div class="main-container">
    <div class="year-stats">
      <div class="month-group">
        <div class="bar h-100"></div>
        <p class="month">Jan</p>
      </div>
      <div class="month-group">
        <div class="bar h-50"></div>
        <p class="month">Fev</p>
      </div>
      <div class="month-group">
        <div class="bar h-75"></div>
        <p class="month">Mar</p>
      </div>
      <div class="month-group">
        <div class="bar h-25"></div>
        <p class="month">Abr</p>
      </div>
      <div class="month-group selected">
        <div class="bar h-100"></div>
        <p class="month">Mai</p>
      </div>
      <div class="month-group">
        <div class="bar h-50"></div>
        <p class="month">Jun</p>
      </div>
      <div class="month-group">
        <div class="bar h-75"></div>
        <p class="month">Jul</p>
      </div>
      <div class="month-group">
        <div class="bar h-25"></div>
        <p class="month">Ago</p>
      </div>
      <div class="month-group">
        <div class="bar h-50"></div>
        <p class="month">Set</p>
      </div>
      <div class="month-group">
        <div class="bar h-75"></div>
        <p class="month">Otu</p>
      </div>
      <div class="month-group">
        <div class="bar h-25"></div>
        <p class="month">Nov</p>
      </div>
      <div class="month-group">
        <div class="bar h-100"></div>
        <p class="month">Dez</p>
      </div>
    </div>

    <div class="stats-info">
      <div class="graph-container">
        <div class="percent">
          <svg viewBox="0 0 36 36" class="circular-chart">
            <path class="circle" stroke-dasharray="100, 100" d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831" />
            <path class="circle" stroke-dasharray="85, 100" d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831" />
            <path class="circle" stroke-dasharray="60, 100" d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831" />
            <path class="circle" stroke-dasharray="30, 100" d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831" />
          </svg>
        </div>
        <p>Total: R$68448</p>
      </div>

      <div class="info">
        <p>Categoria mais cara <br /><span>Restaurantes e Jantares</span></p>
        <p>Atualizada categoria <span>2</span></p>
        <p>Ticket Bonus <span>R$92/H</span></p>
      </div>
    </div>
  </div>
</template>
