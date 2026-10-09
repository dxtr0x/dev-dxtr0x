import type { Project } from '@/domain/entities/Project'

export interface IProjectRepository {
  getAll(): Promise<Project[]>
}
