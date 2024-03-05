<script setup lang="ts">
import { ref } from 'vue'
import datas from './data/defaultDatas.json'
import ResumeBody from './components/ResumeBody.vue'
import type { ResumeBodyProps } from 'src/types/resumeCard'
import OperationPanel from './components/OperationPanel.vue'

const jsonDatasDefault = datas as ResumeBodyProps[]
const defaultDatas = ref(jsonDatasDefault)

const activeItem = ref(0)

const changeActive = (index: number) => {
  activeItem.value = index
  console.log(activeItem.value)
}
</script>

<template>
  <div class="flex gap-4 w-full p-4 print:p-0">
    <div class="">
      <ResumeBody v-bind="defaultDatas[activeItem]" />
    </div>
  </div>
  <div
    class="fixed right-0 h-screen flex flex-1 bg-[#ffffff] p-4 print:hidden border-l-solid border-l-1 border-l-[#eaeaea]"
  >
    <OperationPanel
      :resume-datas="defaultDatas"
      :active-item="activeItem"
      @changeActive="changeActive"
    />
  </div>
</template>

<style scoped></style>
