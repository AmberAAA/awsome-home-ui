<script lang="ts" setup>
import { User } from "@/types";
import { ref, defineProps } from "vue";
const a = ref<number>(0);
const handleAdd = () => a.value++;

const props = defineProps<{ user: User }>();
</script>

<template>
  <span @click="handleAdd">{{ a }}</span>
  <div>
    <h3>User Info</h3>
    <p>name: {{ props.user.name }}</p>
    <p>age: {{ props.user.age }}</p>
    <p>address: {{ props.user.address }}</p>
  </div>
</template>
