import type { Project } from '@/domain/entities/Project'
import type { Article } from '@/domain/entities/Article'

// PLACEHOLDER CONTENT — replace with your real projects.
type Seed = [title: string, language: string, description: string, tags: string[], docs?: boolean]
const seeds: Seed[] = [
  ['hashvault', 'Go', 'Problem: password audits leak hashes in logs. Solution: a CLI that verifies SHA-256 digests in constant time, 40k checks/sec.', ['Go', 'SHA-256', 'Bubble Tea'], true],
  ['queuewright', 'Go', 'Problem: cron-based jobs silently fail. Solution: durable job queue with retries and dead-letter handling.', ['Go', 'PostgreSQL', 'Redis'], true],
  ['ratelimiter', 'Go', 'Problem: bursty traffic overwhelms APIs. Solution: token-bucket middleware with sliding-window fallback, p99 < 1ms.', ['Go', 'Redis']],
  ['paperboy', 'PHP', 'Problem: legacy mailers block requests. Solution: async mail dispatcher with templating and bounce tracking.', ['PHP', 'MySQL', 'RabbitMQ'], true],
  ['gemfeed', 'Ruby', 'Problem: RSS aggregation is slow at scale. Solution: concurrent fetcher with conditional GETs and caching.', ['Ruby', 'Sidekiq', 'Redis']],
  ['logslicer', 'Go', 'Problem: grepping GBs of logs is painful. Solution: indexed log search with a TUI, 10x faster than grep.', ['Go', 'Bubble Tea', 'SQLite']],
  ['authgate', 'Go', 'Problem: every service reinvents auth. Solution: JWT/OIDC gateway with key rotation and audit trails.', ['Go', 'JWT', 'PostgreSQL'], true],
  ['migrator', 'Go', 'Problem: risky schema changes. Solution: zero-downtime migration runner with dry-run and rollback.', ['Go', 'PostgreSQL']],
  ['webhookd', 'Go', 'Problem: lost webhooks. Solution: signed, replayable delivery with exponential backoff.', ['Go', 'HMAC', 'Redis']],
  ['shortlink', 'PHP', 'Problem: link analytics are bloated. Solution: lightweight shortener with privacy-first click stats.', ['PHP', 'SQLite']],
]

export const staticProjects: Project[] = seeds.map(([title, language, description, tags, docs], i) => ({
  id: title,
  number: String(i + 1).padStart(2, '0'),
  title,
  language,
  description,
  tags,
  githubUrl: `https://github.com/your-handle/${title}`,
  docsUrl: docs ? `https://your-handle.github.io/${title}` : undefined,
}))

export const staticArticles: Article[] = [
  { id: 'a1', title: 'Designing idempotent webhooks in Go', kind: 'Blog', domain: 'dev.to', url: 'https://dev.to/' },
  { id: 'a2', title: 'Why I think first, build second', kind: 'Blog', domain: 'dev.to', url: 'https://dev.to/' },
  { id: 'a3', title: 'Token buckets vs sliding windows', kind: 'External', domain: 'medium.com', url: 'https://medium.com/' },
]
