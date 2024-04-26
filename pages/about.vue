<template>
    <div>
        about me
    </div>
    <div>
        <button @click="enableCustomLayout">update layout</button>
    </div>
</template>

<script setup>

// definePageMeta({
//   layout: "another",
// })
// function enableCustomLayout() {
//     setPageLayout('another')
// }

useHead({
    title: 'About'
})

</script>
