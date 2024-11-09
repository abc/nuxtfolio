<template>
  <nav class="self-center">
    <ul class="flex gap-4">
      <li>
        <NuxtLink to="/">About me</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/portfolio">Portfolio</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
</script>

<style>

</style>