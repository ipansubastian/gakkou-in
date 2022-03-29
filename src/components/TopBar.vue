<template>
    <div
    class="
    grid
    grid-cols-3
    h-16
    bg-sky-700
    opacity-80
    absolute z-50
    w-full
    border-blue-400
    top-bar"
>
    <div class="h-full grid items-center">
        <nuxt-link
            to="/"
            class="ml-16 text-white font-bold table-cell top-bar-label"
            title="Ke Beranda"
        >
            <img
                src="/education.svg"
                class="w-7 inline-block align-middle"
                alt=""
            >
            <span
                class="bg-green-10  inline-block align-middle text-xl"
            >
                SMA Negeri 1 Buitenzorg
            </span>
        </nuxt-link>
    </div>
    <div class="col-span-2 grid justify-items-end items-center">
        <div
        class="
            w-6/12
            pl-8
            mr-16
            font-nunito
            font-bold
        "
        >
            <nuxt-link
                to=""
                class="
                mx-1
                text-white
                hover:text-sky-200
                hover:-translate-y-1
                transition-all
                transform"
            >
                Beranda
            </nuxt-link>
            <nuxt-link to="" class="mx-1 text-white hover:text-sky-200">
                Pencapaian
            </nuxt-link>
            <nuxt-link to="" class="mx-1 text-white hover:text-sky-200">
                Daftar
            </nuxt-link>
            <nuxt-link to="" class="mx-1 text-white hover:text-sky-200">
                Blog
            </nuxt-link>
            <nuxt-link to="" class="mx-1 text-white hover:text-sky-200">
                Download
            </nuxt-link>
            <nuxt-link to="" class="mx-1 text-white hover:text-sky-200">
                Tentang
            </nuxt-link>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'TopBarComponent',
})
</script>

<style scoped>
.font-nunito {
    font-family: 'Nunito Sans', sand-serif;
}
.font-comforter {
    font-family: Comforter;
}

.top-bar {
    border-bottom-width: 1px;
}
</style>
