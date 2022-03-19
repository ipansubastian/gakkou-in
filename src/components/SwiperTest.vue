<template>
  <SwiperContainer
    :slides-per-view="3"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :modules="modules"
    :navigation="true"
    :pagination="true"
  >
    <swiper-slide v-for="n of 10" :key="n">
      <div class="w-full h-60 text-green-400">
      Slide ke {{ n }}
      </div>
    </swiper-slide>
  </SwiperContainer>
</template>

<script lang="ts">
// Import Swiper Vue.js components
import { Swiper as SwiperContainer, SwiperSlide } from 'swiper/vue/swiper-vue';

import { Pagination, Navigation } from 'swiper';

// Import SwiperContainer styles
import 'swiper/swiper-bundle.css';
import { Swiper } from 'swiper/types';

export default {
  data(): Record<string, unknown> {
    return {
      modules: [Navigation, Pagination],
    };
  },
  components: {
    SwiperContainer,
    SwiperSlide,
  },
  setup(): Record<string, unknown> {
    const onSwiper = (swiper: Swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>
