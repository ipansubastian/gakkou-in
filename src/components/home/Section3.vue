<template>
  <section class="section-3 mt-32 bg-red-400">
    <div class="background-layer pil-row">
      <div class="grid grid-cols-5">
        <div class="mt-24 transform h-full pil-container grid col-span-3">
          <div class="bg-gray-100 w-full rounded-full pil" />
        </div>
      </div>
    </div>
    <div class="relative foreground-layer">
      <div class="mt-8">
        <h3 class="text-gray-700 text-2xl font-semibold text-center mx-96">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          adipisicing elit consectetur.
        </h3>

        <div>
          <div
            class="h-40 mt-14 grid grid-cols-2 text-3xl text-gray-200 hover:text-white transition-all"
          >
            <div class="relative">
              <FontAwesomeIcon
                icon="arrow-left"
                class="prev-arrow cursor-pointer absolute top-80 left-48 z-10"
              />
            </div>
            <div class="relative">
              <FontAwesomeIcon
                icon="arrow-right"
                class="next-arrow cursor-pointer absolute top-80 right-48 z-10"
              />
            </div>
          </div>
          <slick
            ref="slick z-50"
            :options="slickOptions"
            class="w-9/12 mx-auto absolute -top-40 mt-14"
          >
            <a
              :class="key"
              v-for="[key, banner] of banners.entries()"
              :key="key"
            >
              <!-- see home slide backgrounds in tailwind config file -->
              <img
                class="bg-cover bg-no-repeat bg-center cursor-pointer img z-50"
                :src="banner.src"
              />
            </a>
          </slick>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, defineComponent } from 'vue';
import Slick from 'vue-slick/src/slickCarousel.vue';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default defineComponent({
  name: 'Section3',
  setup(): Record<string, unknown> {
    return {
      banners: [
        { src: require('/src/assets/images/pexels-ivan-samkov-5676744.jpg') },
        { src: require('/src/assets/images/pexels-周-康-710743.jpg') },
        { src: require('/src/assets/images/pexels-ivan-samkov-5676744.jpg') },
        { src: require('/src/assets/images/pexels-周-康-710743.jpg') },
        { src: require('/src/assets/images/pexels-ivan-samkov-5676744.jpg') },
        { src: require('/src/assets/images/pexels-周-康-710743.jpg') }
      ],
      slickOptions: {
        adaptiveHeight: true,
        autoplay: true,
        centerMode: true,
        centerPadding: '40px',
        accesibility: true,
        infinite: true,
        arrows: true,
        dots: true,
        pauseOnDotsHover: true,
        respondTo: 'min',
        prevArrow: '.prev-arrow',
        nextArrow: '.next-arrow'
        // variableWidth: true
        // slidesToScroll: 3
      }
    };
  },
  components: {
    Slick
  },
  methods: {
    print(...args: unknown[]): void {
      console.log(...args);
    },
    next() {
      ((this as Record<string, unknown>).$refs as any).slick.next();
    },
    prev() {
      (this.$refs as any).slick.prev();
    },
    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        (this.$refs as any).slick.reSlick();
      });
    },

    // Events listeners
    handleAfterChange(event: Event, slick: Component, currentSlide: unknown) {
      console.log('handleAfterChange', event, slick, currentSlide);
    },
    handleBeforeChange(
      event: Event,
      slick: Component,
      currentSlide: unknown,
      nextSlide: unknown
    ) {
      console.log('handleBeforeChange', event, slick, currentSlide, nextSlide);
    },
    handleBreakpoint(event: Event, slick: Component, breakpoint: unknown) {
      console.log('handleBreakpoint', event, slick, breakpoint);
    },
    handleDestroy(event: Event, slick: Component) {
      console.log('handleDestroy', event, slick);
    },
    handleEdge(event: Event, slick: Component, direction: unknown) {
      console.log('handleEdge', event, slick, direction);
    },
    handleInit(event: Event, slick: Component) {
      console.log('handleInit', event, slick);
    },
    handleReInit(event: Event, slick: Component) {
      console.log('handleReInit', event, slick);
    },
    handleSetPosition(event: Event, slick: Component) {
      console.log('handleSetPosition', event, slick);
    },
    handleSwipe(event: Event, slick: Component, direction: unknown) {
      console.log('handleSwipe', event, slick, direction);
    },
    handleLazyLoaded(
      event: Event,
      slick: Component,
      image: unknown,
      imageSource: unknown
    ) {
      console.log('handleLazyLoaded', event, slick, image, imageSource);
    },
    handleLazeLoadError(
      event: Event,
      slick: Component,
      image: unknown,
      imageSource: unknown
    ) {
      console.log('handleLazeLoadError', event, slick, image, imageSource);
    }
  }
});
</script>

<style lang="scss" scoped>
.section-3 .pil {
  transform: rotate(-25deg);
}
.section-3 .foreground-layer {
  top: -742px;
}

.section-3 .pil-container {
  transform: translateX(-16rem);
}

.section-3 {
  // height: px;
}
</style>
