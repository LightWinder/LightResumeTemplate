<template>
  <div class="relative">
    <div
      class="fixed w-100 right-0 h-screen flex flex-1 bg-[#ffffff] p-4 print:hidden border-l-solid border-l-1 border-l-[#eaeaea]"
    >
      <slot />
      <span class="expand-btn"></span>
    </div>
  </div>
</template>

<script lang="ts" setup>
// 120 320
</script>

<style scoped>
.expand-btn {
  width: 20px;
  height: 80px;
  background-color: white;
  border-radius: 1rem;
  border: solid 1px #eaeaea;
  border-right: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  display: inline-block;
  position: absolute;
  cursor: pointer;
  top: 50%;
  left: 0%;
  transform: translate(-100%, -50%);
}
</style>
