<template>
    <!--begin::Timeline content-->
    <div class="timeline-content mb-10 mt-n2 w-full">
        <!--begin::Timeline heading-->
        <div class="overflow-auto pe-3">
            <!--begin::Title-->
            <div class="fs-5 fw-semibold mb-2">
                <div class="deposit" v-if="history.type == '수입'">+{{ addComma(history.amount) }}원</div>
                <div v-else>-{{ addComma(history.amount) }}원</div>
            </div>
            <!--end::Title-->
            <!--begin::Description-->
            <div class="d-flex align-items-center mt-1 fs-6">
                <div class="text-muted me-2 fs-7">{{ history.memo }}</div>
            </div>
            <!--end::Description-->
        </div>
        <!--end::Timeline heading-->
    </div>
    <!--end::Timeline content-->
</template>
<script setup>
const props = defineProps(['history']);
const history = JSON.parse(JSON.stringify(props)).history;

const addComma = (number) => {
    return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
}
</script>
<style scoped>
.deposit{
    color: #00A3FF;
}
</style>