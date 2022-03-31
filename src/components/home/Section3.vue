/* eslint-disable @typescript-eslint/no-explicit-any */ /* eslint-disable
@typescript-eslint/no-explicit-any */ /* eslint-disable
@typescript-eslint/no-explicit-any */
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
        <div
          class="glide"
          ref="glide"
          @mousedown="mouseDownHandler($event)"
          @mouseup="mouseUpHandler($event, bgCode)"
        >
          <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
              <div
                :class="`glide__slide ${
                  (clickToggle && 'clicked') || ''
                } ${bgCode}`"
                v-for="bgCode in 2"
                :key="bgCode"
              >
                <!-- see home slide backgrounds in tailwind config file -->
                <div
                  :class="`bg-homeSlide${bgCode} bg-cover bg-no-repeat bg-center cursor-pointer img`"
                ></div>
              </div>
            </ul>
          </div>
          <div
            class="glide__arrows grid grid-cols-2 text-xl"
            data-glide-el="controls"
          >
            <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
              &lt;
            </button>
            <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
              &gt;
            </button>
          </div>
          <div
            class="close-button hidden cursor-pointer"
            @click="closeButtonHandler"
            ref="slideCloseBtn"
          >
            [X] Close
          </div>
        </div>

        <!-- <div class="fixed-glide hidden" ref="flixedGlide">
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
              >
                 see home slide backgrounds in tailwind config file
        
                <div
                  :class="`bg-homeSlide${bgCode} bg-cover bg-no-repeat bg-center cursor-pointer img`"
                ></div>
              </div>
            </ul>
          </div>
          <div
            class="glide__arrows grid grid-cols-2 text-xl"
            data-glide-el="controls"
          >
            <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
              &lt;
            </button>
            <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
              &gt;
            </button>
          </div>
          <div class="close-button hidden cursor-pointer">[X] Close</div>
        </div> -->
      </div>
    </div>
    <div />
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
        lastClientY: null,
        noScrollEvent: true,
        glide: null
      }
    };
  },
  methods: {
    scrollHandler(event: Event): void {
      event.preventDefault();
    },
    mouseDownHandler({
      clientX,
      clientY,
      which
    }: Record<string, unknown>): void {
      if (which === 1) {
        this.sliderData = {
          ...(this.sliderData as Record<string, unknown>),
          lastClientX: clientX,
          lastClientY: clientY
        };
      }
    },
    mouseUpHandler({
      clientX,
      clientY,
      target
    }: Record<string, unknown>): void {
      if (target !== this.$refs.slideCloseBtn) {
        if (
          clientX ===
            (this.sliderData as Record<string, unknown>).lastClientX &&
          clientY === (this.sliderData as Record<string, unknown>).lastClientY
        ) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          /*(this.sliderData as any).glide = */ (
            this.sliderData as Record<string, any>
          ).glide.destroy();
          (this.$refs.glide as HTMLElement).classList.add('active');
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          /*(this.sliderData as any) = */ (
            this.sliderData as any
          ).glide.mount();
          if ((this.sliderData as Record<string, unknown>).noScrollEvent) {
            (this.sliderData as Record<string, unknown>).noScrollEvent = false;
            (this.$refs.glide as HTMLElement)?.addEventListener(
              'mousewheel',
              this.scrollHandler
            );
          }
        }
      }
    },
    print(...args: unknown[]): void {
      console.log(...args);
    },
    closeButtonHandler(): void {
      (this.$refs.glide as HTMLElement).classList.remove('active');
      (this.sliderData as Record<string, unknown>).noScrollEvent = true;
      (this.$refs.glide as HTMLElement)?.removeEventListener(
        'mousewheel',
        this.scrollHandler
      );
      // eslint-disable-next-line @typescript-eslint/no-explicit-any

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (this.sliderData as any).glide.destroy();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (this.sliderData as any).glide.mount();
    }
  },
  mounted(): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (this.sliderData as Record<string, unknown>).glide = new Glide('.glide', {
      width: '50%',
      type: 'carousel',
      // autoplay: 3000,
      keyboard: true,
      hoverpause: true,
      dragThreshold: 10
    }).mount();

    this.print((this.sliderData as Record<string, unknown>).glide);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (this.sliderData as any).glide.mount();
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

.glide__slide .img {
  height: 100%;
}

.glide {
  width: 90%;
  // transition-duration: 0.8s;
  // transition-property: all;
  // transition-timing-function: ease;
}

.glide.active {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.glide.active > .close-button {
  color: white;
  display: block;
  position: absolute;
  z-index: 9999;
  top: 20px;
  right: 100px;
}

.glide.active .glide__slide {
  // transition-duration: 0.8s;
  // transition-property: width, height, background-color;
  // transition-timing-function: ease;
  // width: 100% !important;
}

.glide.active,
.glide.active .glide__slide,
.glide.active .glide__track,
.glide.active .glide__slides,
.glide.active .img {
  // width: 100% !important;
  height: 100%;
  margin: 0 auto;
}

.glide.active .img {
  background-size: contain;
  background-position: center center;
  margin: 0 auto;
}

.glide {
  // width: 90%;
  background: red;
  margin: 0 auto;
}
.glide.active {
  width: 100%;
}

// .glide-container {
//   width: 90% !important;
//   margin: 0 auto;
// }

// .glide-container.active {
//   width: 100% !important;
//   //   margin: auto auto;
// }
</style>
