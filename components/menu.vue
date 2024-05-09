<template>
    <nav class="font-mono px-2">
        <ul class="flex md:space-x-8 gap-2">
            <li>
                <NuxtLink to="/" class="link">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about" class="link">Sobre</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/projects" class="link">Projetos</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/blog" class="link">Blog</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.link{
    @apply p-1 border-b-2 hover:border-b-gray-800 dark:hover:border-b-gray-800 text-lg  md:text-base
}

</style>