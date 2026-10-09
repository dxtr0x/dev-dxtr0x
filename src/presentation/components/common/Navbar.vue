<script setup lang="ts">
const links = [['Projects', '#projects'], ['Writing', '#writing'], ['Resume ↗', '#resume']] as const
</script>

<template>
  <header class="sticky top-0 z-20 border-b border-line bg-bg/80 backdrop-blur">
    <nav class="mx-auto flex h-14 max-w-4xl items-center justify-between px-5 text-sm">
      <a href="#" class="font-bold"><span class="text-accent">&gt;_</span> dxtr0x</a>
      <ul class="flex gap-5 text-muted">
        <li v-for="[label, href] in links" :key="href"><a :href="href" class="transition hover:text-fg">{{ label }}</a></li>
      </ul>
    </nav>
  </header>
</template>
