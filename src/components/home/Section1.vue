<template>
  <section class="section-1">
    <div class="register-section-bg-img relative rounded-bl-full" />
    <div
      class="register-section-bg bg-sky-700 opacity-80 relative rounded-bl-full"
    />
    <div class="register-section grid grid-cols-2 relative">
      <div class="grid">
        <div
          class="w-6/12 grid justify-items-center register-box self-center justify-self-end mr-28"
        >
          <p class="text-4xl text-white font-bold">
            Ingin bersekolah <br />
            di sekolah kami?
          </p>
          <small class="mt-2 text-white">
            Mendaftar jadi lebih mudah hanya dengan satu klik.
          </small>
          <div class="mt-4">
            <button
              class="bg-cyan-500 hover:bg-cyan-600 transition-colors duration-100 px-7 py-1 text-white rounded-sm"
            >
              <!-- <span class="align-middle "> -->
              DAFTAR
              <!-- </span> -->
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup(): Record<string, unknown> {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.register-section-bg,
.register-section {
  height: 35rem;
}

.register-section-bg {
  top: -35rem;
}

.register-section {
  top: -70rem;
}

.register-section-bg-img {
  background: url('~@/assets/images/pexels-周-康-710743.jpg');
  background-size: cover;
  height: 39rem;
  background-position-y: -150px;
}

.register-box {
  font-family: 'Glacial Indifference', sans-serif;
}

.register-box button {
  font-family: Teko, sans-serif;
}

.section-1 {
  height: 40rem;
}
</style>
