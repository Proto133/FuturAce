<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '../../stores/auth';

const authStore = useAuthStore();
const isLogin = ref(true);
const email = ref('');
const password = ref('');
const username = ref('');

async function handleSubmit() {
  if (isLogin.value) {
    await authStore.login(email.value, password.value);
  } else {
    await authStore.register(email.value, password.value, username.value);
  }
}
</script>

<template>
  <div class="auth-modal">
    <div class="modal-content">
      <h2>{{ isLogin ? 'Login' : 'Register' }}</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div class="form-group">
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <div v-if="!isLogin" class="form-group">
          <input
            v-model="username"
            type="text"
            placeholder="Username"
            required
          />
        </div>
        <button type="submit" class="btn-primary">
          {{ isLogin ? 'Login' : 'Register' }}
        </button>
      </form>
      <p>
        {{ isLogin ? "Don't have an account?" : "Already have an account?" }}
        <button class="btn-link" @click="isLogin = !isLogin">
          {{ isLogin ? 'Register' : 'Login' }}
        </button>
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.auth-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  color: white;
}

.form-group {
  margin-bottom: 1rem;
  
  input {
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

.btn-primary {
  width: 100%;
  padding: 0.75rem;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background: #3aa876;
  }
}

.btn-link {
  background: none;
  border: none;
  color: #42b883;
  cursor: pointer;
  text-decoration: underline;
  
  &:hover {
    color: #3aa876;
  }
}
</style>