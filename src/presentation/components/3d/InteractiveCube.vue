<script setup lang="ts">
import { ref } from 'vue'
import { use3DCube } from '@/presentation/composables/use3DCube'

const host = ref<HTMLElement | null>(null)
use3DCube(host)
</script>

<template>
  <div class="flex flex-col items-center gap-2">
    <div ref="host" class="h-56 w-56 sm:h-64 sm:w-64" aria-label="Interactive wireframe cube" />
    <p class="text-xs text-muted">drag · click · r u f keys</p>
  </div>
</template>
