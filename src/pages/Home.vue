<template>

  <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
    <div class="content fs-6 d-flex flex-column flex-column-fluid" id="kt_content">
      <!-- <div class="row g-5 g-xl-8"> -->
      <!--begin::Toolbar-->
      <!-- 소비 내역 -->
      <div class="toolbar" id="kt_toolbar">
        <div class="container-fluid d-flex flex-stack flex-wrap flex-sm-nowrap py-4">
          <!-- 소비 내역 제목 -->
          <div class="d-flex flex-row align-items-center justify-content-start flex-wrap me-2">
            <span class="text-gray-900 my-1 fs-2">
              <img src="@/assets/images/profile-icon.png" alt="" style="width: auto; height: 50px; margin-right: 5px">
              <b>김혜리</b> 님
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

                  <!--begin::Col-->
                  <div class="col-xl-6">
                    <!--begin::Chart Widget 1-->
                    <div class="card card-xl-stretch mb-5 mb-xl-8">
                      <!--begin::Body-->
                      <!-- <div class="card-body p-0 d-flex justify-content-between flex-column"> -->
                      <!-- <div class="d-flex flex-stack card-p flex-grow-1"> -->

                      <!-- 현재 자산 카드 시작 -->
                      <!-- <div class="col-lg-6 col-xxl-4"> -->
                      <!--begin::Budget-->
                      <div class="card h-100">
                        <div class="card-body p-9">
                          <div class="fs-4 fw-semibold text-gray-500">총 자산</div>
                          <div>
                            <span class="fs-2hx fw-bold">{{ addComma(300000) }}</span>
                            <span class="fs-1hx">원</span>
                          </div>
                          <div class="fs-6 d-flex justify-content-between mt-4 mb-4">
                            <div class="fw-semibold">입금</div>
                            <div class="d-flex fw-bold">
                              <i class="ki-duotone ki-arrow-up-right fs-3 me-1 text-success">
                                <span class="path1"></span>
                                <span class="path2"></span>
                              </i>$6,570
                            </div>
                          </div>
                          <div class="separator separator-dashed"></div>
                          <div class="fs-6 d-flex justify-content-between my-4">
                            <div class="fw-semibold">출금</div>
                            <div class="d-flex fw-bold">
                              <i class="ki-duotone ki-arrow-down-left fs-3 me-1 text-danger">
                                <span class="path1"></span>
                                <span class="path2"></span>
                              </i>$408
                            </div>
                          </div>
                          <!--end::Budget-->
                          <!-- 현재 자산 카드 끝 -->

                          <!--begin::Text-->
                          <!-- <div class="d-flex flex-column text-end">
                            <span class="fw-bolder text-gray-800 fs-2">Orders</span>
                            <span class="text-gray-500 fw-semibold fs-6">Sep 1 - Sep 16 2020</span>
                          </div> -->
                          <!--end::Text-->
                        </div>
                        <!--begin::Chart-->
                        <div class="pt-1">
                          <div id="kt_chart_widget_1_chart" class="card-rounded-bottom h-125px"></div>
                        </div>
                        <!--end::Chart-->
                      </div>
                    </div>
                    <!--end::Chart Widget 1-->
                  </div>
                  <!--end::Col-->

                  <!-- 목표 달성도 차트 시작 -->
                  <!--begin::Col-->
                  <div class="col-xl-6">
                    <!--begin::Chart Widget 4-->
                    <div class="card card-xl-stretch mb-5 mb-xl-8">
                      <!--begin::Beader-->
                      <div class="card-header border-0 py-5">
                        <h3 class="card-title align-items-start flex-column">
                          <span class="card-label fw-bolder text-gray-900 fs-2">이달의 목표 달성도</span>
                          <span class="text-gray-500 mt-2 fw-semibold fs-6">{{ name }}님의 목표 달성 금액을 확인해보세요</span>
                        </h3>
                      </div>
                      <!--end::Header-->
                      <!--begin::Body-->
                      <div class="card-body d-flex flex-column pt-0">
                        <!-- 목표 달성도 차트 그리기 시작 -->
                        <!--begin::Chart-->
                        <div class="d-flex flex-center position-relative">
                          <Achievement />
                        </div>
                        <!--end::Chart-->
                        <!-- 목표 달성도 차트 그리기 끝 -->
                      </div>
                      <!--end::Body-->
                    </div>
                    <!--end::Chart Widget 4-->
                  </div>
                  <!--end::Col-->
                  <!-- 목표 달성도 차트 끝 -->
                </div>
                <!--end::Row-->
              </div>
              <!--end::Col-->
            </div>
            <!--end::Row-->

            <!--begin::Row-->
            <div class="row g-xl-8">
              <!--begin::Col-->
              <div class="col-xxl-12">

                <!--begin::Row-->
                <div class="row g-xl-8">
                  <!--begin::Col-->
                  <div class="col-xl-6">
                    <!--begin::Chart Widget 1-->
                    <div class="card card-xl-stretch mb-5 mb-xl-8">
                      <!--begin::Body-->
                      <!-- <div class="card-body p-0 d-flex justify-content-between flex-column"> -->
                      <!-- <div class="d-flex flex-stack card-p flex-grow-1"> -->

                      <!-- 현재 자산 카드 시작 -->
                      <!-- <div class="col-lg-6 col-xxl-4"> -->
                      <div class="card h-100">
                        <div class="card-body p-9">
                          <div class="fs-2 fw-bold">{{ month }}월에는 9만원 덜 썼어요</div>
                          <div class="fs-6 fw-semibold text-gray-500">한 달에 평균 34만원 정도 써요</div>
                          <!-- 현재 자산 카드 끝 -->

                          <!--begin::Text-->
                          <!-- <div class="d-flex flex-column text-end">
                            <span class="fw-bolder text-gray-800 fs-2">Orders</span>
                            <span class="text-gray-500 fw-semibold fs-6">Sep 1 - Sep 16 2020</span>
                          </div> -->
                          <!--end::Text-->
                        </div>
                        <!--begin::Chart-->
                        <div class="pt-1">
                          <Monthly />
                          <!-- <div id="kt_chart_widget_1_chart" class="card-rounded-bottom h-125px"></div> -->
                        </div>
                        <!--end::Chart-->
                      </div>
                    </div>
                  </div>
                  <!--end::Col-->

                  <!-- 목표 달성도 차트 시작 -->
                  <!--begin::Col-->
                  <div class="col-xl-6">
                    <!--begin::Chart Widget 4-->
                    <div class="card card-xl-stretch mb-5 mb-xl-8">
                      <!--begin::Beader-->
                      <div class="card-header border-0 py-5">
                        <h3 class="card-title align-items-start flex-column">
                          <span class="card-label fw-bolder text-gray-900 fs-2">카테고리별 소비</span>
                          <span class="text-gray-500 mt-2 fw-semibold fs-6">{{ name }}님은 식비 지출이 가장 높아요</span>
                        </h3>
                      </div>
                      <!--end::Header-->
                      <!--begin::Body-->
                      <div class="card-body d-flex flex-column pt-0">
                        <!-- 목표 달성도 차트 그리기 시작 -->
                        <!--begin::Chart-->
                        <div class="d-flex flex-center position-relative">
                          <CategoryChart />
                        </div>
                        <!--end::Chart-->
                        <!-- 목표 달성도 차트 그리기 끝 -->
                      </div>
                      <!--end::Body-->
                    </div>
                    <!--end::Chart Widget 4-->
                  </div>
                  <!--end::Col-->
                  <!-- 목표 달성도 차트 끝 -->
                </div>
                <!--end::Row-->
              </div>
              <!--end::Col-->
            </div>
            <!--end::Row-->
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
import { ref } from 'vue';
import Achievement from '@/components/widgets/Achievement.vue'
import Monthly from '@/components/widgets/Monthly.vue'
import CategoryChart from '@/components/widgets/CategoryChart.vue'

const date = new Date();
let month = ref(date.getMonth() + 1);

const addComma = (number) => {
  return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
}

</script>