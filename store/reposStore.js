export const useReposStore = defineStore('repos', {
  id: 'reposStore',
  state: () => ({
    repos: null,
    filteredRepos: null, 
    transformedRepos: null,
    loading: false,
    error: null
  }),
  actions: {
    async fetchRepos() {
      if(this.repos !== null) return

      this.loading = true
      this.error = null
      try {
          const response = await fetch('https://api.github.com/users/SidneyDaniel/repos')
          const data = await response.json()
          this.repos = data
          this.filteredRepos = data 
          this.transformedRepos = data.map(repo => ({
            id: repo.id,
            label: repo.name,
            href: repo.html_url,
            target: '_blank'
          }));
      } catch (erro) {
          this.error = erro.message
      }finally{
          this.loading = false
      } 
    },
    orderByNameAsc() {
      this.filteredRepos.sort((a, b) => a.name.localeCompare(b.name));
    },
    orderByNameDesc() {
      this.filteredRepos.sort((a, b) => b.name.localeCompare(a.name));
    },
    orderByDescription(){
      this.filteredRepos = this.filteredRepos.filter(repo => repo.description);
    },
    orderByForks(){
      this.filteredRepos = this.filteredRepos.filter(repo => repo.fork)
    },
    resetFilters() {
      this.filteredRepos = [...this.repos];
    }
  }
})
