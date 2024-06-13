<template>
  <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
    <div class="content fs-6 d-flex flex-column flex-column-fluid" id="kt_content">
      <div class="card justify-content-center align-items-center m-3 p-5" style="background-color: white;">
        <h1>{{ user.name }}님은 
          <span :style="{ color: 'blue' }">{{ userCategory }}</span>에 많이 쓰는 중!</h1>
      </div>

      
      <div class="card" style="background-color: white; margin:10px; border-radius:20px">
          <h1 style="text-align: center; background-color:rgb(181, 234, 255); border-radius:20px">{{ user.name }}님께 딱 맞는 카드는?</h1>

        <br>
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

      <div class="card justify-content-center m-3 p-5" style="background-color: white; margin:10px; border-radius:20px">
        <h1 style="text-align: center; background-color:rgb(181, 234, 255); border-radius:20px">{{ user.name }}님께 추천하는 주식은?</h1>
        <br>

        <div class="table-responsive">
          <table class="table align-middle table-row-bordered table-row-dashed gy-5" id="kt_table_widget_1">
            <tbody>
              <tr class="text-start text-gray-500 fw-bolder fs-7 text-uppercase">
                <th class="w-20px ps-0"></th>
                <th class="min-w-200px px-0">종목명</th>
                <th class="min-w-125px">종가</th>
                <th class="min-w-125px">등락률</th>
                <th class="min-w-125px">관심있어요 !</th>
                <th class="text-end pe-2 min-w-70px">보러가기</th>
              </tr>
              <tr>
                <td class="p-0">
                  <div class="form-check form-check-sm form-check-custom form-check-solid">
                    <input class="form-check-input" type="checkbox" value="1" />
                  </div>
                </td>
                <td class="p-0">
                  <div class="d-flex align-items-center">
                    <div class="symbol symbol-50px me-2">
                      <span class="symbol-label">
                        <img alt="" class="w-25px" src="https://mblogthumb-phinf.pstatic.net/MjAxOTA5MDVfMjgy/MDAxNTY3NjY3OTkzNjI3.WhD_wzHJcfzo141UK_81UXfSYbnlpaHbyNZwOEn1BEEg.0khjPkf1MrG78J1on0aWrStqK-zWHpIqYMnhvl4q8oQg.PNG.passtheway/1280px-Samsung_Logo.svg.png?type=w800" />
                      </span>
                    </div>
                    <div class="ps-3">
                      <a href="#" class="text-gray-800 fw-bolder fs-5 text-hover-primary mb-1">삼성전자</a>
                    </div>
                  </div>
                </td>
                <td>
                  <span class="text-gray-800 fw-bolder fs-5 d-block">78,700</span>
                </td>
                <td>
                  <span class="text-gray-800 fw-bolder fs-5 d-block">+2.88</span>
                </td>
                <td>
                  <div class="d-flex flex-column w-100 me-2 mt-2">
                    <span class="text-gray-500 me-2 fw-bolder mb-2">65%</span>
                    <div class="progress bg-light-danger w-100 h-5px">
                      <div class="progress-bar bg-danger" role="progressbar" style="width: 65%;"></div>
                    </div>
                  </div>
                </td>
                <td class="pe-0 text-end">
                  <a href="pages/projects/project.html" class="btn btn-light text-muted fw-bolder btn-sm px-5">Go</a>
                </td>
              </tr>
              <tr>
                <td class="p-0">
                  <div class="form-check form-check-sm form-check-custom form-check-solid">
                    <input class="form-check-input" type="checkbox" value="1" />
                  </div>
                </td>
                <td class="p-0">
                  <div class="d-flex align-items-center">
                    <div class="symbol symbol-50px me-2">
                      <span class="symbol-label">
                        <img alt="" class="w-25px" src="https://mblogthumb-phinf.pstatic.net/MjAxOTEwMDNfMTg0/MDAxNTcwMTA2NTgxNzAx.VebMmW1adolFQfK5qpQgW4MVjEa60bRVilDJQ_4jRoIg.GflPa1pMpj-ZBFn_ss00S65NylRE-fLW6iSA3Utip48g.PNG.passtheway/ci_sk_%ED%8E%B8%EC%A7%91.png?type=w420" />
                      </span>
                    </div>
                    <div class="ps-3">
                      <a href="#" class="text-gray-800 fw-bolder fs-5 text-hover-primary mb-1">SK하이닉스</a>
                    </div>
                  </div>
                </td>
                <td>
                  <span class="text-gray-800 fw-bolder fs-5 d-block">225,500</span>
                </td>
                <td>
                  <span class="text-gray-800 fw-bolder fs-5 d-block">+4.88</span>
                </td>
                <td>
                  <div class="d-flex flex-column w-100 me-2">
                    <span class="text-gray-500 me-2 fw-bolder mb-2">85%</span>
                    <div class="progress bg-light-primary w-100 h-5px">
                      <div class="progress-bar bg-primary" role="progressbar" style="width: 85%;"></div>
                    </div>
                  </div>
                </td>
                <td class="pe-0 text-end">
                  <a href="pages/projects/project.html" class="btn btn-light text-muted fw-bolder btn-sm px-5">Go</a>
                </td>
              </tr>
              <tr>
                <td class="p-0">
                  <div class="form-check form-check-sm form-check-custom form-check-solid me-3">
                    <input class="form-check-input" type="checkbox" value="1" />
                  </div>
                </td>
                <td class="p-0">
                  <div class="d-flex align-items-center text-start">
                    <div class="symbol symbol-50px me-2">
                      <span class="symbol-label">
                        <img class="w-25px" alt="" src="https://www.lgensol.com/assets/img/company/logo.svg" />
                      </span>
                    </div>
                    <div class="ps-3">
                      <a href="#" class="text-gray-800 fw-bolder fs-5 text-hover-primary mb-1">LG에너지솔루션</a>
                     
                    </div>
                  </div>
                </td>
                <td>
                  <span class="text-gray-800 fw-bolder fs-5 d-block">355,000</span>
                </td>
                <td>
                  <span class="text-gray-800 fw-bolder fs-5 d-block">+1.00</span>
                </td>
                <td>
                  <div class="d-flex flex-column w-100 me-2">
                    <span class="text-gray-500 me-2 fw-bolder mb-2">4%</span>
                    <div class="progress bg-light-success w-100 h-5px">
                      <div class="progress-bar bg-success" role="progressbar" style="width: 47%;"></div>
                    </div>
                  </div>
                </td>
                <td class="pe-0 text-end">
                  <a href="pages/projects/project.html" class="btn btn-light text-muted fw-bolder btn-sm px-5">Go</a>
                </td>
              </tr>
              <tr>
                <td class="p-0">
                  <div class="form-check form-check-sm form-check-custom form-check-solid me-3">
                    <input class="form-check-input" type="checkbox" value="1" />
                  </div>
                </td>
                <td class="p-0">
                  <div class="d-flex align-items-center text-start">
                    <div class="symbol symbol-50px me-2">
                      <span class="symbol-label">
                        <img class="w-25px" alt="" src="https://i.namu.wiki/i/Cr_7uesfEVsIy3lwt6szNjuuuf4nzUbhSDx9F_dZRN1oCz9HefAWjEBwOOifCl_EMgmA54RD1Nv1iqMs8rma_Q.svg" />
                      </span>
                    </div>
                    <div class="ps-3">
                      <a href="#" class="text-gray-800 fw-bolder fs-5 text-hover-primary mb-1">현대차</a>
                    </div>
                  </div>
                </td>
                <td>
                  <span class="text-gray-800 fw-bolder fs-5 d-block">275,000</span>
                </td>
                <td>
                  <span class="text-gray-800 fw-bolder fs-5 d-block">+1.85</span>
                </td>
                <td>
                  <div class="d-flex flex-column w-100 me-2">
                    <span class="text-gray-500 me-2 fw-bolder mb-2">71%</span>
                    <div class="progress bg-light-info w-100 h-5px">
                      <div class="progress-bar bg-info" role="progressbar" style="width: 71%;"></div>
                    </div>
                  </div>
                </td>
                <td class="pe-0 text-end">
                  <a href="pages/projects/project.html" class="btn btn-light text-muted fw-bolder btn-sm px-5">Go</a>
                </td>
              </tr>
              <tr>
                <td class="p-0">
                  <div class="form-check form-check-sm form-check-custom form-check-solid me-3">
                    <input class="form-check-input" type="checkbox" value="1" />
                  </div>
                </td>
                <td class="p-0">
                  <div class="d-flex align-items-center text-start">
                    <div class="symbol symbol-50px me-2">
                      <span class="symbol-label">
                        <img class="w-25px" alt="" src="https://mblogthumb-phinf.pstatic.net/MjAxOTA5MDVfMjgy/MDAxNTY3NjY3OTkzNjI3.WhD_wzHJcfzo141UK_81UXfSYbnlpaHbyNZwOEn1BEEg.0khjPkf1MrG78J1on0aWrStqK-zWHpIqYMnhvl4q8oQg.PNG.passtheway/1280px-Samsung_Logo.svg.png?type=w800" />
                      </span>
                    </div>
                    <div class="ps-3">
                      <a href="#" class="text-gray-800 fw-bolder fs-5 text-hover-primary mb-1">삼성바이오로직스</a>
                    </div>
                  </div>
                </td>
                <td>
                  <span class="text-gray-800 fw-bolder fs-5 d-block">740,000</span>
                </td>
                <td>
                  <span class="text-gray-800 fw-bolder fs-5 d-block">-0.27</span>
                </td>
                <td>
                  <div class="d-flex flex-column w-100 me-2">
                    <span class="text-gray-500 me-2 fw-bolder mb-2">71%</span>
                    <div class="progress bg-light-info w-100 h-5px">
                      <div class="progress-bar bg-info" role="progressbar" style="width: 71%;"></div>
                    </div>
                  </div>
                </td>
                <td class="pe-0 text-end">
                  <a href="pages/projects/project.html" class="btn btn-light text-muted fw-bolder btn-sm px-5">Go</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--end::Table-->

        
        
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