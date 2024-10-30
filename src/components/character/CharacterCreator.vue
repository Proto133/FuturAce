<script setup lang="ts">
import { ref } from 'vue';
import { useGameStore } from '../../stores/game';
import { useAuthStore } from '../../stores/auth';
import type { Character } from '../../types/game';

const gameStore = useGameStore();
const authStore = useAuthStore();

const characterName = ref('');
const selectedClass = ref('cyber-runner');
const customization = ref({
  color: '#42b883',
  accessory: 'none'
});

async function createCharacter() {
  if (!characterName.value) return;
  
  const newCharacter: Character = {
    id: `${selectedClass.value}-${Date.now()}`,
    name: characterName.value,
    sprite: `/assets/characters/${selectedClass.value}.png`,
    abilities: gameStore.getDefaultAbilities(selectedClass.value),
    stats: gameStore.getDefaultStats(selectedClass.value)
  };
  
  await gameStore.addCharacter(newCharacter);
}
</script>

<template>
  <div class="character-creator">
    <h2>Create Character</h2>
    <div class="creator-form">
      <div class="form-group">
        <label>Character Name</label>
        <input v-model="characterName" type="text" maxlength="20" />
      </div>
      
      <div class="form-group">
        <label>Class</label>
        <select v-model="selectedClass">
          <option value="cyber-runner">Cyber Runner</option>
          <option value="pixel-ninja">Pixel Ninja</option>
        </select>
      </div>
      
      <div class="form-group">
        <label>Color Scheme</label>
        <input v-model="customization.color" type="color" />
      </div>
      
      <div class="form-group">
        <label>Accessory</label>
        <select v-model="customization.accessory">
          <option value="none">None</option>
          <option value="hat">Hat</option>
          <option value="cape">Cape</option>
        </select>
      </div>
      
      <button 
        class="btn-create"
        @click="createCharacter"
        :disabled="!characterName"
      >
        Create Character
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.character-creator {
  padding: 1rem;
  color: white;
}

.creator-form {
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
  }
  
  input, select {
    width: 100%;
    padding: 0.5rem;
    background: #2a2a2a;
    border: 1px solid #3a3a3a;
    color: white;
    border-radius: 4px;
    
    &:focus {
      outline: none;
      border-color: #42b883;
    }
  }
}

.btn-create {
  width: 100%;
  padding: 0.75rem;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover:not(:disabled) {
    background: #3aa876;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>