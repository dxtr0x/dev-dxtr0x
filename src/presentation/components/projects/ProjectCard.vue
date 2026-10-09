<script setup lang="ts">
import type { Project } from '@/domain/entities/Project'
import Tag from '@/presentation/components/common/Tag.vue'
defineProps<{ project: Project }>()
</script>

<template>
  <article class="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-line py-6 transition hover:bg-panel/60 sm:px-3">
    <span class="pt-0.5 text-sm text-muted">{{ project.number }}</span>
    <div class="space-y-3">
      <header class="flex flex-wrap items-center gap-3">
        <h3 class="text-base font-bold">{{ project.title }}</h3>
        <Tag :label="project.language" strong />
      </header>
      <p class="text-sm leading-relaxed text-muted">{{ project.description }}</p>
      <ul class="flex flex-wrap gap-2"><li v-for="t in project.tags" :key="t"><Tag :label="t" /></li></ul>
      <div class="flex gap-4 text-xs">
        <a :href="project.githubUrl" target="_blank" rel="noopener" class="underline-offset-4 hover:text-accent hover:underline">GitHub ↗</a>
        <a v-if="project.docsUrl" :href="project.docsUrl" target="_blank" rel="noopener" class="underline-offset-4 hover:text-accent hover:underline">Docs ↗</a>
      </div>
    </div>
  </article>
</template>
