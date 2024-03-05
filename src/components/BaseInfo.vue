<script setup lang="ts">
import { defineProps } from 'vue'
import Icons from './Icons.vue'

interface BaseInfoProps {
  avatar: string
  name: string
  age: number
  job: string
  description: string | string[] | null
  location: string
  email: string
  phone: string
}
const { avatar, age, name, job, description, location, email, phone } =
  defineProps<Partial<BaseInfoProps>>()
</script>

<template>
  <div class="flex gap-[2rem]">
    <img class="avatar-box" :src="avatar" />
    <div class="flex-1">
      <h1>{{ name }}</h1>
      <h2>{{ job }} ({{ age }}岁)</h2>
    </div>
    <div class="flex flex-col gap-[1rem]">
      <div class="flex item-center">
        <Icons icon="location" />
        <p>{{ location }}</p>
      </div>
      <div class="flex item-center">
        <Icons icon="email" />
        <p>{{ email }}</p>
      </div>
      <div class="flex item-center">
        <Icons icon="phone" />
        <p>{{ phone }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.avatar-box {
  width: 8rem;
  height: 10rem;
  object-fit: cover;
  border-radius: 50rem;
  background: grey;
}

.details > div {
  display: flex;
  align-items: center;
  gap: 0rem;
}
</style>
