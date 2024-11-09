<template>
  <div class="flex flex-col content-center p-2">
    <div>
      <h3 class="text-2xl text-center py-2">
        <NuxtLink :to="url">
          {{ title }}
        </NuxtLink>
      </h3>
      <div class="w-32 h-32 mx-auto">
        <NuxtLink :to="url">
          <img :src="image" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
})
</script>

<style></style>
