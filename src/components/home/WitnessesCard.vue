<template>
  <div class="px-4">
    <div class="cursor-pointer">
      <blockquote class="bg-white rounded-md px-12 py-10">
        <!-- <a target="_blank" href="https://icons8.com/icon/Va3DgarfkYiJ/get-quote">Get Quote</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> -->
        <div>
          <img
            :src="require('/src/assets/images/icons8-get-quote-48.png')"
            alt=""
            class="transform -rotate-225"
          />
        </div>
        <p class="mt-2">
          {{ witnessData.body }}
        </p>
        <div class="w-full second-doublequote">
          <img
            :src="require('/src/assets/images/icons8-get-quote-48.png')"
            alt=""
            class="float-right transform rotate-45"
          />
        </div>
      </blockquote>
      <div class="angle-talk-container">
        <div class="angle-talk w-7 h-7 bg-white"></div>
      </div>
      <div class="mt-4 px-12">
        <img
          :src="witnessData.img"
          alt=""
          class="w-16 rounded-full float-left"
        />
        <div class="ml-3 mt-1 float-left">
          <p class="uppercase text-green-400">{{ witnessData.name }}</p>
          <small>{{ witnessData.description }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'WitnessCard',
  setup(): Record<string, unknown> {
    return {};
  },
  props: { witnessData: Object },
});
</script>

<style lang="scss" scoped>
.angle-talk {
  transform: rotate(45deg) translateY(-1.2rem);
}

.angle-talk-container {
  transform: translateX(3rem);
}

.second-doublequote {
  height: 48px;
}

.\-rotate-225 {
  --tw-rotate: 225deg;
}
</style>