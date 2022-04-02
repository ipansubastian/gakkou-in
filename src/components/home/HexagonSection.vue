<template>
  <section class="grid grid-rows-2 section-2">
    <div class="background-layer grid grid-cols-5 pil-row">
      <div class="col-start-3 col-span-3">
        <div class="mt-24 transform h-full pil-container">
          <div class="bg-gray-100 w-full rounded-full pil" />
        </div>
      </div>
    </div>
    <div class="grid grid-cols-11 relative foreground-layer">
      <div>
        <div class="relative left-52 top-20 w-64 text-lg">
          <small class="text-blue-500 uppercase">lorem ipsum</small>
          <h3 class="text-3xl font-bold">lorem ipsum deler</h3>
          <p class="text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio,
            tempore.
          </p>
          <button class="bg-blue-400 px-4 py-1 text-white rounded-sm mt-3">
            Klik
          </button>
        </div>
      </div>
      <div class="col-start-6 col-span-6">
        <div class="grid grid-rows-2">
          <div class="g-green-100">
            <hexagon class="hexagon-1 float-left ml-8"> la </hexagon>
            <hexagon class="hexagon-2 float-left" />
          </div>
          <hexagon class="hexagon-3 mt-4">
            <a href="/about"> hai om </a>
          </hexagon>
        </div>
      </div>
    </div>
    <div />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Hexagon from '@/components/Hexagon.vue';

export default defineComponent({
  name: 'HexagonSection',
  setup(): Record<string, unknown> {
    return {};
  },
  components: {
    Hexagon,
  },
});
</script>

<style lang="scss" scoped>
.section-2 {
  height: 45rem;
}

.section-2 .pil {
  transform: rotate(-25deg);
}

.section-2 .pil-container {
  transform: translateX(16rem);
}

.hexagon-2 {
  transform: translateX(15%) translateY(15%);
}

.hexagon-3 {
  transform: translateX(15%) translateY(-15%);
}
</style>
