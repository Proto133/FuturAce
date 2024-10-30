<script setup lang="ts">
import GameCanvas from "./components/game/GameCanvas.vue";
import { useGameStore } from "./stores/game";
import StartScreen from "./components/start/StartScreen.vue";

const gameStore = useGameStore();
</script>

<template>
  <div class="game-container">
    <StartScreen v-if="!gameStore.isPlaying" />
    <GameCanvas v-else />
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
