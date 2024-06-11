<template>
  <div id="kt_body"
	class="header-fixed header-tablet-and-mobile-fixed toolbar-enabled aside-fixed aside-default-enabled">
	<div class="d-flex flex-column flex-root">
    <Header />
    <Footer />
    
  </div>
  </div>


  <!-- <div>
    <Header />
    <router-view></router-view>
    <Footer />
  </div> -->
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
</style>