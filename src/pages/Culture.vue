<template>
  <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
    <div class="content fs-6 d-flex flex-column flex-column-fluid" id="kt_content">
      <div style="display: block;">
        <h1 style="margin-left: 150px;">Exhibition Information</h1>
        <div class="exhibitions-container">
          <div v-for="exhibition in exhibitions.slice(0, 4)" :key="exhibition.id" class="exhibition">
            <div class="card-body">
              <h4 class="card-title">{{ exhibition.title }}</h4>
              <p class="card-text">
                공연 이름 : {{ exhibition.title }} <br>
                공연 기간 : {{ exhibition.StartTime }} - {{ exhibition.FinishTime }}<br>
                장소 : {{ exhibition.place }}<br>
                위치 : {{ exhibition.area }} <br>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      exhibitions: []
    };
  },
  mounted() {
    this.fetchExhibitionData();
  },
  methods: {
    async fetchExhibitionData() {
      try {
        const response = await axios.get('/db.json');

        console.log(response); // 실제로 받은 데이터 확인
        console.log(response.data); // 실제로 받은 데이터를 확인

        // 실제 데이터를 포함하고 있는지 확인 후 처리
        if (response.data && response.data.exhibitions) {
          this.exhibitions = response.data.exhibitions.map(exhibition => ({
            id: exhibition.id,
            title: exhibition.title,
            StartTime: exhibition.StartTime,
            FinishTime: exhibition.FinishTime,
            place: exhibition.place,
            area: exhibition.area,
          }));
        } else {
          console.error('API 응답에서 필요한 구조가 존재하지 않습니다.');
        }

      } catch (error) {
        console.error('전시 정보를 불러오는 중 오류가 발생했습니다:', error);
        console.log(error.response); // 추가적인 에러 정보 출력
      }
    }
  }
};
</script>

<style scoped>
.exhibitions-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 150px;
  width: 800px;
}

.exhibition {
  flex: 0 1 calc(50% - 16px);
  border: 1px solid #ccc;
  padding: 16px;
  margin: 8px;
  box-sizing: border-box;
}

.exhibition img {
  max-width: 200px;
}
</style>
