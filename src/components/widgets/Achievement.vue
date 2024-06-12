<template>
    <div>
        <div id="achievement_chart"></div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import ApexCharts from 'apexcharts';

onMounted(() => {
    var options = {
            series: [74],
            chart: {
                fontFamily: 'inherit',
                height: 300,
                type: 'radialBar',
                offsetY: 0
            },
            plotOptions: {
                radialBar: {
                    startAngle: -90,
                    endAngle: 90,

                    hollow: {
                        margin: 0,
                        size: "70%"
                    },
                    dataLabels: {
                        showOn: "always",
                        name: {
                            show: true,
                            fontSize: "13px",
                            fontWeight: "700",
                            offsetY: -5,
                            color: '#B6C0D1'
                        },
                        value: {
                            color: '#4B5675',
                            fontSize: "30px",
                            fontWeight: "700",
                            offsetY: -40,
                            show: true
                        }
                    },
                    track: {
                        background: '#87D4F9',
                        strokeWidth: '100%'
                    }
                }
            },
            // progress color
            colors: ['#24B0FF'],
            stroke: {
                lineCap: "round",
            },
            labels: ["My Achievements"]
        };

    new ApexCharts(document.querySelector("#achievement_chart"), options).render();
});
</script>

<style scoped>
#achievement_chart {
    width: 100%;
}
</style>