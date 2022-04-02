<template>
  <div class="px-4">
    <div class="cursor-pointer">
      <blockquote class="bg-white rounded-md px-12 py-10">
        {{ data.body }}
      </blockquote>
      <div class="angle-talk-container">
        <div class="angle-talk w-7 h-7 bg-white"></div>
      </div>
      <div class="mt-4 px-12">
        <img :src="data.img" alt="" class="w-16 rounded-full float-left" />
        <div class="ml-3 float-left">
          <p class="uppercase text-green-400">{{ data.name }}</p>
          <small>{{ data.description }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'TestimoniComponent',
  setup(): Record<string, unknown> {
    return {};
  },
  props: { data: Object },
});
</script>

<style lang="scss" scoped>
.angle-talk {
  transform: rotate(45deg) translateY(-1.2rem);
}

.angle-talk-container {
  transform: translateX(3rem);
}
</style>