<template>
  <section class="section-3 mt-32">
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
        <client-only>
          <div class="glide">
            <div class="glide__track" data-glide-el="track">
              <ul class="glide__slides">
                <div
                  :class="`glide__slide ${
                    (clickToggle && 'clicked') || ''
                  } ${bgCode}`"
                  v-for="bgCode in 2"
                  :key="bgCode"
                  @mousedown="mouseDownHandler($event)"
                  @mouseup="mouseUpHandler($event, bgCode)"
                  ref="slide"
                >
                  <!-- see home slide backgrounds in tailwind config file -->
                  <div
                    :class="`bg-homeSlide${bgCode} bg-cover bg-center cursor-pointer img`"
                  ></div>
                </div>
              </ul>
            </div>
            <div
              class="glide__arrows grid grid-cols-2 text-xl"
              data-glide-el="controls"
            >
              <button
                class="glide__arrow glide__arrow--left"
                data-glide-dir="<"
              >
                &lt;
              </button>
              <button
                class="glide__arrow glide__arrow--right"
                data-glide-dir=">"
              >
                &gt;
              </button>
            </div>
          </div>
        </client-only>
      </div>
    </div>
    <div />
    <!-- <header> -->
    <div class="" />
  </section>
</template>

<script lang="ts">
import Glide from '@glidejs/glide';
import { defineComponent } from 'vue';

export default defineComponent({
  setup(): Record<string, unknown> {
    return {
      sliderData: {
        lastClientX: null,
        lastClientY: null
      }
    };
  },
  computed: {
    SCToggleData(): Record<string, unknown> {
      return this.slideClickToggleData as Record<string, unknown>;
    }
  },
  methods: {
    mouseDownHandler({
      clientX,
      clientY,
      which
    }: Record<string, unknown>): void {
      if (which === 1) {
        this.sliderData = {
          lastClientX: clientX,
          lastClientY: clientY
        };
      }
    },
    mouseUpHandler(
      { clientX, clientY }: Record<string, unknown>,
      refKey: number
    ): void {
      if (
        clientX === (this.sliderData as Record<string, unknown>).lastClientX &&
        clientY === (this.sliderData as Record<string, unknown>).lastClientY
      ) {
        (this.$refs.slide as Element[]).forEach((element) => {
          if (element.classList.contains(refKey as unknown as string)) {
            element.classList.add('active');
          }
        });
      }
    }
  },
  mounted() {
    new Glide('.glide').mount();
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
  height: 2000px;
}

.glide__slide {
  height: 500px;
}

.glide__slide.active {
  position: fixed;
  height: 100%;
  width: 100%;
  background: black;
  // opacity: 0.4;
}

.glide__slide .img {
  height: 100%;
}

.glide__slide.active .img {
  height: 300px;
}
</style>
