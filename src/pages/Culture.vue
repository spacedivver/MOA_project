<template>
  <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
    <div class="content fs-6 d-flex flex-column flex-column-fluid p-5" id="kt_content">
      <!-- 전시 정보 -->
      <div style="display: block;">
        <div class="sub1 pt-3">
        <h1>공연 소식</h1>
        <h4>관심있을 만한 공연, 영화 정보를 확인할 수 있어요</h4>
      </div>
        <hr style="border-style: solid; border-color: purple; border-width: 1px;">
        <div class="exhibitions-container">
          <div v-for="exhibition in exhibitions.slice(0, 4)" :key="exhibition.id" class="card">
            <div class="card-body">
              <img :src="exhibition.poster" class="card-img-top" alt="Exhibition Poster"><br><br>
              <h4 class="card-title">{{ exhibition.title }}</h4>
              <p class="card-text">
                공연 이름: {{ exhibition.title }} <br>
                공연 기간: {{ exhibition.StartTime }} - {{ exhibition.FinishTime }}<br>
                장소: {{ exhibition.place }}<br>
                위치: {{ exhibition.area }} <br>
              </p>
            </div>
          </div>
        </div>
      </div>

      <br><br><br>

      <!-- 문화 정보 출력 -->
      <div class="sub1">
        <h1>영화 소식</h1>
        <h4>관심있을 만한 공연, 영화 정보를 확인할 수 있어요</h4>
      </div>
      <hr style="border-style: solid; border-color: purple; border-width: 1px;">

      <!-- 영화 정보 그리드 -->
      <div class="card-grid-5x2">
        <div v-for="(movie, index) in movies" :key="movie.movieCd" class="card">
          <img :src="getMoviePoster(index + 1)" class="card-img-top" alt="Movie Poster">
          <div class="card-body">
            <h4 class="card-title">{{ movie.movieNm }}</h4>
            <p class="card-text">
              순위: {{ movie.rank }}위 <br>
              누적: {{ movie.audiAcc }}명<br>
              개봉: {{ movie.openDt }}
            </p>
            <a :href="movie.link" class="btn btn-primary">보러가기</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const exhibitions = ref([]);
const movies = ref([]);

// 전시 정보 불러오기
const fetchExhibitionData = async () => {
  try {
    const response = await axios.get('/db.json');
    if (response.data && response.data.exhibitions) {
      exhibitions.value = response.data.exhibitions.map(exhibition => ({
        id: exhibition.id,
        title: exhibition.title,
        StartTime: exhibition.StartTime,
        FinishTime: exhibition.FinishTime,
        place: exhibition.place,
        area: exhibition.area,
        poster: exhibition.poster,
      }));
    } else {
      console.error('API 응답에서 필요한 구조가 존재하지 않습니다.');
    }
  } catch (error) {
    console.error('전시 정보를 불러오는 중 오류가 발생했습니다:', error);
  }
};

// 박스 오피스 데이터 불러오기
const fetchBoxOfficeData = async () => {
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
      rank: movie.rank,
      boxofficeType: movie.boxofficeType,
      audiAcc: movie.audiAcc,
      // posterUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.econovill.com%2Fnews%2FarticleView.html%3Fidxno%3D572149&psig=AOvVaw0y7myo1oXDnajuPho4CIpW&ust=1718251022135000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPiPrr6W1YYDFQAAAAAdAAAAABAE', // 실제 포스터 URL을 API에서 제공하지 않으면 별도로 관리해야 합니다.
      link: '#'
    })).slice(0, 10); // 최대 10개의 영화만 가져오도록 수정
  } catch (error) {
    console.error('Error fetching box office data:', error);
  }
};

onMounted(async () => {
  fetchExhibitionData();
  fetchBoxOfficeData();
});

// 각 영화에 대한 포스터 이미지 URL 반환 함수
const getMoviePoster = (index) => {
  return `./src/assets/images/${index}.jpg`;
};
</script>

<style scoped>
.exhibitions-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 5x2 그리드 형식으로 변경 */
  gap: 20px; /* 그리드 간격 설정 */
}

.exhibition {
  flex: 0 1 calc(50% - 16px);
  border: 1px solid #ccc;
  padding: 16px;
  margin: 8px;
  box-sizing: border-box;
}

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
  margin-bottom: 20px; /* 각 카드 아래 간격 추가 */
}

.card-grid-5x2 {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 5x2 그리드 형식으로 변경 */
  gap: 20px; /* 그리드 간격 설정 */
}

.card-img-top {
  max-width: 100%; /* 이미지 최대 너비 설정 */
  height: auto; /* 이미지 높이 자동 조정 */
}
</style>
