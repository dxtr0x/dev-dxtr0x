import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Project } from '@/domain/entities/Project'
import { FilterProjectsUseCase } from '@/usecases/FilterProjectsUseCase'

const PER_PAGE = 8
const filterUseCase = new FilterProjectsUseCase()

export const useProjectStore = defineStore('projects', () => {
  const projects = ref<Project[]>([])
  const page = ref(1)
  const language = ref<string | null>(null)

  const filtered = computed(() => filterUseCase.filter(projects.value, language.value))
  const view = computed(() => filterUseCase.paginate(filtered.value, page.value, PER_PAGE))
  const languages = computed(() => [...new Set(projects.value.map((p) => p.language))])

  function setProjects(list: Project[]) { projects.value = list }
  function setPage(n: number) { page.value = Math.min(Math.max(n, 1), view.value.totalPages) }
  function setLanguage(l: string | null) { language.value = l; page.value = 1 }

  return { projects, page, language, view, languages, setProjects, setPage, setLanguage }
})
