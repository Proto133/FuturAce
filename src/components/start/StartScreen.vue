<script setup lang="ts">
import { ref } from "vue";
import { useGameStore } from "../../stores/game";
import AuthModal from "../auth/AuthModal.vue";

const gameStore = useGameStore();
const showAuthModal = ref(false);
const isLoginMode = ref(true);

function handleAuthClick(isLogin: boolean) {
  isLoginMode.value = isLogin;
  showAuthModal.value = true;
}

function startGame() {
  gameStore.startGame({
    id: "guest",
    name: "Guest Player",
    sprite: "/assets/characters/cyber-runner.png",
    abilities: [],
    stats: {
      speed: 5,
      jumpHeight: 15,
      health: 100,
    },
  });
}
</script>

<template>
  <div class="start-screen">
    <div class="content">
      <h1 class="game-title">FUTURACE</h1>

      <div class="menu-options">
        <button @click="startGame" class="btn-primary">PLAY AS GUEST</button>

        <button @click="handleAuthClick(true)" class="btn-primary">
          LOGIN
        </button>

        <button @click="handleAuthClick(false)" class="btn-primary">
          REGISTER
        </button>
      </div>
    </div>

    <AuthModal
      v-if="showAuthModal"
      :is-login="isLoginMode"
      @close="showAuthModal = false"
    />
  </div>
</template>

<style scoped>
.start-screen {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/src/assets/images/cityscape.png");
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
}

.content {
  text-align: center;
  padding: 2rem;
}

.game-title {
  font-size: 4rem;
  color: #fff;
  text-shadow: 0 0 10px #0ff, 0 0 20px #0ff;
  margin-bottom: 3rem;
  font-family: monospace;
}

.menu-options {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 300px;
  margin: 0 auto;
}

.btn-primary {
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background: #42b883;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: #3aa876;
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(66, 184, 131, 0.4);
}

@media (max-width: 768px) {
  .game-title {
    font-size: 2.5rem;
  }

  .btn-primary {
    padding: 0.8rem 1.6rem;
    font-size: 1rem;
  }
}
</style>
