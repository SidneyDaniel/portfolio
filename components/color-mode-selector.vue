<template>
    <div class="flex space-x-2 items-center">
        <div class="text-gray-500 text-xs hidden md:block" v-if="showNextModelLabel">
            {{ nextMode }}
        </div>
        <div>
            <button @click="toggleMode" @mouseenter="showNextModelLabel = true" @mouseleave="showNextModelLabel = false" class="px-2 py-1 text-gray-500 text-3xl md:text-2xl">
                <UIcon :name="nextModeIcon" dynamic class="text-inherit"/>
            </button>
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
    system: 'i-line-md:laptop-twotone',
    light: 'i-line-md:moon-alt-to-sunny-outline-loop-transition',
    dark: 'i-line-md:sunny-filled-loop-to-moon-alt-filled-loop-transition'
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