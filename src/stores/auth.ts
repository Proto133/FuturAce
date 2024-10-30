import { defineStore } from 'pinia';
import { ref } from 'vue';

interface User {
  id: string;
  email: string;
  username: string;
  characters: string[];
  progress: {
    level: number;
    experience: number;
  };
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null);
  const isAuthenticated = ref(false);

  async function login(email: string, password: string) {
    try {
      // Implement actual authentication logic here
      const mockUser: User = {
        id: '1',
        email,
        username: 'Player1',
        characters: ['cyber-runner'],
        progress: {
          level: 1,
          experience: 0
        }
      };
      
      user.value = mockUser;
      isAuthenticated.value = true;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  }

  async function register(email: string, password: string, username: string) {
    try {
      // Implement actual registration logic here
      const mockUser: User = {
        id: '1',
        email,
        username,
        characters: ['cyber-runner'],
        progress: {
          level: 1,
          experience: 0
        }
      };
      
      user.value = mockUser;
      isAuthenticated.value = true;
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  }

  function logout() {
    user.value = null;
    isAuthenticated.value = false;
  }

  return {
    user,
    isAuthenticated,
    login,
    register,
    logout
  };
});