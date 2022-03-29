<template>
  <div class="hexagon-container">
    <img
      id="hhexagon"
      src="~@/assets/images/hexagon.svg"
      class="hhexagon sshadow-xl hexa"
    >
    <div class="hexa-after">
      <slot class="w-full h-full" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'HexagonComponent',
})
</script>

<style lang="scss" scoped>

$hexagon-width: 98px * 2.7;
$hexagon-height: 109px * 2.7;

.hexagon-container {
  position: relative;
  // border: 1px solid salmon;
  display: flex;
}

.hexa {
  // filter: drop-shadow(0, 0, #000);
  // width: $hexagon-width;
  width: $hexagon-width;
  height: $hexagon-height;
  // display: flexbox;
  // display: flexbox;
}

.hexa-after {
  width: $hexagon-width;
  // background: red;
  // z-index: 1000;
  height: $hexagon-height;
  position: absolute;
  // bottom: 98px;
  // top: -98px;
  // transform: translateY(-$hexagon-width);
  // transform: translateX(-$hexagon-width);
  align-items: center;
  text-align: center;
  justify-content: center;
  display: flex;
  // border: 1px solid salmon;
}

.hexagon {
  width: 100px;
  height: 110px;
  clip-path: path('m 97.189186,32.3668 v 44 a 12,12 0 0 1 -8,12 l -33.999997,18 a 12,12 0 0 1 -12,0 l -34.0000001,-18 a 12,12 0 0 1 -8,-12 v -44 a 12,12 0 0 1 8,-12 l 34.0000001,-18 a 12,12 0 0 1 12,0 l 33.999997,18 a 12,12 0 0 1 8,12');
  transform:  scale(2);
  // background:  greenyellow;
  position: relative;
  z-index: 999 !important;

  box-shadow: 5px 5px 10px black;
}

.hexagon::after {
  overflow: visible;

  // border: 1px solid royalblue;
  width: 100px;
  height: 100%;
  transform: scale(0.5);
  content: 'Ya benar';
  // text-align: center;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  // line-height: 100%;
  position: absolute;
  // clip-path: path('m 97.189186,32.3668 v 44 a 12,12 0 0 1 -8,12 l -33.999997,18 a 12,12 0 0 1 -12,0 l -34.0000001,-18 a 12,12 0 0 1 -8,-12 v -44 a 12,12 0 0 1 8,-12 l 34.0000001,-18 a 12,12 0 0 1 12,0 l 33.999997,18 a 12,12 0 0 1 8,12');
  // background: greenyellow;
  // clip-path: none;
  // padding: 0;
  overflow: visible;
  z-index: 1 !important;

}

.hexagon-container {
    filter: drop-shadow(-10px 15px 30px rgb(201, 190, 190, 0.4));

}

// .hexagon-container::after {
//   width: 100%;
//   height: 100%;
//   background: red;
//   content: 'ahhhh';
// }
  // $side-width: 140px;

  // .hexagon {
  //     position: relative;
  //     border-radius: calc($side-width / 100) * 9;
  //     width: $side-width;
  //     height: calc($side-width / 100) * 63;
  // z-index: 100;
  // }

  // .hexagon, .hexagon:before, .hexagon:after {
  //         box-shadow:
  //       -1px -1px 50px -1px rgb(253,253,253),
  //       1px 1px 50px -1px rgb(253, 253, 253),
  //       -1px 1px 50px -1px rgb(253,253,253),
  //       1px -1px 50px -1px rgb(253,253,253);
  //     border: none;
  // }


  // /* Creating pseudo-class */
  // .hexagon:before, .hexagon:after {
  //   content: "";


  //   z-index: 1;
  //   position: absolute;
  //   background-color: inherit;
  //   border-radius: inherit;
  //   height: 100%;
  //   width: 100%;
  // }


  // /* Align them in such a way
  // that they form a hexagon */
  // .hexagon:before {
  //   transform: rotate(60deg);
  // }
  // .hexagon:after {
  //   transform: rotate(-60deg);
  // }
</style>
