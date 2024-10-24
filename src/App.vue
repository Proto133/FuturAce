<script setup lang="ts">
import GameCanvas from './components/game/GameCanvas.vue';
import { useGameStore } from './stores/game';

const gameStore = useGameStore();
</script>

<template>
  <div class="game-container">
    <GameCanvas />
    <div v-if="!gameStore.isPlaying" class="game-overlay">
      <h1>Retro Runner</h1>
      <button @click="gameStore.startGame">Start Game</button>
    </div>
  </div>
</template>

<style>
.game-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.game-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}

button {
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background: #42b883;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: #3aa876;
}
</style>