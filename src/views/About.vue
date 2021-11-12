<script lang="ts" setup>
import { reactive, ref } from "@vue/reactivity";
import MySetup from "@/components/MySetup.vue";
import { User } from "@/types";

const count = ref<number>(0);

const handleAdd = () => count.value++;

const user = reactive<User>({
  name: "Amber",
  age: 13,
  address: "Xi an",
});
</script>

<template>
  <div class="about">
    <h1 @click="handleAdd">This is an about page. {{ count }}</h1>
    <MySetup :user="user"></MySetup>
  </div>
</template>
