<template>
  <div class="input">
    <label v-if="label" class="font-bold block">
      {{ label }}
    </label>
    <input :type="type" :value="modelValue" @input="updateInput" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [String, Number],
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  }
})
const emit = defineEmits(['update:modelValue'])

const updateInput = (e: Event) => {
  const { value } = <HTMLInputElement>e.target
  emit('update:modelValue', value)
}
</script>

<style scoped>
.input {
  display: grid;
  align-items: center;
  gap: 30px;
  grid-template-columns: 150px 1fr;
  @media screen and (max-width: 767px) {
    gap: 15px;
    grid-template-columns: 1fr;
    text-align: left;
  }
}
input {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}
</style>
