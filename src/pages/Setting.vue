<template>
    <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
        <div class="content fs-6 d-flex flex-column flex-column-fluid p-5" id="kt_content">

            <div class="card d-flex flex-row align-items-center" style="padding: 20px;">
                <div class="img-container" style="margin-left: 20px;">
                    <img src="https://cdn-icons-png.freepik.com/512/4945/4945750.png" style="width: 80px;">
                </div>
                <div class="user-info" style="margin-left: 45px;">
                    <h1>{{ user.name }}</h1>
                    <div style="color: gray;">아이디 : {{ user.userId }}</div>
                </div>
                
                <button @click="goToLogin" class="btn btn-danger" style="margin-left: 700px;">로그 아웃</button>
            </div>
            <br>

            <div class="m-3">
                <h4 class="mb-3">이름</h4>
                <input v-model="user.name" class="form-control" />
            </div>
            
            <div class="m-3">
                <h4 class="mb-3">이메일</h4>
                <input v-model="user.email" class="form-control" />
            </div>
      
            <div class="m-3">
                <h4 class="mb-3">보유 자산</h4>
                <input v-model="user.asset" type="number" class="form-control" />
            </div>
      
            <button @click="updateUserData" class="btn btn-primary m-3">Update</button>
      
            <br>

            <div>
                <h4>Mode</h4>
                <hr style="border-style: solid; border-color: rgb(36, 119, 245); border-width: 1px; margin-bottom: 20px">
            </div>
            
            <div class="col-12 form-check form-switch">
                <input v-model="alert" class="form-check-input" type="checkbox" id="alert" name="alert" value="yes">
                <label class="form-check-label" for="alert">Alert</label>
            </div>
            <br>

            <div class="col-12 form-check form-switch">
                <input v-model="dark" class="form-check-input" type="checkbox" id="dark" name="dark" value="no">
                <label class="form-check-label" for="dark">Dark Mode</label>
            </div>
            <br>

            <div class="col-12 form-check form-switch">
                <input v-model="simple" class="form-check-input" type="checkbox" id="simple" name="simple" value="no">
                <label class="form-check-label" for="simple">Simple</label>
            </div>
           
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

// user 변수를 객체로 초기화
const user = ref({});
const alert = ref(true);
const dark = ref(false);
const simple = ref(false);
const router = useRouter();

const goToLogin = () => {
  router.push({ name: 'Login' });
};

const fetchUserData = async () => {
  try {
    const response = await axios.get('http://localhost:3000/users');
    const userId = 'aaa';
    
    // 서버 응답 구조에 따라 'value' 부분을 조정하세요.
    const users = response.data; // 또는 response.data.value

    user.value = users.find(u => u.userId === userId);
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};

const updateUserData = async () => {
  try {
    const userId = user.value.id;
    await axios.put(`http://localhost:3000/users/${userId}`, user.value);
    window.alert('성공적으로 수정했습니다.');
  } catch (error) {
    console.error('Error updating user data:', error);
    window.alert('Failed to update user data');
  }
};

onMounted(fetchUserData);
</script>

<style>
</style>
