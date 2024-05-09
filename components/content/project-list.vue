<template>
    
    <div v-if="loading">Carregando...</div>
    <div v-else-if="error">Erro: {{ error }}</div>

    <div class="flex justify-end mb-7 gap-2" v-else>
      
      <UButton color="white" @click="isOpen = true" variant="solid" >
        Pesquisar<UIcon name="i-carbon-search" dynamic class="text-xl"/>
      </UButton>

      <UModal v-model="isOpen">
        <UCommandPalette
          
          nullable
          :groups="[{ key: 'searchRepos', commands: searchRepos }]"
          @update:model-value="onSelect"
        />
      </UModal>

      <UDropdown :items="items" :popper="{ placement: 'bottom-start' }" :resize="true">
        <UButton color="white" trailing-icon="i-heroicons-chevron-down-20-solid">
          <UIcon name="i-mdi-sort-alphabetical" dynamic class="text-xl"/>
        </UButton>
      </UDropdown>

      <UButton color="white" @click="sortByDescription">
          Descrição<UIcon name="i-mdi-text-box-outline" dynamic class="text-xl"/>
      </UButton>

      <UButton color="white" @click="sortByForks">
          Forks<UIcon name="i-carbon-fork" dynamic class="text-xl"/>
      </UButton>

      <UButton color="white" @click="allRepos">
          All<UIcon name="i-mdi-git-repository" dynamic class="text-xl"/>
      </UButton>

    </div>

    <div class="not-prose">
        <section v-if="pending">Loading...</section>
    <section v-else-if="error">Something went wrong... Try again!</section>
    
    <section v-else>
        <ul class="grid grid-cols-1 gap-4">
            <li v-for="repository in repos" :key="repository.id" class="border border-gray-200 dark:border-gray-800 rounded-sm p-4 hover:bg-gray-200 dark:hover:bg-gray-800 font-mono">
              <a :href="repository.html_url" target="_blank">
                <div class="flex items-center justify-between text-sm">
                    <div class="font-semibold">{{ repository.name }}</div>
                    <div>{{ repository.stargazers_count }} *</div>
                </div>
                <p class="text-sm">
                    {{ repository.description }}
                </p>
              </a> 
            </li>
        </ul>
    </section>
    </div>
    
  

</template>

<script>
import { useReposStore } from '~/store/reposStore';

export default {
  setup() {
    const reposStore = useReposStore();
    const repos = computed(() => reposStore.filteredRepos);
    const transformedRepos= computed(()=> reposStore.transformedRepos)
    const loading = computed(() => reposStore.loading);
    const error = computed(() => reposStore.error)
    console.log(transformedRepos.value);
    reposStore.fetchRepos();
    
    // Aqui éra necessário resetar array filteredRepos se não ele fica voltando somente a nova lista na troca de descrição para fork e vice-versa
    const sortByDescription = () => {
      reposStore.resetFilters()
      reposStore.orderByDescription()
    }

    const sortByForks = () => {
      reposStore.resetFilters()
      reposStore.orderByForks()
    }

    const allRepos = () => {
      reposStore.resetFilters();
    }
    
    const items = [
      [{
        label: 'Abcd - Z',
        icon: 'i-heroicons-arrow-small-down-solid',
        class: 'text-xs',
        click: () => {
          console.log('A ===> Z')
          reposStore.orderByNameAsc();
        }
      }, {
        label: 'Z - dcbA',
        icon: 'i-heroicons-arrow-small-up-solid',
        class: 'text-xs',
        click: () => {
          console.log('Z ===> A')
          reposStore.orderByNameDesc()
        }
      }]
    ]

    const isOpen = ref(false)
    const searchRepos = transformedRepos.value

    function onSelect (option) {
      if (option.href) {
        window.open(option.href, '_blank')
      }
    }
    
    return { repos, loading, error, items, sortByDescription, sortByForks, allRepos, searchRepos, onSelect, isOpen };
  }
}
</script>