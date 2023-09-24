<template>
  <main class="users">
    <User v-for="user in users" :user="user" :key="user.id" />
  </main>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import User from '../components/Cards/User.vue'

import { useUsersStore } from '@/stores/users'

const usersStore = useUsersStore()

const { users } = storeToRefs(usersStore)
const { getUsers } = usersStore

onMounted(async () => {
  getUsers()
})
</script>

<style scoped>
.users {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}
</style>
