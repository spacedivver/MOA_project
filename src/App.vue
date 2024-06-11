<template>
  <div id="kt_body"
    class="header-fixed header-tablet-and-mobile-fixed toolbar-enabled aside-fixed aside-default-enabled">
    <div class="d-flex flex-column flex-root">
      <Header />
      <!-- 가운데 컨테이너 -->
      <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
        <div class="content fs-6 d-flex flex-column flex-column-fluid" id="kt_content">
          <router-view></router-view>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
</style>