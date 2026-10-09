<script setup lang="ts">
import Pagination from '@/presentation/components/common/Pagination.vue'
defineProps<{ page: number; totalPages: number; from: number; to: number; total: number }>()
defineEmits<{ change: [page: number] }>()
</script>

<template>
  <div class="mt-6 flex flex-wrap items-center justify-between gap-4">
    <Pagination :page="page" :total-pages="totalPages" @change="$emit('change', $event)" />
    <p class="text-xs text-muted">{{ from }}–{{ to }} of {{ total }} · <a href="https://github.com/your-handle" target="_blank" rel="noopener" class="hover:text-fg">More on GitHub →</a></p>
  </div>
</template>
