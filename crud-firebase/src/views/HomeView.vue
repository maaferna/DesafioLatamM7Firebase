<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Firebase CRUD with Vue</h1>
    <div class="row">
        <AddUser />
    </div>
    <div class="row">
      <UserList />
    </div>
  </div>
</template>

<script>
import AddUser from "@/components/AddUser.vue";
import UserList from "@/components/UserList.vue";

export default {
  components: {
    AddUser,
    UserList,
  },
};
</script>

