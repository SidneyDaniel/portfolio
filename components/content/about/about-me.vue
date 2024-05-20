<template>
    <div class="not-prose flex justify-end  gap-3 pb-2 text-3xl">
        <NuxtLink to="https://github.com/SidneyDaniel" target="_blank">
            <UIcon name="i-simple-icons:github" dynamic class="text-inherit"/>
        </NuxtLink>

        <NuxtLink to="https://www.linkedin.com/in/sidney-daniel-lopes-a514801b7" target="_blank">
            <UIcon name="i-simple-icons:linkedin" dynamic class="text-inherit"/>
        </NuxtLink>
    </div>

    <UDivider/>

    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <img src="https://avatars.githubusercontent.com/u/102486000?v=4" alt="GitHub Photo" class="rounded-lg w-60">
        <div class="not-prose ">
            <h1 class="text-2xl text-gray-600">Sobre</h1>
            <p class="text-justify">
                Olá, meu nome é Sidney Daniel. 
                Sou estudante na área de TI e um entusiasta do mundo da tecnologia, 
                sempre buscando aprender mais sobre esse campo em constante evolução. Atualmente, 
                estou focado em aprimorar minhas habilidades em Nuxt.js, Sequelize, SQLite, MongoDB e TailwindCSS. 
                Estou sempre pronto para enfrentar novos desafios e ansioso para ver onde minha jornada no mundo da tecnologia me levará.🚀
            </p>
        </div>
   </div>

   <UDivider/>

   <div class="not-prose mb-8">
    <h1 class="text-xl text-gray-400 mb-2">Formações</h1>
    <p class="mb-6 font-sans text-gray-500 :dark-text-gray-300 italic">
            Algumas das minhas formações acadêmicas
    </p>

    <ul>
        <li v-for="inst in formations" class="mb-4">
            <div class="flex mb-3 gap-3">
                <UIcon :name="`${inst.icon}`" dynamic class="text-4xl"/>
                <div>
                    <h1>{{ inst.name }}</h1>
                    <NuxtLink :to="inst.link" target="_blank">
                        <h2 class="text-sm text-gray-500 underline mb-2">{{ inst.institution }}</h2> 
                    </NuxtLink>
                    <UBadge 
                        class="mr-2"
                        color="gray" 
                        variant="solid" 
                        v-for="(tag, index) in inst.tags" 
                        :key="index">
                        {{ tag }}
                    </UBadge>
                </div>
            </div>

        </li>
    </ul>
    

   </div>


   <div class="not-prose mb-8">
    <h1 class="text-xl text-gray-400 mb-2">Experiências</h1>
    <ul class="flex-col">
        <li v-for="item in items" class="mb-2">
            <h1 class="font-bold text-base">{{ item.name }}</h1>
            <h2 class="text-sm text-gray-500">{{ item.period }}</h2>
        </li>
    </ul>
   </div>
   
   <div class="not-prose">
    <h1 class="text-xl text-gray-400 mb-2">Stacks</h1>
    <p class="mb-6 font-sans text-gray-500 :dark-text-gray-300 italic">
        Algumas das tecnologias que eu tenho conhecimento atualmente
        <UIcon name="i-carbon:ibm-watson-knowledge-catalog" dynamic class="text-xl"/>
    </p>
    
    <div class="flex flex-col gap-5">
       <div>
            <h1 class="text-xl mb-3">Desenvolvimento</h1>
            <ul class="flex flex-row flex-wrap gap-2">
                <li v-for="stck in tech" class="flex flex-row min-w-80 max-w-80 text-justify gap-3 border border-gray-200 dark:border-gray-800 p-2 rounded-md  inset-0 bg-[radial-gradient(40%_128px_at_50%_0%,theme(backgroundColor.white/5%),transparent)]">
                    <NuxtLink :to="stck.link" target="_blank">
                        <UIcon :name="`${stck.logo}`" dynamic class="text-4xl"/>
                    </NuxtLink>
                    <div>
                        <h1 class="mb-1 font-bold">{{ stck.name }}</h1>
                        <p class="text-xs mb-2">{{ stck.description.ptBr }}</p>
                        <UBadge 
                            class="mr-2"
                            color="gray" 
                            variant="solid" 
                            v-for="(tag, index) in stck.tags" 
                            :key="index">
                            {{ tag }}
                        </UBadge>
                    </div>
                </li>
            </ul>
       </div>

       <div>
            <h1 class="text-xl mb-3">Produtividade</h1>
            <ul class="flex flex-row flex-wrap gap-2">
                <li v-for="stck in productivity" class="flex flex-row min-w-80 max-w-80 text-justify gap-3 border border-gray-200 dark:border-gray-800 p-2 rounded-md  inset-0 bg-[radial-gradient(40%_128px_at_50%_0%,theme(backgroundColor.white/5%),transparent)]">
                    <NuxtLink :to="stck.link" target="_blank">
                        <UIcon :name="`${stck.logo}`" dynamic class="text-4xl"/>
                    </NuxtLink>
                    <div>
                        <h1 class="mb-1 font-bold">{{ stck.name }}</h1>
                        <p class="text-xs mb-2">{{ stck.description.ptBr }}</p>
                        <UBadge 
                            class="mr-2"
                            color="gray" 
                            variant="solid" 
                            v-for="(tag, index) in stck.tags" 
                            :key="index">
                            {{ tag }}
                        </UBadge>
                    </div>
                </li>
            </ul>
       </div>

       <div>
            <h1 class="text-xl mb-3">Design</h1>
            <ul class="flex flex-row flex-wrap gap-2">
                <li v-for="stck in design" class="flex flex-row min-w-80 max-w-80 text-justify gap-3 border border-gray-200 dark:border-gray-800 p-2 rounded-md  inset-0 bg-[radial-gradient(40%_128px_at_50%_0%,theme(backgroundColor.white/5%),transparent)]">
                    <NuxtLink :to="stck.link" target="_blank">
                        <UIcon :name="`${stck.logo}`" dynamic class="text-4xl"/>
                    </NuxtLink>
                    <div>
                        <h1 class="mb-1 font-bold">{{ stck.name }}</h1>
                        <p class="text-xs mb-2">{{ stck.description.ptBr }}</p>
                        <UBadge 
                            class="mr-2"
                            color="gray" 
                            variant="solid" 
                            v-for="(tag, index) in stck.tags" 
                            :key="index">
                            {{ tag }}
                        </UBadge>
                    </div>
                </li>
            </ul>
       </div>

       <div>
            <h1 class="text-xl mb-3">Ferramentas</h1>
            <ul class="flex flex-row flex-wrap gap-2">
                <li v-for="stck in tools" class="flex flex-row min-w-80 max-w-80 text-justify gap-3 border border-gray-200 dark:border-gray-800 p-2 rounded-md  inset-0 bg-[radial-gradient(40%_128px_at_50%_0%,theme(backgroundColor.white/5%),transparent)]">
                    <NuxtLink :to="stck.link" target="_blank">
                        <UIcon :name="`${stck.logo}`" dynamic class="text-4xl"/>
                    </NuxtLink>
                    <div>
                        <h1 class="mb-1 font-bold">{{ stck.name }}</h1>
                        <p class="text-xs mb-2">{{ stck.description.ptBr }}</p>
                        <UBadge 
                            class="mr-2"
                            color="gray" 
                            variant="solid" 
                            v-for="(tag, index) in stck.tags" 
                            :key="index">
                            {{ tag }}
                        </UBadge>
                    </div>
                </li>
            </ul>
       </div>
    </div>
      
   </div>
