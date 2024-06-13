<template>
  <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
    <div class="content fs-6 d-flex flex-column flex-column-fluid" id="kt_content">
      <div class="card m-3 p-5" style="background-color: white;">
        <h1>{{ user.name }}님은 
          <span :style="{ color: 'blue' }">{{ userCategory }}</span>에 많이 쓰는 중!</h1>
      </div>

      
      <div class="card-container">
        <h1>{{ user.name }}님께 딱 맞는 카드는?</h1>
        <div class="card-grid de-felex">
          <div class="card" v-for="card in recommendedCards.slice(0, 4)" :key="card.id">
            <img :src="getImageUrl(card.category)" alt="카드 이미지" /><br>
            <div class="discount-info">
              <h2>{{ card.bankName }} {{ card.cardName }}</h2>
              <p v-html="formatMemo(card.memo)"></p>
            </div>
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

const formatMemo = (memo) => {
  return memo.replace(/\n/g, '<br>');
};

const getImageUrl = (category) => {
  return `./src/assets/images/${category}.png`;
};

const fetchUserData = async () => {
  try {
    const response = await axios.get('/db.json');
    const userId = 'aaa'; 
    
    const users = response.data.users;
    const personalHistory = response.data.personalHistory;
    const cardRecommendations = response.data.cardRecommendations;

    user.value = users.find(u => u.userId === userId);

    const categoryCount = personalHistory
      .filter(item => item.userId === userId)
      .reduce((acc, item) => {
        acc[item.category] = (acc[item.category] || 0) + 1;
        return acc;
      }, {});

    const categoryArray = Object.keys(categoryCount).map(category => ({
      category,
      count: categoryCount[category]
    }));

    sortedCategories.value = categoryArray.sort((a, b) => b.count - a.count);

    userCategory.value = sortedCategories.value[0].category;

    console.log(sortedCategories.value);

    sortedCategories.value.forEach(item => {
      const categoryCards = cardRecommendations.filter(card => card.category === item.category);
      recommendedCards.value.push(...categoryCards);
    });

    console.log(recommendedCards.value); 

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

.rotated-image {
  transform: rotate(90deg);
  
  max-height: 70px;
}

</style>