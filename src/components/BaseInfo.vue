<script setup lang="ts">
import { defineProps } from 'vue'
import Icons from './Icons.vue'

interface BaseInfoProps {
  avatar: string
  name: string
  age: number
  subInfo: string | string[] | null
  description: string | string[] | null
  location: string
  email: string
  phone: string
}
const { avatar, name, subInfo, location, email, phone } = defineProps<Partial<BaseInfoProps>>()
</script>

<template>
  <div class="flex gap-[2rem]">
    <img class="avatar-box" :src="avatar" />
    <div class="flex-1">
      <h1>{{ name }}</h1>
      <div class="flex gap-[1.25rem] justify-start">
        <h2 class="w-auto" :key="item" v-for="item in subInfo">
          {{ item }}
        </h2>
      </div>
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
