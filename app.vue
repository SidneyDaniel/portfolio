<template>

  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>

</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.1s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0.5;
  filter: grayscale(1) brightness(0.5);
}
</style>


<!-- <script setup>
const layout = 'another'
</script> -->
