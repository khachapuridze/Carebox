<template>
  <div class="user">
    <div class="user__avatar">
      <img :src="user.avatar" alt="" />
    </div>
    <div class="user__desc">
      <h3>{{ user.name }}</h3>
      <div class="user-info" v-for="info in userInfoItems" :key="info.id">
        <component :is="info.icon" />
        <a :href="info.href" :target="info.target">{{ info.value }}</a>
      </div>
    </div>
    <div class="user__actions">
      <div class="action-item" v-for="action in actionItems" :key="action.id">
        <component :is="action.icon" @click="action.action" />
      </div>
    </div>
    <div v-if="activeEditModal">
      <EditUserFormModal
        :user="user"
        header="Basic modal"
        @close="activeEditModal = false"
        @submit="editUser"
      />
    </div>
    <div v-if="activeConfirmModal">
      <ConfirmationModal
        confirmationText="Delete"
        @cancel="activeConfirmModal = false"
        @confirm="deleteUser(user.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
// stores
import { useUsersStore } from '@/stores/users'
// types
import type { PropType } from 'vue'
import type { User } from '@/types/user'
import type { Actions, UserInfo } from '@/types/card'
// components
import {
  IconEdit,
  IconEmail,
  IconHeart,
  IconPhone,
  IconTrash,
  IconWeb
} from '@/components/icons/Index'
import EditUserFormModal from '@/components/Modals/EditUserFormModal.vue'
import ConfirmationModal from '@/components/Modals/ConfirmationModal.vue'

const props = defineProps({
  user: {
    type: Object as PropType<User>,
    required: true
  }
})
const activeEditModal = ref(false)
const activeConfirmModal = ref(false)
const usersStore = useUsersStore()
const { updateUser, deleteUser } = usersStore

const actionItems = computed((): Actions[] => [
  {
    id: '01',
    icon: IconHeart,
    action: ''
  },
  {
    id: '02',
    icon: IconEdit,
    action: () => (activeEditModal.value = true)
  },
  {
    id: '03',
    icon: IconTrash,
    action: () => (activeConfirmModal.value = true)
  }
])

const userInfoItems = computed((): UserInfo[] => [
  {
    id: '01',
    icon: IconEmail,
    href: `mailto:${props.user.email}`,
    value: props.user.email
  },
  {
    id: '02',
    icon: IconPhone,
    href: `tel:${props.user.phone}`,
    value: props.user.phone
  },
  {
    id: '03',
    icon: IconWeb,
    href: props.user.website,
    value: props.user.website,
    target: '_blank'
  }
])

const editUser = (user: User) => {
  updateUser(user).then(() => (activeEditModal.value = false))
}
</script>

<style scoped>
.user {
  height: 300px;
  width: 300px;
  border: 1px solid #f5f5f5;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
}
.user__avatar {
  width: 100%;
  height: 150px;
  position: relative;
}
.user__avatar img {
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  background-color: #f5f5f5;
}
.user__desc {
  padding: 20px;
}
.user__desc .user-info {
  display: flex;
  align-items: center;
}
.user__desc .user-info svg {
  margin-right: 5px;
}
.user__desc {
  font-size: 12px;
}
.user__actions {
  background-color: #f5f5f5;
  height: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
}
.user__actions .action-item {
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.user a {
  text-decoration: unset;
  color: inherit;
}
.user svg {
  width: 15px;
  height: 15px;
}
</style>
