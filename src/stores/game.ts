import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { GameState, Character, PowerUp } from '../types/game';
import { characters } from '../data/characters';

export const useGameStore = defineStore('game', () => {
  const gameState = ref<GameState>({
    score: 0,
    distance: 0,
    isGameOver: true,
    isPaused: false,
    currentSpeed: 5,
    powerUps: [],
  });

  const selectedCharacter = ref<Character | null>(null);
  const currentMapId = ref<string>('neo-tokyo');
  const highScores = ref<number[]>([]);
  const userCharacters = ref<Character[]>([]);

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

  function setCurrentMap(mapId: string) {
    currentMapId.value = mapId;
  }

  function getDefaultAbilities(classType: string) {
    return characters.find(c => c.id === classType)?.abilities || [];
  }

  function getDefaultStats(classType: string) {
    return characters.find(c => c.id === classType)?.stats || {
      speed: 5,
      jumpHeight: 15,
      health: 100
    };
  }

  async function addCharacter(character: Character) {
    userCharacters.value.push(character);
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
    currentMapId,
    highScores,
    userCharacters,
    isPlaying,
    startGame,
    setCurrentMap,
    getDefaultAbilities,
    getDefaultStats,
    addCharacter,
    pauseGame,
    resumeGame,
    endGame,
    addPowerUp,
  };
});