<script setup lang="ts">
import type { Project } from '@/domain/entities/Project'
import ProjectCard from './ProjectCard.vue'
defineProps<{ projects: Project[] }>()
</script>

<template>
  <div class="border-t border-line"><ProjectCard v-for="p in projects" :key="p.id" :project="p" /></div>
</template>
