<script lang="ts" setup>
import { defineProps, withDefaults } from "vue";

interface PropType {
  disabled?: boolean;
}

const props = withDefaults(defineProps<PropType>(), {
  disabled: false,
});
</script>

<template>
  <button class="m-2 p-2 bg-indigo-600 rotate-6 hover:-rotate-3" v-bind="props">
    <slot></slot>
  </button>
</template>
