<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import datas from './data/defaultDatas.json'
import ResumeBody from './components/ResumeBody.vue'
import SideBar from './components/SideBar.vue'
import type { ResumeBodyProps } from 'src/types/resumeCard'
import OperationPanel from './components/OperationPanel.vue'

let jsonDatasDefault = datas as ResumeBodyProps[]
const defaultDatas = ref(jsonDatasDefault)
const addtionalDatas = ref<ResumeBodyProps[]>([])
const activedResume = ref(0)
const resumeDatas = computed<ResumeBodyProps[]>(() => {
  return [...defaultDatas.value, ...addtionalDatas.value]
})

onMounted(() => {
  refreshResume()
  console.log(addtionalDatas.value)
})

const changeActive = (index: number) => {
  activedResume.value = index
  console.log(activedResume.value)
}

const addResume = (data: ResumeBodyProps) => {
  addtionalDatas.value.push(data)
  wiriteStorage()
}

const refreshResume = () => {
  const resumeStr = window.localStorage.getItem('resume')

  if (resumeStr == null) return
  addtionalDatas.value = JSON.parse(resumeStr)
}
const wiriteStorage = () => {
  window.localStorage.setItem('resume', JSON.stringify(addtionalDatas.value))
}
</script>

<template>
  <div class="flex gap-4 w-full p-4 print:p-0">
    <div class="">
      <ResumeBody v-bind="resumeDatas[activedResume]" />
    </div>
  </div>
  <SideBar>
    <OperationPanel
      :resume-datas="resumeDatas"
      :active-item="activedResume"
      @changeActive="changeActive"
      @addResume="addResume"
    />
  </SideBar>
</template>

<style scoped></style>
./components/OperationPanel/OperationPanel.vue
