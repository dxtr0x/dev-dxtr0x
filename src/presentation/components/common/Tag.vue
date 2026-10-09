<script setup lang="ts">
defineProps<{ label: string; strong?: boolean }>()
</script>

<template>
  <span class="rounded-full border px-2.5 py-0.5 text-[11px]" :class="strong ? 'border-accent text-accent' : 'border-line text-muted'">{{ label }}</span>
</template>
