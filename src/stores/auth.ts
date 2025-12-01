import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { User } from '@/types/user';
import { login as apiLogin, logout as apiLogout, getUserInfo } from '@/api/auth';
import { useRouter } from 'vue-router';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null);
  const token = ref<string | null>(localStorage.getItem('token'));
  const router = useRouter();

  const isAuthenticated = computed(() => !!token.value);
  const isAdmin = computed(() => user.value?.role === 'ADMIN'); // Updated role check

  // Initialize user from storage if possible
  if (token.value && !user.value) {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      user.value = JSON.parse(storedUser);
    } else {
      // Try to fetch user info
      getUserInfo().then(u => {
        user.value = u;
        localStorage.setItem('user', JSON.stringify(u));
      }).catch(() => {
        // Token might be invalid
        logout();
      });
    }
  }

  async function login(username: string, password: string) {
    try {
      const res = await apiLogin({ username, password });
      token.value = res.token;
      user.value = {
        id: res.id,
        username: res.username,
        email: res.email,
        role: res.role
      };
      localStorage.setItem('token', res.token);
      localStorage.setItem('user', JSON.stringify(user.value));
      return true;
    } catch (error) {
      throw error;
    }
  }

  async function logout() {
    await apiLogout();
    token.value = null;
    user.value = null;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.push('/auth/login');
  }

  return {
    user,
    token,
    isAuthenticated,
    isAdmin,
    login,
    logout
  };
});
