<script setup lang="ts">
const { data } = useFetch("/api/hello-world");
</script>

<template>
  <div class="h-screen w-full flex items-center justify-center">
    <div class="container w-full text-lg p-10 border rounded shadow-lg">
      <div class="font-bold mb-2">DATA:</div>
      <div>{{ JSON.stringify(data) }}</div>
    </div>
  </div>
</template>
