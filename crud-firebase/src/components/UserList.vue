<template>
    <div class="card p-4 shadow">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>
              <button @click="deleteUser(user.id)" class="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { useUserStore } from "@/stores/userUserStore";
  import { computed, onMounted } from 'vue';

  export default {
    setup() {
      const userStore = useUserStore();
      const users = computed(() => userStore.users);
  
      const deleteUser = (id) => {
        userStore.deleteUser(id);
      };
  
      onMounted(() => {
        userStore.fetchUsers();
      });
  
      return {
        users,
        deleteUser,
      };
    },
  };
  </script>
  
  
  