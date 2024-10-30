<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useAuthStore } from '../../stores/auth';
import { gsap } from 'gsap';
import { Howl } from 'howler';
import AuthModal from '../auth/AuthModal.vue';

const authStore = useAuthStore();
const showAuthModal = ref(false);
const isLoginMode = ref(true);

const bgMusic = new Howl({
  src: ['/assets/audio/synthwave-theme.mp3'],
  loop: true,
  volume: 0.6
});

const sfx = {
  hover: new Howl({ src: ['/assets/audio/hover.wav'], volume: 0.3 }),
  select: new Howl({ src: ['/assets/audio/select.wav'], volume: 0.4 })
};

onMounted(() => {
  animateTitle();
  bgMusic.play();
});

function animateTitle() {
  gsap.from('.game-title', {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: 'elastic.out(1, 0.5)'
  });

  gsap.from('.menu-options button', {
    x: -30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: 'power2.out'
  });
}

function playHoverSound() {
  sfx.hover.play();
}

function playSelectSound() {
  sfx.select.play();
}

function handleAuthClick(isLogin: boolean) {
  playSelectSound();
  isLoginMode.value = isLogin;
  showAuthModal.value = true;
}

function startGame() {
  playSelectSound();
  // Game start logic
}
</script>

<template>
  <div class="start-screen">
    <div class="cityscape-bg"></div>
    
    <div class="content">
      <h1 class="game-title">FUTURACE</h1>
      
      <div class="menu-options">
        <button
          @click="startGame"
          @mouseover="playHoverSound"
          class="btn-primary"
        >
          PLAY AS GUEST
        </button>
        
        <button
          @click="handleAuthClick(true)"
          @mouseover="playHoverSound"
          class="btn-primary"
        >
          LOGIN
        </button>
        
        <button
          @click="handleAuthClick(false)"
          @mouseover="playHoverSound"
          class="btn-primary"
        >
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

<style scoped lang="scss">
@font-face {
  font-family: 'PressStart2P';
  src: url('/assets/fonts/PressStart2P-Regular.ttf') format('truetype');
}

.start-screen {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  font-family: 'PressStart2P', monospace;
}

.cityscape-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('src/assets/images/cityscape.png') repeat-x bottom;
  background-size: auto 100%;
  animation: scrollBg 20s linear infinite;
  image-rendering: pixelated;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(27, 32, 50, 0.8) 0%,
      rgba(90, 50, 180, 0.4) 100%
    );
  }
}

.content {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.game-title {
  font-size: clamp(2rem, 8vw, 5rem);
  text-align: center;
  color: #fff;
  text-shadow: 
    0 0 10px #0ff,
    0 0 20px #0ff,
    0 0 30px #f0f;
  margin-bottom: 4rem;
}

.menu-options {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 300px;
}

.btn-primary {
  padding: 1rem;
  font-family: 'PressStart2P', monospace;
  font-size: 1rem;
  color: #fff;
  background: rgba(60, 70, 170, 0.8);
  border: 2px solid #0ff;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(80, 90, 200, 0.9);
    transform: translateY(-2px);
    box-shadow: 
      0 0 10px rgba(0, 255, 255, 0.5),
      0 0 20px rgba(0, 255, 255, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
}

@keyframes scrollBg {
  from { background-position: 0 bottom; }
  to { background-position: -1000px bottom; }
}

@media (max-width: 768px) {
  .game-title {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
  
  .menu-options {
    max-width: 250px;
  }
  
  .btn-primary {
    padding: 0.8rem;
    font-size: 0.8rem;
  }
}
</style>