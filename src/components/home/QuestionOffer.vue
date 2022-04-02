<template>
  <section class="bg-askSectionBg bg-fixed h-96">
    <div class="pt-12 bg-black bg-opacity-30 h-full w-full text-center">
      <header class="text-white">
        <div>
          <h2
            class="
              px-3
              py-3
              rounded-full
              bg-black
              inline-block
              text-3xl
              font-bold
              border-l-8 border-r-8 border-green-500
            "
          >
            World's best School
          </h2>
        </div>
        <div class="mt-5">
          <h1 class="p-4 rounded-full bg-black inline-block text-4xl">
            Kami menunggu pertanyaan Anda!
          </h1>
        </div>
      </header>
      <article class="text-white mt-7 font-semibold">
        <p>
          Ada pertanyaan yang ingin Anda tanyakan? Kami siap menjawab pertanyaan
          Anda.
        </p>
        <p class="mt-2">Ayo klik tombol bertanya!</p>
      </article>
      <footer class="mt-7">
        <button class="bg-green-500 px-3 py-2 rounded-md text-gray-50">
          Bertanya
        </button>
      </footer>
    </div>
  </section>
</template>

 <script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
</script>