<template>
  <TopBar/>
  <router-view />
</template>

<script lang="ts">
import TopBar from '@/components/TopBar.vue'

export default {
  components: {
    TopBar
  },
};
</script>

<style lang="scss"></style>
