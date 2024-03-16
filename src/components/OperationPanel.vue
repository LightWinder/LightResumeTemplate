<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue'
import type { ResumeBodyProps } from 'src/types/resumeCard'
import DeleteIcon from './Icons/DeleteIcon.vue'
import DownloadIcon from './Icons/DownloadIcon.vue'

const { resumeDatas } = defineProps<{ resumeDatas: ResumeBodyProps[]; activeItem: number }>()
const emit = defineEmits<{
  (e: 'changeActive', id: number): void
  (e: 'addResume', data: ResumeBodyProps): void
}>()

const file_upload = ref<HTMLInputElement | null>(null)

const handleResumeActiveChange = (id: number) => {
  emit('changeActive', id)
}
const handleUploadBtnClick = () => {
  if (file_upload.value == null) return
  file_upload.value.click()
}
const handleResumeUpload = (e: Event) => {
  const files = (e.target as HTMLInputElement).files
  if (files == null) return
  const reader = new FileReader()
  reader.readAsText(files[0])
  reader.onload = () => {
    if (typeof reader.result != 'string') return
    const resumeObj = JSON.parse(reader.result) as ResumeBodyProps
    emit('addResume', resumeObj)
  }
}
const handleDownload = (key: string) => {
  resumeDatas.find((resume) => {
    return (resume.key = key)
  })
}
</script>

<template>
  <div class="flex flex-col gap-4 w-full">
    <p class="pl-2">Resumes</p>
    <div class="flex flex-wrap gap-[1.25rem]">
      <div
        :key="item.key"
        v-for="(item, idx) in resumeDatas"
        class="resume-selector"
        :active="activeItem == idx"
        :class="activeItem == idx ? 'bg-[var(--main-color)] text-white' : 'bg-gray-100 text-black'"
        @click="handleResumeActiveChange(idx)"
      >
        <img class="h-full rounded-3" :src="item.avatar" alt="" />
        <div class="flex flex-col flex-1">
          <p>{{ item.name }}</p>
          <span>{{ item.subInfo[0] }}</span>
        </div>
        <div class="flex items-center gap-4 pr-2 text-unset">
          <DownloadIcon class="w-8" @click.stop="handleDownload(item.key)" />
          <DeleteIcon class="w-8" @click.stop="" />
        </div>
      </div>
    </div>
    <div>
      <div class="flex gap-4">
        <!-- <button class="flex-1">Add</button> -->
        <button class="flex-1" @click="handleUploadBtnClick">upload</button>
      </div>
      <span class="pt-2">Resume will auto store in web localStorage</span>
      <input
        ref="file_upload"
        v-show="false"
        type="file"
        accept="application/json"
        @change="handleResumeUpload"
      />
    </div>
    <div></div>
  </div>
</template>

<style scoped>
.resume-selector {
  /* */
  display: flex;
  position: relative;
  align-items: center;
  gap: 1.25rem;
  padding: 0.5rem;

  height: 5rem;
  width: 25rem;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
}
.resume-selector[active='false']:hover {
  background-color: #eaeaea;
}
.resume-selector > div:last-child {
  position: absolute;
  right: 1rem;
  width: max-content;
  transform: scale(0%);
}
.resume-selector:hover > div:last-child {
  transform: scale(100%);
}
</style>
