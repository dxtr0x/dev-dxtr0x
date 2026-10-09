export interface Article {
  id: string
  title: string
  kind: 'Blog' | 'External'
  domain: string
  url: string
}
