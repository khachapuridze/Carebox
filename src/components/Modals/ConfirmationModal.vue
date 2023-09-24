<template>
  <div class="confirmation-modal">
    <div class="confirm-text">{{ confirmationLabel }}</div>
    <div class="buttons">
      <button type="button" class="btn btn-danger" @click="$emit('confirm')">
        {{ confirmButtonText }}
      </button>
      <button type="button" class="btn btn-outline-dark" @click="$emit('cancel')">
        {{ cancelButtonText }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  confirmationLabel: {
    type: String,
    default: 'Are you sure you want to delete?'
  },
  confirmButtonText: {
    type: String,
    default: 'Confirm'
  },
  cancelButtonText: {
    type: String,
    default: 'Cancel'
  }
})
defineEmits(['confirm', 'cancel'])
</script>

<style scoped>
.confirmation-modal {
  width: fit-content;
  max-width: 1000px;
  box-shadow: 0 0 0 50vmax rgb(0 0 0 / 11%);
  background-color: #ffffff;
  border-radius: 8px;
  padding: 30px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
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
.btn-danger {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
.btn-danger:hover {
  color: #fff;
  background-color: #c82333;
  border-color: #bd2130;
}
</style>
