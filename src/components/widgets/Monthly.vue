<template>
    <div>
        <div id="monthly_chart"></div>
    </div>
</template>

<script setup>
import { onMounted, ref, defineProps } from 'vue';
import ApexCharts from 'apexcharts';
import axios from 'axios';

const props = defineProps(['userId']);
const userId = props.userId;

const categoriesDate = [];
const monthlyExpenses = ref([0, 0, 0, 0, 0, 0]);

const createCategories = () => {
    const date = new Date();
    let currentMonth = date.getMonth() + 1;

    categoriesDate.push({ year: date.getFullYear(), month: currentMonth });
    let monthList = [currentMonth + '월'];

    for (let i = 0; i < 5; i++) {
        currentMonth -= 1;
        if (currentMonth == 0) {
            currentMonth = 12;
            categoriesDate.unshift({ year: date.getFullYear() - 1, month: currentMonth });
        } else {
            categoriesDate.unshift({ year: date.getFullYear(), month: currentMonth });
        }

        monthList.unshift(currentMonth + '월');
    }

    return monthList;
};
const categories = createCategories();
const addComma = (number) => {
    return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
}

onMounted(() => {
    const setMonthlyData = async () => { // 사용자의 모든 거래 일자
        const BASE_URL = "http://localhost:3000";
        const response = await axios.get(BASE_URL + '/personalHistory' + '?userId=' + userId);

        for (let i = 0; i < 6; i++) {
            response.data.forEach(element => {
                const elementYear = Number(element.date.split('-')[0]);
                const elementMonth = Number(element.date.split('-')[1]);

                if (elementYear == categoriesDate[i].year && elementMonth == categoriesDate[i].month) {
                    if (element.type == "지출") {
                        monthlyExpenses.value[i] += element.amount;
                    }
                }
            });
        }

        var options = {
            series: [{
                name: 'Net Profit',
                data: monthlyExpenses.value,
            }, {
                name: 'Revenue',
                data: monthlyExpenses.value,
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'bar',
                height: 400,
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
                    },
                    formatter: function (val) {
                        return addComma(val) + "원";
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
                        return addComma(val) + "원";
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

        new ApexCharts(document.querySelector("#monthly_chart"), options).render();
    }
    setMonthlyData();
});
</script>