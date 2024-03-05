<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'
import type { ResumeBodyProps } from 'src/types/resumeCard'

const { resumeDatas } = defineProps<{ resumeDatas: ResumeBodyProps[]; activeItem: number }>()
const emit = defineEmits<{
  (e: 'changeActive', id: number): void
}>()

const handleClick = (id: number) => {
  emit('changeActive', id)
}
</script>

<template>
  <div class="flex flex-col gap-[1.25rem] min-w-100">
    <div
      class="flex items-center gap-[1.25rem] rounded-4 p-2 cursor-pointer"
      :class="activeItem == idx ? 'bg-[var(--main-color)]' : 'bg-gray-100'"
      @click="handleClick(idx)"
      :key="item.key"
      v-for="(item, idx) in resumeDatas"
    >
      <img
        class="w-20 h-20 border-0 border-solid rounded-3 overflow-hidden"
        :src="item.avatar"
        alt=""
      />
      <div class="flex flex-col">
        <p :class="activeItem == idx ? 'text-white' : 'text-black'">{{ item.name }}</p>
        <span :class="activeItem == idx ? 'text-white' : 'text-black'">{{ item.subInfo[0] }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
