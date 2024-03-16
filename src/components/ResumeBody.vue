<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import BaseInfo from '../components/BaseInfo.vue'
import Flow from '../components/Flow.vue'
import type { ResumeBodyProps } from 'src/types/resumeCard'

const props = defineProps<ResumeBodyProps>()
const baseDataKey = [
  'name',
  'age',
  'subInfo',
  'description',
  'avatar',
  'location',
  'email',
  'phone'
]
const baseData = computed(() => {
  return baseDataKey.reduce(
    (item: Record<string, any>, key: string) => {
      if (key in props) {
        item[key] = (props as Record<string, unknown>)[key]
      }
      return item
    },
    {} as Record<string, any>
  )
})
</script>

<template>
  <div id="resume">
    <div class="flex flex-col gap-[2.05rem]">
      <BaseInfo v-bind="baseData" />
      <div class="flex flex-col gap-[2.05rem]">
        <div class="flex flex-col" v-for="item in props.dataGroup" :key="item.title">
          <h2 class="title">{{ item.title }}</h2>
          <Flow v-if="item.type === 'flow'" :data="item.data" />
          <span v-else-if="item.type === 'text'" class="pt-[1rem]">
            <template v-if="typeof item.description === 'string'">
              <p>{{ item.description }}</p>
            </template>
            <template v-else-if="Array.isArray(item.description)">
              <p :key="desc" v-for="desc in item.description">{{ desc }}</p>
            </template>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#resume {
  min-height: 168rem;
  width: 119rem;
  background: white;
  display: flex;
  flex-direction: column;
  padding: 4rem;
  gap: 2rem;
  position: relative;
  overflow: hidden;
  font-size: 0;
}
</style>
