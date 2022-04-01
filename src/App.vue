<template>
  <TopBar />
  <router-view />
</template>

<script lang="ts">
import TopBar from '@/components/TopBar.vue';
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  name: 'App',
  components: {
    TopBar
  }
});
</script>
