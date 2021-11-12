<script lang="ts" setup>
import { ref } from "@vue/reactivity";

const count = ref<number>(0);

const handleAdd = () => count.value++;
</script>

<template>
  <div class="about">
    <h1 @click="handleAdd">This is an about page. {{ count }}</h1>
  </div>
</template>
