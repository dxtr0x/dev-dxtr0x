import type { IProjectRepository } from '@/domain/repositories/IProjectRepository'
import type { Project } from '@/domain/entities/Project'

export class GetProjectsUseCase {
  constructor(private readonly repo: IProjectRepository) {}
  execute(): Promise<Project[]> {
    return this.repo.getAll()
  }
}
