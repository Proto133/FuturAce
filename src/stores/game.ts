import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { GameState, Character, PowerUp } from '../types/game';

export const useGameStore = defineStore('game', () => {
  const gameState = ref<GameState>({
    score: 0,
    distance: 0,
    isGameOver: false,
    isPaused: false,
    currentSpeed: 5,
    powerUps: [],
  });

  const selectedCharacter = ref<Character | null>(null);
  const highScores = ref<number[]>([]);

  const isPlaying = computed(() => !gameState.value.isGameOver && !gameState.value.isPaused);

  function startGame(character: Character) {
    selectedCharacter.value = character;
    gameState.value = {
      score: 0,
      distance: 0,
      isGameOver: false,
      isPaused: false,
      currentSpeed: 5,
      powerUps: [],
    };
  }

  function pauseGame() {
    gameState.value.isPaused = true;
  }

  function resumeGame() {
    gameState.value.isPaused = false;
  }

  function endGame() {
    gameState.value.isGameOver = true;
    updateHighScores(gameState.value.score);
  }

  function updateHighScores(score: number) {
    highScores.value.push(score);
    highScores.value.sort((a, b) => b - a);
    highScores.value = highScores.value.slice(0, 10);
  }

  function addPowerUp(powerUp: PowerUp) {
    gameState.value.powerUps.push(powerUp);
  }

  return {
    gameState,
    selectedCharacter,
    highScores,
    isPlaying,
    startGame,
    pauseGame,
    resumeGame,
    endGame,
    addPowerUp,
  };
});