<script lang="ts" setup>
import { ref } from "vue";
const a = ref<number>(0);
const handleAdd = () => a.value++;
</script>

<template>
  <span @click="handleAdd">{{ a }}</span>
</template>
