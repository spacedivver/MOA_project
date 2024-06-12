<template>
    <div id="kt_body" class="auth-bg">
      <!-- Theme mode setup on page load -->
      <div class="d-flex flex-column flex-root">
        <!-- Authentication - Sign-up -->
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
                <p class="d-none d-lg-block fw-semibold fs-2 text-white">
                  가계부 작성을 통해 효율적으로 자산을 관리해보세요!
                  <br />
                </p>
                <img alt="Logo" src="@/assets/media/illustrations/sigma-1/17.png" class="h-50px h-lg-350px" />
              </div>
            </div>
          </div>
          <!-- Body -->
          <div class="d-flex flex-column flex-lg-row-fluid py-10">
            <!-- Content -->
            <div class="d-flex flex-center flex-column flex-column-fluid">
              <!-- Wrapper -->
              <div class="w-lg-600px p-10 p-lg-15 mx-auto">
                <!-- Form -->
                <form class="form w-100" @submit.prevent="handleSubmit" id="kt_sign_up_form">
                  <!-- Heading -->
                  <div class="mb-10 text-center">
                    <!-- Title -->
                    <h1 class="text-gray-900 mb-3">회원 가입</h1>
                    <!-- Link -->
                  </div>
                  <!-- Action -->
                  <!-- Input group -->
                  <div class="fv-row mb-7">
                    <label class="form-label fw-bold text-gray-900 fs-6">이름</label>
                    <input
                      v-model="form.name"
                      class="form-control form-control-lg form-control-solid"
                      type="text"
                      name="name"
                      autocomplete="off"
                    />
                  </div>
                  <div class="row fv-row mb-7">
                    <div class="col-xl-12">
                      <label class="form-label fw-bold text-gray-900 fs-6">아이디</label>
                      <input
                        v-model="form.userId"
                        class="form-control form-control-lg form-control-solid"
                        type="text"
                        name="userId"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div class="fv-row mb-7">
                    <label class="form-label fw-bold text-gray-900 fs-6">이메일</label>
                    <input
                      v-model="form.email"
                      class="form-control form-control-lg form-control-solid"
                      type="email"
                      name="email"
                      autocomplete="off"
                    />
                  </div>
                  <div class="mb-10 fv-row" data-kt-password-meter="true">
                    <div class="mb-1">
                      <label class="form-label fw-bold text-gray-900 fs-6">비밀번호</label>
                      <div class="position-relative mb-3">
                        <input
                          v-model="form.password"
                          class="form-control form-control-lg form-control-solid"
                          type="password"
                          name="password"
                          autocomplete="off"
                        />
                        <span
                          class="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2"
                          @click="togglePasswordVisibility"
                        >
                          <i :class="passwordVisible ? 'ki-duotone ki-eye fs-2' : 'ki-duotone ki-eye-slash fs-2'"></i>
                        </span>
                      </div>
                      <div class="d-flex align-items-center mb-3" data-kt-password-meter-control="highlight">
                        <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                        <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                        <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                        <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px"></div>
                      </div>
                    </div>
                    <div class="text-muted">Use 8 or more characters with a mix of letters, numbers & symbols.</div>
                  </div>
                  <div class="fv-row mb-5">
                    <label class="form-label fw-bold text-gray-900 fs-6">비밀번호 재입력</label>
                    <input
                      v-model="form.confirmPassword"
                      class="form-control form-control-lg form-control-solid"
                      type="password"
                      name="confirm-password"
                      autocomplete="off"
                    />
                  </div>
                  <div class="text-center">
                    <div v-if="passwordMismatch" class="text-danger mb-3">비밀번호가 일치하지 않습니다.</div>
                    <button type="submit" id="kt_sign_up_submit" class="btn btn-lg btn-primary">
                        <span class="indicator-label">회원가입</span>
                        <span class="indicator-progress">Please wait...
                        <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
                        </span>
                    </button>
                    </div>
                </form>
                <br><br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          userId: '',
          email: '',
          password: '',
          confirmPassword: '',
          toc: false,
        },
        passwordVisible: false,
        passwordMismatch: false,
      };
    },
    methods: {
        handleSubmit() {
            if (this.form.password !== this.form.confirmPassword) {
            this.passwordMismatch = true;
            } else {
            this.passwordMismatch = false;
            // Handle form submission
            console.log(this.form);
            }
        },
        togglePasswordVisibility() {
            this.passwordVisible = !this.passwordVisible;
  },
}

  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  </style>
  