<script setup lang="ts">
const appConfig = useAppConfig()

</script>
<template>
<span class="text-3xl">Composables</span>
<div class="relative mt-5 mb-5">
  <div class="absolute inset-0 flex items-center" aria-hidden="true">
    <div class="w-full border-t border-gray-300"></div>
  </div>
</div>
<span class="text-xl mt-5">App Config</span>
<CodePreview code="appConfig" filename="test" language="ts" ></CodePreview>
</template>