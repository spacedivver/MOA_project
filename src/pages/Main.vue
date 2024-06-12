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
                            <div class="fs-2hx fw-bold">총 자산 : {{ formattedTotalAssets }}</div>
                            <button class="btn btn-primary fs-7" style="width: 100px; height: 40px; display: flex; justify-content: center; align-items: center;">자세히 보기</button>
                        </div>
                        <br>
                        <div v-for="transaction in userTransactions" :key="transaction.id" class="fs-6 d-flex justify-content-between mb-4">
                            <div class="fw-semibold">{{transaction.category}} {{ transaction.memo }}</div>
                            <div class="d-flex fw-bold">
                                <i v-if="transaction.type === '지출'" class="ki-duotone ki-arrow-down-left fs-3 me-1 text-danger">
                                    <span class="path1"></span>
                                    <span class="path2"></span>
                                </i>
                                <i v-else class="ki-duotone ki-arrow-up-right fs-3 me-1 text-success">
                                    <span class="path1"></span>
                                    <span class="path2"></span>
                                </i>
                                {{ transaction.amount }} ₩
                            </div>
                        </div>
                        
                    </div>
                    
                </div>

                <div class="card card-xl-stretch mb-5 mb-xl-8" style="flex: 1; height: 270px;">
                    <div class="card-body p-0 d-flex justify-content-between flex-column overflow-hidden">
                        <div class="d-flex flex-stack flex-grow-1 px-9 pb-3 mt-3">
                            <div class="symbol symbol-45px">
                                <div class="symbol-label">
                                    <img src="https://www.pngall.com/wp-content/uploads/8/Green-Check-Mark-PNG-Free-Download.png" style="width: 40px; padding-bottom: 5px;">
                                </div>
                            </div>
                            <div class="d-flex flex-column text-end">
                                <span class="fw-bolder text-gray-800 fs-4">올해 소비는 ?</span>
                                <span class="text-gray-500 fw-semibold fs-6"> Jan - Dec 2024</span>
                            </div>
                        </div>
                        <div style="margin-left: 50px; margin-bottom:10px">
                            <canvas ref="MyChart" style="height: 180px;"></canvas>
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
                <div class="card h-100 p-5" style="flex: 1; background-color: rgb(228, 237, 250);">
                    <div class="d-flex">
                        <img src="https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/09564_img.png" class="rotated-image" style="margin-top: 20px;">
                        <div class="discount-info" style="margin-top: 10px; padding-left: 50px;">
                            <div v-for="card in cardRecommendations" :key="card.id">
                                <h2>{{ card.bankName }} {{ card.cardName }}</h2>
                                <h6 v-for="item in card.memo.split('\n')" :key="item">{{ item }}</h6>
                            </div>
                        </div>
                    </div>
                    
                
                    <hr style="border-width: 2px; border-color: white;">
                
                    <div class="d-flex justify-content-between">
                        <h4>브랜드 : master</h4>
                        <h4>연회비 : 없음</h4>
                    </div>
                </div>
                

                
                <div class="card card-xl-stretch p-4" style="flex: 1;">
                    
                    <div class="card-body p-0 d-flex justify-content-between flex-column overflow-hidden">
                        <div class="d-flex flex-stack flex-grow-1 px-9 pt-9 pb-3">
                            
                            <div class="symbol symbol-45px p-4 mb-4 d-flex align-items-center flex-column" style="border: 1px solid rgb(233, 233, 233);">
                                <img src="https://search.pstatic.net/sunny?src=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20191127%2Fourmid%2Fpngtree-briefcase-vector-icon-png-image_2043498.jpg&type=fff208_208" width="50px">
                                <h3 style="margin-top: 2px;">직장인</h3>
                                # 재태크의 신으로
                            </div>
                           
                            <div class="d-flex flex-column text-end " style="padding-right: 30px;">
                                거래 실적에 따른 다양한 혜택
                                <h3>KB 국민 ONE 통장</h3>
                                <button style="border: 1px solid rgb(194, 194, 194);">자세히 보기</button>
                            </div>
                            
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
                <div v-for="(movie, index) in movies.slice(0, 3)" :key="movie.movieCd" class="card" style="width: 400px; flex: 1;">
                    <img src="https://cdn.econovill.com/news/photo/202204/572149_493911_1955.jpg" class="card-img-top" alt="Card image">
                    <div class="card-body">
                        <h4 class="card-title">{{ movie.movieNm }}</h4>
                        <p class="card-text">
                            순위 : {{ movie.rank }}위 <br>
                            누적 : {{ movie.audiAcc }}명<br>
                            개봉 : {{ movie.openDt }}
                        </p>
                        <a :href="movie.link" class="btn btn-primary">보러가기</a>
                    </div>
                </div>
            </div>
              
        </div>
    </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
