<script setup lang="ts">
import { ExternalLink } from 'lucide-vue-next'
import type { Article } from '@/domain/entities/Article'
import Tag from '@/presentation/components/common/Tag.vue'
defineProps<{ article: Article }>()
</script>

<template>
  <a :href="article.url" target="_blank" rel="noopener" class="group flex items-center justify-between gap-4 border-b border-line py-4 text-sm transition hover:bg-panel/60 sm:px-3">
    <span class="flex flex-wrap items-center gap-3"><Tag :label="article.kind" /><span class="group-hover:text-accent">{{ article.title }}</span></span>
    <span class="flex shrink-0 items-center gap-1.5 text-xs text-muted">{{ article.domain }} ↗ <ExternalLink :size="12" /></span>
  </a>
</template>
