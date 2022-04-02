<template>
  <main class="overflow-hidden">
    <TopSection />
    <HexagonSection />
    <TopNews />
    <WitnessesSection />
    <QuestionOffer />
    <SchoolBlog />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TopSection from '@/components/home/TopSection.vue';
import HexagonSection from '@/components/home/HexagonSection.vue';
import TopNews from '@/components/home/TopNews.vue';
import WitnessesSection from '@/components/home/WitnessesSection.vue';
import QuestionOffer from '@/components/home/QuestionOffer.vue';
import SchoolBlog from '@/components/home/SchoolBlog.vue';

export default defineComponent({
  name: 'Home',
  data(): Record<string, unknown> {
    return {};
  },
  components: {
    TopSection,
    HexagonSection,
    TopNews,
    WitnessesSection,
    QuestionOffer,
    SchoolBlog,
  },
});
</script>

<style lang="scss" scoped>
main {
  height: auto;
}
</style>
