<template>
    <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
        <div class="content fs-6 d-flex flex-column flex-column-fluid p-5" id="kt_content">

            <div class="sub1 pt-3">
                <h1>자산 정보</h1>
                <h4>나의 지출 내역을 확인할 수 있어요</h4>
            </div>

            <hr style="border-style: solid; border-color: purple; border-width: 1px;">

            <div style="display: flex; align-items: stretch;">
                <div class="card h-100" style="flex: 1;">
                  <div class="card-body p-9">
                    <div class="d-flex justify-content-between align-items-center">
                      <span class="fs-2hx fw-bold">총 자산  : {{ addComma(formattedTotalAssets) }} 원</span>
                      <button @click="goToHistory" class="btn btn-primary fs-7" style="width: 100px; height: 40px; display: flex; justify-content: center; align-items: center;">자세히 보기</button>
                    </div>
                    <br>
                    <div v-for="transaction in userTransactions.slice(-4)" :key="transaction.id" class="fs-6 d-flex justify-content-between mb-4">
                      <div class="fw-semibold">{{ transaction.memo }}</div>
                      <div class="d-flex fw-bold">
                        <i v-if="transaction.type === '지출'" class="ki-duotone ki-arrow-down-left fs-3 me-1 text-danger">
                          <span class="path1"></span>
                          <span class="path2"></span>
                        </i>
                        <i v-else class="ki-duotone ki-arrow-up-right fs-3 me-1 text-success">
                          <span class="path1"></span>
                          <span class="path2"></span>
                        </i>
                        ₩ {{ transaction.amount }} 
                      </div>
                    </div>
                  </div>
                    
                </div>

                <div class="card card-xl-stretch mb-5 mb-xl-8 p-3" style="flex: 1; height: 270px;">
                    <div class="card-body p-0 d-flex justify-content-between flex-column overflow-hidden">
                        <div class="d-flex flex-stack flex-grow-1 px-9 mt-3">
                            <div class="symbol symbol-45px">
                                <div class="symbol-label">
                                    <img @click="goToHome" src="https://www.pngall.com/wp-content/uploads/8/Green-Check-Mark-PNG-Free-Download.png" style="width: 40px; padding-bottom: 5px;">
                                </div>
                            </div>
                            <div class="d-flex flex-column text-end">
                                <span class="fw-bolder text-gray-800 fs-4">올해 소비는 ?</span>
                                <span class="text-gray-500 fw-semibold fs-6"> Jan - Dec 2024</span>
                            </div>
                        </div>

                        
                         <div style="margin-left:30px; height:80%">
                            <canvas id="myChart"></canvas>
                         </div>
                        
                    </div>
                </div>

            </div>

            <br>
            
            <div class="sub1">
                <h1>추천 상품</h1>
                <h4>나의 소비 패턴에 맞는 카드와 통장 정보를 추천 받을 수 있어요</h4>
            </div>

            <hr style="border-style: solid; border-color: purple; border-width: 1px;">

            <div style="display: flex;">

              <div class="card-grid de-felex justify-content-center align-items-center">
                <div class="card" v-for="card in recommendedCards.slice(0, 2)" :key="card.id">
                  <img @click="goToProduct" class="m-5" :src="getImageUrl(card.category)" alt="카드 이미지" /><br>
                  <div class="discount-info de-felex justify-content-center align-items-center pb-3">
                    <h2>{{ card.bankName }} {{ card.cardName }}</h2><br>
                    <p v-html="formatMemo(card.memo)"></p>
                  </div>
                </div>
              </div>
                
            </div>
        
            <br>
            <div class="sub1">
                <h1>문화 소식</h1>
                <h4>관심있을만한 공연, 영화 정보를 확인할 수 있어요</h4>
            </div>

            <hr style="border-style: solid; border-color: purple; border-width: 1px;">

            <div style="display: flex;">
              <div v-for="(movie, index) in movies" :key="movie.movieCd" class="card">
                <img :src="getMoviePoster(index + 1)" class="card-img-top" alt="Movie Poster">
                <div class="card-body">
                  <h4 class="card-title">{{ movie.movieNm }}</h4>
                  <p class="card-text">
                    순위: {{ movie.rank }}위 <br>
                    누적: {{ movie.audiAcc }}명<br>
                    개봉: {{ movie.openDt }}
                  </p>
                  <a @click="goToCulture" :href="movie.link" class="btn btn-primary">보러가기</a>
                </div>
              </div>
            </div>

              
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Chart from 'chart.js/auto';
import { useRouter } from 'vue-router';

