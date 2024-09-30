<script lang="ts" setup>
import { generateCustomPalette } from '@edaru/color-palette-generator'

const color = ref('#123456')
const palette = computed(() => generateCustomPalette(color.value))
</script>

<template>
  <div class="flex flex-col gap-6 items-center p-6">
    <h1 class="text-4xl font-semibold">
      Color palette generator
    </h1>

    <div class="flex flex-row gap-2 items-center relative">
      <div class="relative inline-block">
        <input v-model="color" type="color" class="absolute rounded-full w-full h-full opacity-0 cursor-pointer">
        <div class="w-10 h-10 rounded-full" :style="{ backgroundColor: color }" />
      </div>
      <input v-model="color" class="p-2 rounded-full uppercase" type="text">
    </div>

    <div class="w-fit flex flex-row flex-wrap gap-2">
      <div
        v-for="c in palette.shades"
        :key="c.shade"
        :style="{
          backgroundColor: c.hex,
        }"
        class="relative h-24 w-24 rounded-md flex flex-col gap-0.5 items-center justify-center"
      >
        <span
          class="font-semibold"
          :style="{ color: c.shade > 400 ? palette.shades[1].hex : palette.shades[9].hex }"
        >{{
          c.shade }}</span>
        <span
          class="uppercase"
          :style="{ color: c.shade > 400 ? palette.shades[1].hex : palette.shades[9].hex }"
        >{{
          c.hex }}</span>
      </div>
    </div>
  </div>
</template>
