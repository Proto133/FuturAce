<script setup lang="ts">
import { ref, computed } from 'vue';
import { useGameStore } from '../../stores/game';
import { maps } from '../../data/maps';

const gameStore = useGameStore();
const selectedMapId = ref(maps[0].id);

const selectedMap = computed(() => 
  maps.find(map => map.id === selectedMapId.value)
);

function selectMap(mapId: string) {
  selectedMapId.value = mapId;
  gameStore.setCurrentMap(mapId);
}
</script>

<template>
  <div class="map-selector">
    <h2>Select Map</h2>
    <div class="map-grid">
      <div
        v-for="map in maps"
        :key="map.id"
        class="map-card"
        :class="{ active: map.id === selectedMapId }"
        @click="selectMap(map.id)"
      >
        <img :src="map.background" :alt="map.name" class="map-preview" />
        <div class="map-info">
          <h3>{{ map.name }}</h3>
          <p>Difficulty: {{ map.difficulty }}/5</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.map-selector {
  padding: 1rem;
  color: white;
}

.map-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.map-card {
  background: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  &.active {
    border: 2px solid #42b883;
  }
}

.map-preview {
  width: 100%;
  height: 120px;
  object-fit: cover;
  image-rendering: pixelated;
}

.map-info {
  padding: 0.5rem;
  
  h3 {
    margin: 0;
    font-size: 1.1rem;
  }
  
  p {
    margin: 0.5rem 0 0;
    font-size: 0.9rem;
    color: #888;
  }
}
</style>