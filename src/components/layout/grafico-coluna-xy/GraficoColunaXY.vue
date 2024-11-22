<script setup>
import './GraficoColunaXY.css';
</script>

<template>
  <table class="area-chart">
    <tbody>
      <tr>
        <!-- --start usado para declarar variáveis personalizadas (custom properties) -->
        <td style="--start:0.1; --end:0.5;"> 50 </td>
        <td style="--start:0.0; --end:0.2;"> 20 </td>
        <td style="--start:0.2; --end:0.4;"> 40 </td>
      </tr>
      <tr>
        <td style="--start:0.5; --end:0.8;"> 80 </td>
        <td style="--start:0.2; --end:0.5;"> 50 </td>
        <td style="--start:0.4; --end:0.1;"> 10 </td>
      </tr>
      <tr>
        <td style="--start:0.8; --end:0.4;"> 40 </td>
        <td style="--start:0.5; --end:0.3;"> 30 </td>
        <td style="--start:0.1; --end:0.2;"> 20 </td>
      </tr>
    </tbody>
  </table>
</template>

