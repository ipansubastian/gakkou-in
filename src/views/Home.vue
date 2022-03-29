<template>
  <main class="overflow-hidden">
    <Section1 />
    <Section2 />
    <Section3 />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Section1 from '@/components/home/Section1.vue';
import Section2 from '@/components/home/Section2.vue';
import Section3 from '@/components/home/Section3.vue';

export default defineComponent({
  name: 'Home',
  data(): Record<string, unknown> {
    return {};
  },
  components: {
    Section1,
    Section2,
    Section3
  }
});
</script>

<style lang="scss" scoped>
main {
  height: auto;
}
</style>
