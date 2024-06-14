<template>
  <div id="kt_body"
    class="header-fixed header-tablet-and-mobile-fixed toolbar-enabled aside-fixed aside-default-enabled">
    <div class="d-flex flex-column flex-root">
      <Header v-if="!isPage" />
    <router-view />
      <Footer v-if="!isPage" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

const route = useRoute()
const isPage = ref(false)

watch(
  () => route.path,
  (newPath) => {
    isPage.value = newPath === '/signup' || newPath === '/';
  },
  { immediate: true }
);

</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
</style>