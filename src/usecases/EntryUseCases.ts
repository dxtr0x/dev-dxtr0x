import type { IEntryRepository } from '@/domain/repositories/IEntryRepository'
import type { EntryInput, EntryKind, ListParams } from '@/domain/entities/Entry'

export class ListEntriesUseCase {
  constructor(private repo: IEntryRepository) {}
  execute(p: ListParams) { return this.repo.list(p) }
  tags() { return this.repo.tags() }
}

export class GetEntryUseCase {
  constructor(private repo: IEntryRepository) {}
  execute(kind: EntryKind, slug: string) { return this.repo.get(kind, slug) }
}

export class SaveEntryUseCase {
  constructor(private repo: IEntryRepository) {}
  execute(kind: EntryKind, input: EntryInput, existingSlug?: string) {
    return existingSlug ? this.repo.update(kind, existingSlug, input) : this.repo.create(kind, input)
  }
  remove(kind: EntryKind, slug: string) { return this.repo.remove(kind, slug) }
}

export class AuthUseCase {
  constructor(private repo: IEntryRepository) {}
  login(password: string) { return this.repo.login(password) }
  logout() { return this.repo.logout() }
}
