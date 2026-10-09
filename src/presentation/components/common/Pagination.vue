<script setup lang="ts">
defineProps<{ page: number; totalPages: number }>()
defineEmits<{ change: [page: number] }>()
const btn = 'rounded border border-line px-2.5 py-1 text-xs transition hover:border-fg disabled:opacity-30 disabled:hover:border-line'
</script>

<template>
  <nav class="flex flex-wrap items-center gap-2" aria-label="Pagination">
    <button :class="btn" :disabled="page <= 1" @click="$emit('change', page - 1)">← Prev</button>
    <button v-for="n in totalPages" :key="n" :class="[btn, n === page && 'border-accent text-accent']" :aria-current="n === page" @click="$emit('change', n)">{{ n }}</button>
    <button :class="btn" :disabled="page >= totalPages" @click="$emit('change', page + 1)">Next →</button>
  </nav>
</template>
