export interface Project {
  id: string
  number: string // e.g. "01"
  title: string
  language: string // e.g. "Go"
  description: string
  tags: string[]
  githubUrl: string
  docsUrl?: string
}
