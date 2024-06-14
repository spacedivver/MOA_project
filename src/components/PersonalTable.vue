<template>
  <tbody class="fw-bold text-gray-600">
    <tr v-for="item in data" :key="item.id">
      <td>{{ item.date }}</td>
      <td class="text-end">{{ addComma(item.amount) }}</td>
      <td class="text-end">
        <span v-if="item.type === '수입'" class="badge py-3 px-4 fs-7 badge-light-primary">수입</span>
        <span v-else-if="item.type === '지출'" class="badge py-3 px-4 fs-7 badge-light-danger">지출</span>
        <span v-else>{{ item.type }}</span>
      </td>
      <td class="text-end">{{ item.category }}</td>
      <td class="text-end">{{ item.memo }}</td>
    </tr>
  </tbody>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  data: Array
});

// 쉼표 추가 함수 정의
const addComma = (number) => {
  return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};
</script>
