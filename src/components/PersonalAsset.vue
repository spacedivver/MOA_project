<template>
    <div class="card-header cursor-pointer" v-if="user">
        <!--begin::Card title-->
        <div class="card-title m-0">
            <h3 class="fw-bold m-0">{{ user.name }}님의 보유 자산은 {{ user.asset }}원 입니다.</h3>
        </div>
        <!--end::Card title-->
        <!--begin::Action-->
        <a href="account/settings.html" class="btn btn-sm btn-primary align-self-center">자산 정보 수정</a>
        <!--end::Action-->
    </div>
    <div class="card-body p-9">
        <div class="row mb-7">
            <label class="col-lg-4 fw-semibold text-muted">{{ currentMonth }}월의 소비 금액은 ㅇㅇㅇ 입니다.</label>
            <div class="col-lg-8">
                <!-- <span class="fw-bold fs-6 text-gray-800">{{ item. }}</span> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const user = ref(null)
const currentMonth = ref('')

const getList = async () => {
    try {
        const response = await axios.get('http://localhost:3000/users')
        const users = response.data
        user.value = users.find(u => u.id === 1)
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}

const getCurrentMonth = () => {
    const date = new Date()
    currentMonth.value = date.getMonth() + 1
}

onMounted(() => {
    getList()
    getCurrentMonth()
})
</script>
