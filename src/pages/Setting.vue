<template>
    <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
        <div class="content fs-6 d-flex flex-column flex-column-fluid p-5" id="kt_content">

            <div class="card d-flex flex-row align-items-center" style="padding: 20px;">
                <div class="img-container" style="margin-left: 20px;">
                    <img src="https://cdn-icons-png.freepik.com/512/4945/4945750.png" style="width: 80px;">
                </div>
                <div class="user-info" style="margin-left: 45px;">
                    <h1>{{ user.name }}</h1>
                    <div style="color: gray;"> ID : {{ user.userId }}</div>

                </div>
                
                <button @click="goToLogin" class="btn btn-danger" style="margin-left: 700px;">Log Out</button>
            </div>
            <br>

            <div class="m-3">
                <h4 class="mb-3">E-mail</h4>
                <div class="card">{{user.email}}</div>
            </div>
      
            <br>

            <div>
                <h4>Mode</h4>
            <hr style="border-style: solid; border-color: rgb(36, 119, 245); border-width: 1px; margin-bottom:20px">
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

const user = ref({});
const alert=ref(true);
const dark=ref(false);
const simple=ref(false);
const router = useRouter();

const goToLogin = () => {
  router.push({ name: 'Login' });
};

const fetchUserData = async () => {
  try {
    const response = await axios.get('/db.json');
    const userId = 'aaa'; 
    
    const users = response.data.users;

    user.value = users.find(u => u.userId === userId);
} catch (error) {
    console.error('Error fetching user data:', error);
}
};

onMounted(fetchUserData);
</script>

<style>

</style>