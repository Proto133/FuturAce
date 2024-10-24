<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useGameStore } from '../../stores/game';
import { gsap } from 'gsap';

const gameStore = useGameStore();
const canvasRef = ref<HTMLCanvasElement | null>(null);
const gameLoop = ref<number | null>(null);
const ctx = ref<CanvasRenderingContext2D | null>(null);

onMounted(() => {
  if (canvasRef.value) {
    ctx.value = canvasRef.value.getContext('2d');
    initGame();
  }
});

onUnmounted(() => {
  if (gameLoop.value) {
    cancelAnimationFrame(gameLoop.value);
  }
});

function initGame() {
  if (!ctx.value) return;
  
  // Set canvas size
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  // Start game loop
  startGameLoop();
}

function resizeCanvas() {
  if (!canvasRef.value) return;
  canvasRef.value.width = window.innerWidth;
  canvasRef.value.height = window.innerHeight;
}

function startGameLoop() {
  if (!ctx.value) return;

  const animate = () => {
    if (gameStore.isPlaying) {
      // Clear canvas
      ctx.value!.clearRect(0, 0, canvasRef.value!.width, canvasRef.value!.height);
      
      // Update game state
      updateGame();
      
      // Draw game elements
      drawGame();
    }
    
    gameLoop.value = requestAnimationFrame(animate);
  };

  animate();
}

function updateGame() {
  // Update game logic here
}

function drawGame() {
  if (!ctx.value) return;
  // Draw game elements here
}
</script>

<template>
  <canvas
    ref="canvasRef"
    class="game-canvas"
    @click="gameStore.isPlaying ? null : gameStore.startGame"
  />
</template>

<style scoped>
.game-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
}
</style>