<template>
    <div>
        <!--begin::Timeline-->
        <div class="card">
            <!--begin::Card head-->
            <div class="card-header card-header-stretch">
                <!--begin::Title-->
                <div class="card-title d-flex align-items-center">
                    <i class="ki-duotone ki-calendar-8 fs-1 text-primary me-3 lh-0">
                        <span class="path1"></span>
                        <span class="path2"></span>
                        <span class="path3"></span>
                        <span class="path4"></span>
                        <span class="path5"></span>
                        <span class="path6"></span>
                    </i>
                    <!-- 거래 내역 날짜 -->
                    <h3 class="fw-bold m-0 text-gray-800"> {{ splitDate[0] }}년 {{ splitDate[1] }}월 {{ splitDate[2] }}일</h3>
                </div>
                <!--end::Title-->
            </div>
            <!--end::Card head-->
            <!--begin::Card body-->
            <div class="card-body">
                <!--begin::Tab Content-->
                <div class="tab-content">
                    <!--begin::Tab panel-->
                    <div id="kt_activity_today" class="card-body p-0 tab-pane fade show active" role="tabpanel"
                        aria-labelledby="kt_activity_today_tab">
                        <!--begin::Timeline-->
                        <div class="timeline timeline-border-dashed">
                            <div v-for="history in historys" :key="history.id">
                                <div class="timeline-item">
                                    <TimeLineIcon />
                                    <TransactionCardItem :history="history" />
                                </div>
                            </div>
                        </div>
                        <!--end::Timeline-->
                    </div>
                    <!--end::Tab panel-->
                </div>
                <!--end::Tab Content-->
            </div>
            <!--end::Card body-->
        </div>
        <!--end::Timeline-->

    </div>
</template>
<script setup>
import TransactionCardItem from '@/components/transaction/TransactionCardItem.vue'
import TimeLineIcon from '@/components/transaction/TimeLineIcon.vue'
import axios from 'axios';
import { ref, defineProps } from 'vue';

const props = defineProps(['date', 'userId']);
const date = props.date;
const splitDate = date.split('-');

const BASE_URL = "http://localhost:3001";
const userId = props.userId;

const historys = ref([]);
const setHistorys = async () => {
    const response = await axios.get(BASE_URL + '/personalHistory' + '?userId=' + userId);
    
    response.data.forEach(element => {
        if (element.date == date) {
            historys.value.push(element);
        }
    });
}
setHistorys();

</script>
<style scoped></style>