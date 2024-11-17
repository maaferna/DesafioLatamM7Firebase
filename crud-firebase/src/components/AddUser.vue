<template>
  <div class="card p-4 shadow">
    <form @submit.prevent="addNewUser">
      <div class="mb-3">
        <label for="name" class="form-label">Nombre</label>
        <input type="text" id="name" v-model="name" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" id="email" v-model="email" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary w-100">Agregar Usuario</button>
    </form>
  </div>
</template>

<script>
import { useUserStore } from '../stores/userUserStore';

export default {
  data() {
    return {
      name: '', 
      email: '', 
    };
  },
  methods: {
    async addNewUser() {
      const userStore = useUserStore(); 
      
      try {
        await userStore.addUser({
          name: this.name, 
          email: this.email,
        });

        this.name = '';
        this.email = '';
      } catch (error) {
        console.error("Error adding user:", error);
      }
    },
  },
};
</script>