</template>

<script setup>
import { stacks } from '~/data/stacks';

const items = [
    {
    name: 'Front-End Developer',
    period: '2024 - Today / Freelance',
    }   
]

const formations = [
    {
        name: 'Análise e Desenvolvimento de Sistemas',
        icon: 'i-maki:college',
        institution: 'Centro Universitário Internacional - Uninter',
        period:'2022 / Today',
        status: 'Cursando',
        tags: ['Faculdade'],
        link:'https://www.uninter.com/'
    },
    {
        name:'Programa de Educação e Empregabilidade',
        icon: 'i-mdi:certificate',
        institution: 'ONE - Oracle Next Education',
        period:'2022 / 2023',
        status: 'Completo',
        tags: ['Front-end', 'Java e Orientação a Objetos', 'git', 'python'],
        link: 'https://cursos.alura.com.br/program/certificate/e78d0f27-5e84-4bcf-a8a3-fbde3b840779?lang=pt_BR'
    },
    {
        name:'Alura',
        icon: 'i-mdi:certificate',
        institution: 'AOVS Sistemas de Informática SA',
        period:'2023 / Today',
        status: 'Cursando',
        tags: ['Vue', 'TypeScript', 'Js', 'bulma...'],
        link: 'https://www.alura.com.br/'
    },
    {
        name:'Udemy',
        icon: 'i-mdi:certificate',
        institution: 'Udemy',
        period:'2024 / Today',
        status: 'Cursando',
        tags: ['Nuxt.js', 'tailwind', 'vercel..'],
        link: 'https://www.udemy.com/'
    }
]

const allStacks = stacks
const tech = stacks.techStack
const productivity = stacks.productivityStack
const design = stacks.designStack
const tools = stacks.toolsStack


</script>

<style scoped>
</style>