import type { Project } from '@/domain/entities/Project'
import type { Article } from '@/domain/entities/Article'
import githubRepos from '@/data/repos.yml'

/** Shape of each repository entry exported by the GitHub Actions workflow. */
interface GitHubRepository {
  name: string
  full_name: string
  url: string
  private: boolean
  description: string | null
  languages: Array<{
    name: string
    bytes: number
  }>
}

const repositories = githubRepos as GitHubRepository[]

/**
 * Keep the portfolio data limited to public repositories.
 * IMPORTANT: repos.yml itself should also contain only public repositories
 * before it is bundled into a public frontend build.
 */
const publicRepositories = repositories.filter((repo) => !repo.private)

const hashvaultProject: Project = {
  id: 'hashvault',
  number: '01',
  title: 'hashvault',
  language: 'Go',
  description:
    'A CLI tool for verifying SHA-256 digests in constant time, designed to avoid leaking password hashes through logs.',
  tags: ['Go', 'SHA-256', 'Bubble Tea'],
  // Replace this URL with the actual repository URL.
  githubUrl: 'https://github.com/your-handle/hashvault',
}

const githubProjects: Project[] = publicRepositories.map((repo, index) => ({
  id: repo.full_name,
  number: String(index + 2).padStart(2, '0'),
  title: repo.name,
  language: repo.languages[0]?.name ?? 'Unknown',
  description:
    repo.description?.trim() || `GitHub repository: ${repo.full_name}`,
  tags: repo.languages.map(({ name }) => name),
  githubUrl: repo.url,
  // Add a docsUrl property to your YAML schema only when a real docs URL exists.
}))

export const staticProjects: Project[] = [hashvaultProject, ...githubProjects]

export const staticArticles: Article[] = [
  {
    id: 'a1',
    title: 'Designing idempotent webhooks in Go',
    kind: 'Blog',
    domain: 'dev.to',
    url: 'https://dev.to/',
  },
  {
    id: 'a2',
    title: 'Why I think first, build second',
    kind: 'Blog',
    domain: 'dev.to',
    url: 'https://dev.to/',
  },
  {
    id: 'a3',
    title: 'Token buckets vs sliding windows',
    kind: 'External',
    domain: 'medium.com',
    url: 'https://medium.com/',
  },
]
