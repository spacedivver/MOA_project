<template>
    <tbody class="fw-bold text-gray-600">
        <tr v-for="item in data" :key="item.id">
            <td>{{ item.date }}</td>
            <td class="text-end">{{ item.amount }}</td>
            <td class="text-end">{{ item.type }}</td>
            <td class="text-end">{{ item.category }}</td>
            <td class="text-end">{{ item.memo }}</td>
        </tr>
    </tbody>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const data = ref([])

const getList = async () => {
    try {
        const response = await axios.get('http://localhost:3000/personalHistory')
        data.value = response.data
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}

onMounted(() => {
    getList()
})
</script>
