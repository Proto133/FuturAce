<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useGameStore } from '../../stores/game';
import { gsap } from 'gsap';
import type { Position } from '../../types/game';

const props = defineProps<{
  position: Position;
}>();

const gameStore = useGameStore();
const characterRef = ref<HTMLDivElement | null>(null);
const isJumping = ref(false);
const isDashing = ref(false);

const position = ref(props.position);

onMounted(() => {
  if (characterRef.value) {
    initCharacterAnimations();
  }
});

watch(() => position.value, (newPos) => {
  if (characterRef.value) {
    gsap.to(characterRef.value, {
      x: newPos.x,
      y: newPos.y,
      duration: 0.1,
      ease: 'none'
    });
  }
});

function initCharacterAnimations() {
  // Initialize character sprite animations
}

function jump() {
  if (isJumping.value) return;
  
  isJumping.value = true;
  const jumpHeight = gameStore.selectedCharacter?.stats.jumpHeight || 15;
  
  gsap.to(position.value, {
    y: position.value.y - jumpHeight * 10,
    duration: 0.5,
    ease: 'power2.out',
    yoyo: true,
    repeat: 1,
    onComplete: () => {
      isJumping.value = false;
    }
  });
}

function dash() {
  if (isDashing.value) return;
  
  isDashing.value = true;
  gsap.to(position.value, {
    x: position.value.x + 200,
    duration: 0.3,
    ease: 'power1.in',
    onComplete: () => {
      isDashing.value = false;
    }
  });
}

defineExpose({
  jump,
  dash
});
</script>

<template>
  <div 
    ref="characterRef"
    class="character"
    :class="{
      'jumping': isJumping,
      'dashing': isDashing
    }"
    :style="{
      transform: `translate(${position.x}px, ${position.y}px)`
    }"
  >
    <img 
      :src="gameStore.selectedCharacter?.sprite"
      alt="character"
      class="character-sprite"
    />
  </div>
</template>

<style scoped lang="scss">
.character {
  position: absolute;
  width: 48px;
  height: 48px;
  
  .character-sprite {
    width: 100%;
    height: 100%;
    image-rendering: pixelated;
  }
  
  &.jumping {
    animation: jump-effect 0.5s ease-out;
  }
  
  &.dashing {
    animation: dash-effect 0.3s linear;
  }
}

@keyframes jump-effect {
  0%, 100% { filter: brightness(1); }
  50% { filter: brightness(1.2); }
}

@keyframes dash-effect {
  0% { filter: blur(0); }
  50% { filter: blur(2px); }
  100% { filter: blur(0); }
}
</style>