<script setup lang="ts">
import { staticArticles } from '@/data/datasources/staticProjectsData'
import ArticleCard from './ArticleCard.vue'
</script>

<template>
  <section id="writing" class="py-16">
    <h2 class="mb-6 text-sm uppercase tracking-widest text-muted">Writing</h2>
    <div class="border-t border-line"><ArticleCard v-for="a in staticArticles" :key="a.id" :article="a" /></div>
  </section>
</template>