const addComma = (number) => {
  return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
}

const router = useRouter();

const goToHistory = () => {
  router.push({ name: 'History' });
};

const goToHome = () => {
  router.push({ name: 'Home' });
};

const goToCulture = () => {
  router.push({ name: 'Culture' });
};

const goToProduct = () => {
  router.push({ name: 'Product' });
}; 

const formattedTotalAssets = ref(0);
const userTransactions = ref([]);
const user = ref({});
const movies = ref([]);
const recommendedCards = ref([]);
const sortedCategories = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('/db.json');
    const personalHistory = response.data.personalHistory;

    formattedTotalAssets.value = personalHistory.reduce((total, transaction) => {
      return total + (transaction.type === '수입' ? transaction.amount : -transaction.amount);
    }, 0);

    userTransactions.value = personalHistory.map(transaction => ({
      id: transaction.id,
      memo: transaction.memo,
      amount: transaction.amount,
      type: transaction.type,
    }));

    const userId = 'aaa';
    const users = response.data.users;
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

    sortedCategories.value.forEach(item => {
      const categoryCards = cardRecommendations.filter(card => card.category === item.category);
      recommendedCards.value.push(...categoryCards);
    });

    console.log(recommendedCards.value);

  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

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

const fetchBoxOfficeData = async() => {
  try {
        const response = await axios.get('https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json', {
          params: {
            key: '7f257302868eb5ddfeda65e4098e5b6a', 
            targetDt: '20240611'
          }
        });
        movies.value = response.data.boxOfficeResult.dailyBoxOfficeList.map(movie => ({
          movieCd: movie.movieCd,
          movieNm: movie.movieNm,
          genre: movie.genreAlt,
          country: movie.repNationNm,
          runtime: movie.showTm,
          openDt: movie.openDt,
          rank:movie.rank,
          boxofficeType:movie.boxofficeType,
          audiAcc: movie.audiAcc,
          //posterUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.econovill.com%2Fnews%2FarticleView.html%3Fidxno%3D572149&psig=AOvVaw0y7myo1oXDnajuPho4CIpW&ust=1718251022135000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPiPrr6W1YYDFQAAAAAdAAAAABAE', // 실제 포스터 URL을 API에서 제공하지 않으면 별도로 관리해야 합니다.
          link: '#'
        })).slice(0, 3); 
      } catch (error) {
        console.error('Error fetching box office data:', error);
      }
};

onMounted(fetchBoxOfficeData);

const getMoviePoster = (index) => {
  return `./src/assets/images/${index}.jpg`;
};

const chartInstance = ref(null);

const getRandomData = () => Array.from({ length: 7 }, () => Math.floor(Math.random() * 201) - 100);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Dataset 1',
      data: getRandomData(),
      borderColor: 'red',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: getRandomData(),
      borderColor: 'blue',
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
    }
  ]
};

const config = {
  type: 'bar',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '수입/지출 증감'
      }
    }
  },
};


onMounted(() => {
  try {
    const ctx = document.getElementById('myChart').getContext('2d');
    chartInstance.value = new Chart(ctx, config);
  } catch (error) {
    console.error('Error initializing the chart:', error);
  }
});

</script>


<style scoped>
.sub1 {
    display: flex;
    align-items: center; 
  }

.sub1 h1,
.sub1 h4 {
    margin: 0 10px; 
  }

.card {
    overflow: hidden;
    margin: 30px;
}

.rotated-image {
    transform: rotate(90deg);
    
    max-height: 70px;
}

.discount-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
}

.white-line {
    border-color: white;
    border-width: 1px;
    margin: 20px 0;
}

.d-flex {
    display: flex;
}

.justify-content-between {
    justify-content: space-between;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
</style>
