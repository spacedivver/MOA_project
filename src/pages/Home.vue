<template>
  <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
    <div class="content fs-6 d-flex flex-column flex-column-fluid" id="kt_content">
      <!-- <div class="row g-5 g-xl-8"> -->
      <!--begin::Toolbar-->
      <!-- 소비 내역 -->
      <div class="toolbar" id="kt_toolbar">
        <div class="container-fluid d-flex flex-stack flex-wrap flex-sm-nowrap py-4">
          <!-- 사용자 정보 -->
          <div class="d-flex flex-row align-items-center justify-content-start flex-wrap me-2">
            <span class="text-gray-900 my-1 fs-2">
              <img src="@/assets/images/profile-icon.png" alt="" style="width: auto; height: 50px; margin-right: 5px">
              <b>{{ userName }}</b> 님
            </span>
          </div>
        </div>

        <div class="container-fluid d-flex flex-stack flex-wrap flex-sm-nowrap py-4">
          <!-- 소비 내역 제목 -->
          <div class="d-flex flex-column align-items-start justify-content-center flex-wrap me-2">
            <h1 class="text-gray-900 fw-bold my-1 fs-2">{{ month }}월 내 소비
              <small class="text-muted fs-6 fw-normal ms-1"></small>
            </h1>
          </div>
        </div>

        <!--begin::Post-->
        <div class="post fs-6 d-flex flex-column-fluid" id="kt_post">
          <!--begin::Container-->
          <div class="container">
            <!--begin::Row-->
            <div class="row g-xl-8">
              <!--begin::Col-->
              <!-- 가로 길이 full -> 12로 설정 -->
              <div class="col-xxl-12">
                <!--begin::Row-->
                <div class="row g-xl-8">

                  <!-- 현재 자산 카드 시작 -->
                  <div class="col-xl-6">
                    <div class="card card-xl-stretch mb-5 mb-xl-8">
                      <div class="card h-100">
                        <div class="card-body p-9">
                          <div class="fs-4 fw-semibold text-gray-500">총 자산</div>
                          <div>
                            <span class="fs-2hx fw-bold">{{ addComma(asset) }}</span>
                            <span class="fs-1hx">원</span>
                          </div>
                          <div class="fs-4 d-flex justify-content-between mt-4 mb-4">
                            <div class="fw-semibold">입금</div>
                            <div class="d-flex fw-bold">
                              <i class="ki-duotone ki-arrow-up-right fs-4 me-1 text-success">
                                <span class="path1"></span>
                                <span class="path2"></span>
                              </i> {{ addComma(deposit) }}원
                            </div>
                          </div>
                          <div class="separator separator-dashed"></div>
                          <div class="fs-4 d-flex justify-content-between my-4">
                            <div class="fw-semibold">출금</div>
                            <div class="d-flex fw-bold">
                              <i class="ki-duotone ki-arrow-down-left fs-4 me-1 text-danger">
                                <span class="path1"></span>
                                <span class="path2"></span>
                              </i>{{ addComma(withdraw) }}원
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- 현재 자산 카드 끝 -->

                  <!-- 목표 달성도 차트 시작 -->
                  <div class="col-xl-6">
                    <div class="card card-xl-stretch">
                      <div class="card-header border-0 py-5">
                        <h3 class="card-title align-items-start flex-column">
                          <span class="card-label fw-bolder text-gray-900 fs-2">이달의 목표 달성도</span>
                          <span class="text-gray-500 mt-2 fw-semibold fs-6">{{ userName }}님의 목표 달성 금액을 확인해보세요</span>
                        </h3>
                      </div>

                        <!-- 목표 달성도 차트 그리기 시작 -->
                        <div class="d-flex flex-center position-relative">
                          <Achievement />
                        </div>
                        <!-- 목표 달성도 차트 그리기 끝 -->
                    </div>
                  </div>
                  <!-- 목표 달성도 차트 끝 -->
                </div>
              </div>
            </div>

            <!--begin::Row-->
            <div class="row g-xl-8">
              <!--begin::Col-->
              <div class="col-xxl-12">
                <!--begin::Row-->
                <div class="row g-xl-8">
                  <!-- 현재 자산 카드 시작 -->
                  <div class="col-xl-6">
                    <div class="card card-xl-stretch mb-5 mb-xl-8">
                      <div class="card h-100">
                        <div class="card-body p-9">
                          <div class="fs-2 fw-bold">{{ month }}월에는 9만원 덜 썼어요</div>
                          <div class="fs-6 fw-semibold text-gray-500">한 달에 평균 34만원 정도 써요</div>
                        </div>
                        <!-- 월별 지출 내역 평균 그래프 그리기 시작 -->
                        <div class="pt-1">
                          <Monthly :userId="userId"/>
                        </div>
                        <!-- 월별 지출 내역 평균 그래프 그리기 끝 -->
                      </div>
                      <!-- 현재 자산 카드 끝 -->
                    </div>
                  </div>
                  <!-- 현재 자산 카드 끝 -->

                  <!-- 목표 달성도 차트 시작 -->
                  <div class="col-xl-6">
                    <div class="card card-xl-stretch mb-5 mb-xl-8">
                      <div class="card-header border-0 py-5">
                        <h3 class="card-title align-items-start flex-column">
                          <span class="card-label fw-bolder text-gray-900 fs-2">카테고리별 소비</span>
                          <span class="text-gray-500 mt-2 fw-semibold fs-6">{{ name }}님은 식비 지출이 가장 높아요</span>
                        </h3>
                      </div>

                      <!-- 목표 달성도 차트 그리기 시작 -->
                      <div class="card-body d-flex flex-column pt-0">
                        <div class="d-flex flex-center position-relative">
                          <CategoryChart />
                        </div>
                      </div>
                      <!-- 목표 달성도 차트 그리기 끝 -->
                    </div>
                  </div>
                </div>
                <!-- 목표 달성도 차트 끝 -->
              </div>
              <!--end::Col-->
            </div>
            <!--end::Row-->

            <!-- 거래 내역 카드 시작 -->
            <div class="row g-xl-8">
              <div class="col-xxl-12">
                <div class="row g-xl-12">
                  <div class="col-xl-12" v-for="date in dateList" :key="date">
                    <TransactionCard :date="date" :userId="userId"/>
                  </div>
                </div>
              </div>
            </div>
            <!-- 거래 내역 카드 끝 -->
          </div>
          <!--end::Container-->
        </div>
        <!--end::Toolbar-->
      </div>
    </div>
    <!--end::Post-->
  </div>
  <!-- </body> -->
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

