<template>
  <section class="bg-yellow-100 pt-11">
    <header class="">
      <h2 class="text-4xl text-center font-normal">Views of our Guardian</h2>
      <div class="grid grid-cols-5 mt-8">
        <div class="col-start-3 border-blue-300 border-b"></div>
      </div>
      <div>
        <p class="text-center py-4">
          Laboriosam cumque sequi itaque excepturi totam accusantium quam saepe!
        </p>
      </div>
      <div class="grid grid-cols-5">
        <div class="col-start-3 border-blue-300 border-t"></div>
      </div>
    </header>
    <main class="mt-6 h-96">
      <Slick :options="slickOptions" class="w-10/12 mx-auto">
        <Testimoni
          :data="testimoniData"
          v-for="[key, testimoniData] of testimoniDatas.entries()"
          :key="key"
          class="px-2"
        />
      </Slick>
    </main>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Slick from 'vue-slick/src/slickCarousel.vue';
import Testimoni from '@/components/home/Testimoni.vue';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default defineComponent({
  name: 'Section4',
  setup(): Record<string, unknown> {
    return {
      slickOptions: {
        adaptiveHeight: true,
        // autoplay: true,
        // centerPadding: '40px',
        accesibility: true,
        arrows: true,
        dots: true,
        pauseOnDotsHover: true,
        respondTo: 'min',
        prevArrow: '.prev-arrow',
        nextArrow: '.next-arrow',
        slidesToShow: 2,
        touchThreshold: 10,
        // variableWidth: true
        // slidesToScroll: 3
      },
      testimoniDatas: [
        {
          name: 'Lorem Ipsum',
          body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eum dolorum
                  assumenda, sint ut, fuga libero praesentium eaque architecto earum
                  corporis excepturi eos. Accusamus esse molestiae dolores, neque
                  perferendis in?`,
          description: 'Great Teacher of Touka University',
          img: require('/src/assets/images/avatar.jpg'),
        },
        {
          name: 'Lorem Ipsum',
          body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eum dolorum
                  assumenda, sint ut, fuga libero praesentium eaque architecto earum
                  corporis excepturi eos. Accusamus esse molestiae dolores, neque
                  perferendis in?`,
          description: 'Great Teacher of Touka University',
          img: require('/src/assets/images/avatar.jpg'),
        },
        {
          name: 'Lorem Ipsum',
          body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eum dolorum
                  assumenda, sint ut, fuga libero praesentium eaque architecto earum
                  corporis excepturi eos. Accusamus esse molestiae dolores, neque
                  perferendis in?`,
          description: 'Great Teacher of Touka University',
          img: require('/src/assets/images/avatar.jpg'),
        },
        {
          name: 'Lorem Ipsum',
          body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eum dolorum
                  assumenda, sint ut, fuga libero praesentium eaque architecto earum
                  corporis excepturi eos. Accusamus esse molestiae dolores, neque
                  perferendis in?`,
          description: 'Great Teacher of Touka University',
          img: require('/src/assets/images/avatar.jpg'),
        },
      ],
    };
  },
  components: { Testimoni, Slick },
});
</script>
