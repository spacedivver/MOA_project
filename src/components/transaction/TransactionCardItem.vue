<template>
    <!--begin::Timeline content-->
    <div class="timeline-content mb-10 mt-n2 w-full">
        <!--begin::Timeline heading-->
        <div class="overflow-auto pe-3">
            <!--begin::Title-->
            <div class="gothic-a1-bold-content mb-2">
                <div class="deposit" v-if="history.type == '수입'">+ {{ addComma(history.amount) }}원</div>
                <div v-else>- {{ addComma(history.amount) }}원</div>
            </div>
            <!--end::Title-->
            <!--begin::Description-->
            <div class="d-flex align-items-center mt-1 fs-6">
                <div class="text-muted me-2 gothic-a1-bold-content">&nbsp;&nbsp;{{ history.memo }}</div>
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
.deposit {
    color: #00A3FF;
}

.gothic-a1-bold-content {
    font-family: "Gothic A1";
    font-weight: 100;
    font-style: normal;
    font-size: 1.2rem;
}
</style>