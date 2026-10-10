<script setup lang="ts">
import Navbar from '@/presentation/components/common/Navbar.vue'
import Footer from '@/presentation/components/common/Footer.vue'
import InteractiveCube from '@/presentation/components/3d/InteractiveCube.vue'
import ProjectGrid from '@/presentation/components/projects/ProjectGrid.vue'
import ProjectPagination from '@/presentation/components/projects/ProjectPagination.vue'
import WritingSection from '@/presentation/components/writing/WritingSection.vue'
import { useProjects } from '@/presentation/composables/useProjects'

const { store, view, page } = useProjects()

const cta = [['Why hire me', '#why'], ['Projects', '#projects'], ['Resume', '#resume']] as const
</script>

<template>
  <Navbar />
  <main class="mx-auto max-w-4xl px-5">
    <section class="flex flex-col items-center gap-8 py-16 md:flex-row md:justify-between">
      <div class="min-w-0 space-y-6">
        <p class="text-xs uppercase tracking-[0.5em] text-muted">Network / Cybersecurity</p>
        <h1 class="max-w-xl text-2xl font-bold leading-snug sm:text-3xl">Cybersecurity / Network Engineer. Coding for freedom with Rust, C/C++, Julia, and Python.</h1>
        <p id="why" class="max-w-xl text-sm text-muted">Secured networks and strengthened defenses.</p>
        <div class="flex flex-wrap gap-3 text-sm">
          <a v-for="[label, href] in cta" :key="href" :href="href" class="rounded border border-line px-4 py-2 transition hover:border-accent hover:text-accent">{{ label }}</a>
        </div>
      </div>
      <InteractiveCube />
    </section>

    <section id="projects" class="py-16">
      <h2 class="mb-6 text-sm uppercase tracking-widest text-muted">Projects</h2>
      <ProjectGrid :projects="view.items" />
      <ProjectPagination :page="page" :total-pages="view.totalPages" :from="view.from" :to="view.to" :total="view.total" @change="store.setPage" />
    </section>

    <WritingSection />
  </main>
  <Footer />
</template>
