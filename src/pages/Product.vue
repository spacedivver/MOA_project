<template>
  <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
    <div class="content fs-6 d-flex flex-column flex-column-fluid" id="kt_content">
      <!-- 사용자가 가장 많이 사용한 카테고리를 표시하는 부분 -->
      <div class="card m-3 p-5" style="background-color: white;">
        <h1>{{ user.name }}님은 
          <span :style="{ color: 'blue' }">{{ userCategory }}</span>에 많이 쓰는 중!</h1>
      </div>

      <!-- 추천 카드를 표시하는 부분 -->
      <div class="card-container">
        <h1>{{ user.name }}님께 딱 맞는 카드는?</h1>
        <div class="card-grid">
          <!-- 카테고리에 해당하는 카드를 표시하는 부분 -->
          <div class="card" v-for="card in recommendedCards.slice(0, 4)" :key="card.id">
            <!-- 카드 정보를 표시하는 코드 -->
            <h2>{{ card.bankName }} {{ card.cardName }}</h2>
            <p>{{ card.memo }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const user = ref({});
const userCategory = ref('');
const recommendedCards = ref([]);
const sortedCategories = ref([]);

const fetchUserData = async () => {
  try {
    const response = await axios.get('/db.json');
    const userId = 'aaa'; 
    
    const users = response.data.users;
    const personalHistory = response.data.personalHistory;
    const cardRecommendations = response.data.cardRecommendations;

    // 사용자 정보 설정
    user.value = users.find(u => u.userId === userId);

    // 사용자의 개인 이력에서 카테고리별 사용 횟수 계산
    const categoryCount = personalHistory
      .filter(item => item.userId === userId)
      .reduce((acc, item) => {
        acc[item.category] = (acc[item.category] || 0) + 1;
        return acc;
      }, {});

    // 카테고리별 사용 횟수를 객체 배열로 변환
    const categoryArray = Object.keys(categoryCount).map(category => ({
      category,
      count: categoryCount[category]
    }));

    // count를 기준으로 내림차순 정렬
    sortedCategories.value = categoryArray.sort((a, b) => b.count - a.count);

    // 사용자가 가장 많이 사용한 카테고리 설정
    userCategory.value = sortedCategories.value[0].category;

    console.log(sortedCategories.value); // 정렬된 카테고리 확인

    // 카테고리 순서대로 추천 카드를 설정
    sortedCategories.value.forEach(item => {
      const categoryCards = cardRecommendations.filter(card => card.category === item.category);
      recommendedCards.value.push(...categoryCards);
    });

    console.log(recommendedCards.value); // 추천 카드 확인

  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};

onMounted(fetchUserData);

</script>



<style scoped>
.card-container {
  padding: 20px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.card {
  background-color: rgb(228, 237, 250);
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>