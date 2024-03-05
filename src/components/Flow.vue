<script lang="ts" setup>
import { defineProps } from 'vue'
interface StepData {
  title: string
  info: string
  description: string | string[] | null
  startTime: string
  endTime: string
}
interface StepProps {
  data: StepData[]
}

const { data } = defineProps<Partial<StepProps>>()
</script>

<template>
  <div class="flow-container" v-for="item in data" :key="item.title">
    <div>
      <h3 class="p-[0.6rem] pl-0">{{ item.title }}</h3>
      <h4>{{ item.info }}，</h4>
      <p>{{ item.startTime }} - {{ item.endTime }}</p>
    </div>

    <span class="p-[0.6rem] pl-0" v-show="item.description">
      <template v-if="typeof item.description === 'string'">
        <p>{{ item.description }}</p>
      </template>
      <template v-else-if="Array.isArray(item.description)">
        <p v-for="desc in item.description" :key="desc">{{ desc }}</p>
      </template>
    </span>
  </div>
</template>

<style scoped>
.flow-container {
  display: flex;
  flex-direction: column;
  gap: 0rem;
  position: relative;
  margin-bottom: 0.2rem;
  padding-left: 3.2rem;
}
.flow-container > div {
  padding: 0.6rem;
  padding-left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.flow-container:before {
  content: '';
  width: 1.2rem;
  height: 1.2rem;
  position: absolute;
  background: var(--main-color);
  border-radius: 2.4rem;
  top: 1.8rem;
  left: 1.2rem;
  z-index: 99;
}

.flow-container:not(:last-of-type)::after {
  content: '';
  width: 0.4rem;
  height: calc(100% + 1rem);
  position: absolute;
  background: var(--main-color-50);
  top: 2rem;
  left: 1.6rem;
  opacity: 0.5;
}
</style>
