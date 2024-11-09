<template>
  <div class="flex justify-evenly flex-wrap">
    <PortfolioCard
      v-for="item in data"
      :url="item._path"
      :title="item.title"
      :image="item.image"
    />
  </div>
</template>

<script lang="ts" setup>
const { data } = await useAsyncData('portfolio', () =>
  queryContent('portfolio').without('body').find(),
)
</script>

<style></style>
