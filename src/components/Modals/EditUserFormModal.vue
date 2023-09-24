<template>
  <div class="base-form">
    <div class="header">{{ header }}</div>
    <div class="content">
      <div class="input-wrapper">
        <Input v-model="userValue.name" label="Name" />
      </div>
      <div class="input-wrapper">
        <Input v-model="userValue.email" label="Email" />
      </div>
      <div class="input-wrapper">
        <Input v-model="userValue.phone" label="Phone" />
      </div>
      <div class="input-wrapper">
        <Input v-model="userValue.website" label="Website" />
      </div>
    </div>
    <div class="buttons">
      <button type="button" class="btn btn-outline-dark" @click="$emit('close')">Cancel</button>
      <button type="button" class="btn btn-primary" @click="$emit('submit', userValue)">Ok</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Input from '@/components/common/Input.vue'
import type { User } from '@/types/user'
// types
import type { PropType } from 'vue'

const props = defineProps({
  header: {
    type: String
  },
  user: {
    type: Object as PropType<User>,
    required: true
  }
})

defineEmits(['close', 'submit'])

const userValue = Object.assign({}, props.user)
</script>

<style scoped>
.base-form {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  width: 80%;
  max-width: 1000px;
  box-shadow: 0 0 0 50vmax rgb(0 0 0 / 11%);
  background-color: #ffffff;
  border-radius: 8px;
}
.base-form .content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: end;
}
.base-form .header {
  padding: 15px 10px;
  border-bottom: 1px solid #f5f5f5;
}
.base-form .buttons {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  padding: 20px;
}
.btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  cursor: pointer;
  transition:
    color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}
.btn-outline-dark {
  color: #343a40;
  background-color: transparent;
  background-image: none;
  border-color: #343a40;
}
.btn-outline-dark:hover {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
}
.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}
.btn-primary:hover {
  color: #fff;
  background-color: #0069d9;
  border-color: #0062cc;
}
</style>