import axios from 'axios';

Chart.register(...registerables);

export default {
  data() {
    return {
      chartConfig: {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: []
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      },
      userTransactions: [
         { id: 1, date: '2024-01-01', amount: 10000, category: '식비', type: '지출', payment: '카드', memo: '점심' },
         { id: 2, date: '2024-02-01', amount: 50000, category: '교통비', type: '지출', payment: '현금' },
         { id: 3, date: '2024-03-01', amount: 200000, category: '저축', type: '수입', payment: '현금', memo: '월급' },
         { id: 4, date: '2024-03-03', amount: 50000, category: '교통비', type: '지출', payment: '현금' },
      ],
      movies: [], 
      cardRecommendations: [
        { id: 1, bankName: "국민카드", cardName: "트래블러스 체크카드", category: "여행", memo: "- 해외 이용 수수요 1.25% 면제\n- 철도 5,000원 할인\n -전국 맛집 5,000원 할인" },
      ],
    };
  },
  mounted() {
    this.fetchBoxOfficeData();
    this.createChartData();
    this.createChart();
  },
  computed: {
    totalAssets() {
      return this.userTransactions.reduce((total, transaction) => {
        return total + (transaction.type === '수입' ? transaction.amount : -transaction.amount);
      }, 0);
    },
    formattedTotalAssets() {
      return this.totalAssets.toLocaleString() + ' ₩';
    }
  },
  methods: {
    async fetchBoxOfficeData() {
      try {
        const response = await axios.get('https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json', {
          params: {
            key: '7f257302868eb5ddfeda65e4098e5b6a', // 여기에 본인의 API 키를 입력하세요.
            targetDt: '20240611' // 여기에 원하는 날짜를 입력하세요.
          }
        });
        this.movies = response.data.boxOfficeResult.dailyBoxOfficeList.map(movie => ({
          movieCd: movie.movieCd,
          movieNm: movie.movieNm,
          genre: movie.genreAlt,
          country: movie.repNationNm,
          runtime: movie.showTm,
          openDt: movie.openDt,
          rank:movie.rank,
          boxofficeType:movie.boxofficeType,
          audiAcc: movie.audiAcc,
          posterUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.econovill.com%2Fnews%2FarticleView.html%3Fidxno%3D572149&psig=AOvVaw0y7myo1oXDnajuPho4CIpW&ust=1718251022135000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPiPrr6W1YYDFQAAAAAdAAAAABAE', // 실제 포스터 URL을 API에서 제공하지 않으면 별도로 관리해야 합니다.
          link: '#'
        })).slice(0, 3); 
      } catch (error) {
        console.error('Error fetching box office data:', error);
      }
    },
    createChartData() {
      const monthlyTransactions = Array.from({ length: 12 }, () => ({ income: 0, expenditure: 0 }));

      this.userTransactions.forEach(transaction => {
        const month = new Date(transaction.date).getMonth();
        if (transaction.type === '수입') {
          monthlyTransactions[month].income += transaction.amount;
        } else {
          monthlyTransactions[month].expenditure += transaction.amount;
        }
      });

      this.chartConfig.data.datasets.push({
        label: '수입',
        data: monthlyTransactions.map(data => data.income),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      });

      this.chartConfig.data.datasets.push({
        label: '지출',
        data: monthlyTransactions.map(data => data.expenditure),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      });
    },
    createChart() {
      new Chart(this.$refs.MyChart, {
        type: this.chartConfig.type,
        data: this.chartConfig.data,
        options: this.chartConfig.options
      });
    }
  }
};

</script>

<style>
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
</style>
