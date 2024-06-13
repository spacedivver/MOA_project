<template>
    <div>
        <div id="monthly_chart"></div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import ApexCharts from 'apexcharts';


onMounted(() => {
    const createCategories = () => {
        const date = new Date();
        let currentMonth = date.getMonth() + 1;
        let monthList = [currentMonth + '월'];

        for (let i = 0; i < 5; i++) {
            currentMonth -= 1;
            if (currentMonth == 0) {
                currentMonth = 12;
            }
            monthList.push(currentMonth + '월');
        }
        return monthList.reverse();
    };

    const categories = createCategories();

    var options = {
        series: [{
            name: 'Net Profit',
            data: [50, 70, 90, 117, 80, 65],
        }, {
            name: 'Revenue',
            data: [50, 70, 90, 117, 80, 65],
        }],
        chart: {
            fontFamily: 'inherit',
            type: 'bar',
            height: 300,
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: ['35%'],
                borderRadius: 6
            }
        },
        legend: {
            show: false
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: categories,
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false
            },
            labels: {
                style: {
                    colors: '#B6C0D1',
                    fontSize: '12px'
                }
            }
        },
        yaxis: {
            labels: {
                style: {
                    colors: '#B6C0D1',
                    fontSize: '12px'
                }
            }
        },
        fill: {
            opacity: 1
        },
        states: {
            normal: {
                filter: {
                    type: 'none',
                    value: 0
                }
            },
            hover: {
                filter: {
                    type: 'none',
                    value: 0
                }
            },
            active: {
                allowMultipleDataPointsSelection: false,
                filter: {
                    type: 'none',
                    value: 0
                }
            }
        },
        tooltip: {
            style: {
                fontSize: '12px'
            },
            y: {
                formatter: function (val) {
                    return "$" + val + " thousands"
                }
            }
        },
        colors: ['#00A3FF', '#F1F1F2'],
        grid: {
            borderColor: '#87D4F9',
            strokeDashArray: 4,
            yaxis: {
                lines: {
                    show: true
                }
            }
        }
    };

    // {y: 65, fillColor: '#FF5733'}
    // options.series[0].color = '#FF5733';
    // options.series[0].data[5] = { y: 65, fillcolor: '#FF5733' };
    new ApexCharts(document.querySelector("#monthly_chart"), options).render();
});
</script>