<template>
    <div class="flex space-x-2 items-center">
        <div class="text-gray-500 text-xs hidden md:block" v-if="showNextModelLabel">
            Change to {{ nextMode }}
        </div>
        <div>
            <button @click="toggleMode" @mouseenter="showNextModelLabel = true" @mouseleave="showNextModelLabel = false" class="px-2 py-1 text-gray-500 text-3xl md:text-base">{{ nextModeIcon }}</button>
        </div>
    </div>
</template>

<script setup>
const showNextModelLabel = ref(false)
const colorMode = useColorMode()

const modes = [
    'system',
    'light', 
    'dark'
]

const nextModeIcons = {
    system: '🌓',
    light: '🌕',
    dark: '🌑'
}

const nextMode = computed(() => {
    const currentModeIndex = modes.indexOf(colorMode.preference)
    let nextModeIndex = null
    if(currentModeIndex + 1 === modes.length){
        nextModeIndex = 0
    } else {
        nextModeIndex = currentModeIndex + 1
    }

    return modes[nextModeIndex]
})

const nextModeIcon = computed(() => nextModeIcons[nextMode.value])

const toggleMode = () => colorMode.preference = nextMode.value
</script>