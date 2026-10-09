import type { IProjectRepository } from '@/domain/repositories/IProjectRepository'
import type { Project } from '@/domain/entities/Project'
import { staticProjects } from '@/data/datasources/staticProjectsData'

export class ProjectRepositoryImpl implements IProjectRepository {
  async getAll(): Promise<Project[]> {
    return [...staticProjects]
  }
}
