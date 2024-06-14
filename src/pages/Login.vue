<template>
  <div id="kt_body" class="auth-bg">
    <!-- Theme mode setup on page load -->
    <div class="d-flex flex-column flex-root">
      <!-- Authentication - Sign-in -->
      <div class="d-flex flex-column flex-lg-row flex-column-fluid">
        <!-- Aside -->
        <div class="d-flex flex-column flex-lg-row-auto bg-primary w-xl-600px positon-xl-relative">
          <!-- Wrapper -->
          <div class="d-flex flex-column position-xl-fixed top-0 bottom-0 w-xl-600px scroll-y">
            <!-- Header -->
            <div class="d-flex flex-row-fluid flex-column text-center p-5 p-lg-10 pt-lg-20">
              <!-- Logo -->
              <router-link to="/" class="py-2 py-lg-20">
                <img alt="Logo" src="@/assets/media/logos/logo-ellipse.svg" class="h-60px h-lg-70px" />
              </router-link>
              <!-- Title -->
              <h1 class="d-none d-lg-block fw-bold text-white fs-2qx pb-5 pb-md-10">TIKKEUL에 오신 것을 환영합니다.</h1>
              <!-- Description -->
              <p class="d-none d-lg-block fw-semibold fs-2 text-white">가계부 작성을 통해 효율적으로 자산을 관리해보세요!
                <br /></p>
                <img alt="Logo" src="@/assets/media/illustrations/sigma-1/17.png" class="h-50px h-lg-350px" />
            </div>
          </div>
        </div>
        <!-- Body -->
        <div class="d-flex flex-column flex-lg-row-fluid py-10">
          <!-- Content -->
          <div class="d-flex flex-center flex-column flex-column-fluid">
            <!-- Wrapper -->
            <div class="w-lg-500px p-10 p-lg-15 mx-auto">
              <!-- Form -->
              <form class="form w-100" novalidate="novalidate" @submit.prevent="login" id="kt_sign_in_form">
                <!-- Heading -->
                <div class="text-center mb-10">
                  <!-- Title -->
                  <h1 class="text-gray-900 mb-3">TIKKEUL</h1>
                  <!-- Link -->
                  <div class="text-gray-500 fw-semibold fs-4">아이디가 없으신가요?
                    <router-link to="/signup" class="link-primary fw-bold">회원가입</router-link>
                  </div>
                </div>
                <!-- Input group -->
                <div class="fv-row mb-10">
                  <!-- Label -->
                  <label class="form-label fs-6 fw-bold text-gray-900">아이디</label>
                  <!-- Input -->
                  <input v-model="userId" class="form-control form-control-lg form-control-solid" type="text" name="userId" autocomplete="off" />
                </div>
                <!-- Input group -->
                <div class="fv-row mb-10">
                  <!-- Wrapper -->
                  <div class="d-flex flex-stack mb-2">
                    <!-- Label -->
                    <label class="form-label fw-bold text-gray-900 fs-6 mb-0">비밀번호</label>
                    <!-- Link -->
                    <router-link to="/password-reset" class="link-primary fs-6 fw-bold">비밀번호를 잊어버리셨나요?</router-link>
                  </div>
                  <!-- Input -->
                  <input v-model="password" class="form-control form-control-lg form-control-solid" type="password" name="password" autocomplete="off" />
                </div>
                <!-- Actions -->
                <div class="text-center">
                  <!-- Submit button -->
                  <button type="submit" @click="redirectToHome" id="kt_sign_in_submit" class="btn btn-lg btn-primary w-100 mb-5">
                    <span class="indicator-label">로그인</span>
                    <span class="indicator-progress">Please wait...
                      <span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                  </button>
                  <!-- Separator -->
                  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                </div>
              </form>
              <!-- Form end -->
            </div>
            <!-- Wrapper end -->
          </div>
          <!-- Content end -->
          <!-- Footer -->
          <div class="d-flex flex-center flex-wrap fs-6 p-5 pb-0">
            <!-- Links -->
            <div class="d-flex flex-center fw-semibold fs-6">
              <a href="https://keenthemes.com" class="text-muted text-hover-primary px-2" target="_blank">About</a>
              <a href="https://devs.keenthemes.com" class="text-muted text-hover-primary px-2" target="_blank">Support</a>
              <a href="https://themes.getbootstrap.com/product/craft-bootstrap-5-admin-dashboard-theme" class="text-muted text-hover-primary px-2" target="_blank">Purchase</a>
            </div>
          </div>
          <!-- Footer end -->
        </div>
        <!-- Body end -->
      </div>
      <!-- Authentication - Sign-in end -->
    </div>
    <!-- Main end -->
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const userId = ref('');
const password = ref('');
const router = useRouter();
const redirectToHome = () => {
  router.push('/main');
};
const login = async () => {
  try {
    const response = await axios.post('http://localhost:3000/users', {
      userId: userId.value,
      password: password.value
    });

    const { data } = response;
    localStorage.setItem('user', JSON.stringify(data)); // 로컬 스토리지에 사용자 정보 저장
    router.push('/'); // 로그인 성공 후 홈 페이지로 이동
  } catch (error) {
    console.error('로그인 오류:', error);
    alert('아이디 또는 비밀번호가 잘못되었습니다.');
  }
};
</script>

<style scoped>
</style>
