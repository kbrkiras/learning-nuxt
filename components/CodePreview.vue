<script setup lang="ts">
const props = defineProps<{
  code: string
  language?: string
}>()
const { code } = toRefs(props)
const { copy, copied } = useClipboard({ source: code })
</script>

<template>
<div class="bg-gray-200 p-4 rounded-lg">
  <pre><code class="text-gray-800">{{code}}</code></pre>
</div>

</template>

<style>
pre code {
  display: block;
  min-height: 1rem;
}
</style>