import type { Project } from '@/domain/entities/Project'

export interface Page<T> { items: T[]; total: number; totalPages: number; from: number; to: number }

export class FilterProjectsUseCase {
  filter(projects: Project[], language: string | null): Project[] {
    return language ? projects.filter((p) => p.language === language) : projects
  }
  paginate(projects: Project[], page: number, perPage: number): Page<Project> {
    const total = projects.length
    const totalPages = Math.max(1, Math.ceil(total / perPage))
    const current = Math.min(Math.max(page, 1), totalPages)
    const start = (current - 1) * perPage
    const items = projects.slice(start, start + perPage)
    return { items, total, totalPages, from: total ? start + 1 : 0, to: start + items.length }
  }
}