import Achievement from '@/components/widgets/Achievement.vue'
import Monthly from '@/components/widgets/Monthly.vue'
import CategoryChart from '@/components/widgets/CategoryChart.vue'
import TransactionCard from '@/components/transaction/TransactionCard.vue'

const date = new Date();
let month = ref(date.getMonth() + 1);

const addComma = (number) => {
  return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
}

const BASE_URL = "http://localhost:3001";

const userId = 'aaa';
const userName = ref('');
const asset = ref('');
const dateList = ref([]);

const deposit = ref(0);
const withdraw = ref(0);

const setDateList = async () => { // 사용자의 모든 거래 일자
  const response = await axios.get(BASE_URL + '/personalHistory' + '?userId=' + userId);
  const dateSet = new Set();

  response.data.forEach(element => {
    dateSet.add(element.date); // 거래 일자 리스트 생성

    const elementMonth = Number(element.date.split('-')[1]); // 수입, 지출 금액 계산
    if (elementMonth == month.value) {
      if (element.type == "수입") {
        deposit.value += Number(element.amount);
      } else {
        withdraw.value += Number(element.amount);
      }
    }
  });

  dateList.value = [...dateSet];

  dateList.value = dateList.value.sort((a, b) => { // 거래일자 -> 내림차순
    return b.localeCompare(a);
  });
}
setDateList();

const setAsset = async() => {
  const response = await axios.get(BASE_URL + '/users' + '?userId=' + userId);
  
  userName.value = response.data[0].name;
  asset.value = response.data[0].asset;
}
setAsset();
</script>