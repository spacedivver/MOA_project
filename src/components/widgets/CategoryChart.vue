<template>
    <div class="category-chart" ref="categoryChart">
    </div>
</template>
<script>
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5radar from "@amcharts/amcharts5/radar";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import axios from "axios";

export default {
    name: 'CategoryChart',
    props: {
        userId: String // vue2에서의 props
    },
    mounted() {
        const setMonthlyData = async () => { // 사용자의 카테고리별 소비 총액
            console.log("userId: " + this.userId);

            const BASE_URL = "http://localhost:3000";
            const response = await axios.get(BASE_URL + '/personalHistory' + '?userId=' + this.userId);

            const categoryAmount = [
                {category: '여행', amount: 0},
                {category: '쇼핑', amount: 0},
                {category: '문화', amount: 0},
                {category: '교통', amount: 0},
                {category: '숙박', amount: 0},
                {category: '식사', amount: 0},
                {category: '케이터링', amount: 0}
            ];
            const colors = ['#7239EA', '#F1416C', '#00A3FF', '#50CD89', '#FF8040']; // 최고 지출 top5
            const data = [];

            const date = new Date();
            const currentYear = date.getFullYear();
            const currentMonth = date.getMonth() + 1;

            response.data.forEach(element => {
                const elementYear = Number(element.date.split('-')[0]);
                const elementMonth = Number(element.date.split('-')[1]);

                if (elementYear == currentYear && elementMonth == currentMonth && element.type == "지출") { // 이번달 지출 카테고리 데이터
                    for (let i = 0; i < categoryAmount.length; i++) {
                        if (categoryAmount[i].category == element.category) {
                            categoryAmount[i].amount += element.amount;
                        }
                    }
                }
            });
            
            categoryAmount.sort((a, b) => b.amount - a.amount);
            const totalAmount = categoryAmount.reduce((acc, cur) => acc + cur.amount, 0);

            for (let i = 0; i < 5; i++) {
                data.push(
                    {
                        category: categoryAmount[i].category,
                        value: parseInt(categoryAmount[i].amount / totalAmount * 100) * 2,
                        full: 100,
                        columnSettings: {
                            fillOpacity: 1,
                            fill: am5.color(colors[i]),
                        },
                    }
                )
            }

            // Create root element
            let root = am5.Root.new(this.$refs.categoryChart);
            // Set themes
            root.setThemes([am5themes_Animated.new(root)]);

            // am5.ready(function () {
            // Create chart
            // https://www.amcharts.com/docs/v5/charts/radar-chart/
            var chart = root.container.children.push(
                am5radar.RadarChart.new(root, {
                    panX: false,
                    panY: false,
                    wheelX: "panX",
                    wheelY: "zoomX",
                    innerRadius: am5.percent(20),
                    startAngle: -90,
                    endAngle: 180,
                })
            );

            // Add cursor
            // https://www.amcharts.com/docs/v5/charts/radar-chart/#Cursor
            // var cursor = chart.set(
            //     "cursor",
            //     am5radar.RadarCursor.new(root, {
            //         behavior: "zoomX",
            //     })
            // );

            // cursor.lineY.set("visible", false);

            // Create axes and their renderers
            // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_axes
            var xRenderer = am5radar.AxisRendererCircular.new(root, {
                //minGridDistance: 50
            });

            xRenderer.labels.template.setAll({
                radius: 10
            });

            xRenderer.grid.template.setAll({
                forceHidden: true,
            });

            var xAxis = chart.xAxes.push(
                am5xy.ValueAxis.new(root, {
                    renderer: xRenderer,
                    min: 0,
                    max: 100,
                    strictMinMax: true,
                    numberFormat: "#'%'",
                    tooltip: am5.Tooltip.new(root, {})
                })
            );

            xAxis.get("renderer").labels.template.setAll({
                fill: am5.color('#EBEBEB'),
                fontWeight: "500",
                fontSize: 16,
            });

            var yRenderer = am5radar.AxisRendererRadial.new(root, {
                minGridDistance: 20,
            });

            yRenderer.labels.template.setAll({
                centerX: am5.p100,
                fontWeight: "500",
                fontSize: 18,
                fill: am5.color('#EBEBEB'),
                templateField: "columnSettings",
            });

            yRenderer.grid.template.setAll({
                forceHidden: true,
            });

            var yAxis = chart.yAxes.push(
                am5xy.CategoryAxis.new(root, {
                    categoryField: "category",
                    renderer: yRenderer,
                })
            );

            yAxis.data.setAll(data);

            // Create series
            // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_series
            var series1 = chart.series.push(
                am5radar.RadarColumnSeries.new(root, {
                    xAxis: xAxis,
                    yAxis: yAxis,
                    clustered: false,
                    valueXField: "full",
                    categoryYField: "category",
                    fill: root.interfaceColors.get("alternativeBackground"),
                })
            );

            series1.columns.template.setAll({
                width: am5.p100,
                fillOpacity: 0.08,
                strokeOpacity: 0,
                cornerRadius: 20,
            });

            series1.data.setAll(data);

            var series2 = chart.series.push(
                am5radar.RadarColumnSeries.new(root, {
                    xAxis: xAxis,
                    yAxis: yAxis,
                    clustered: false,
                    valueXField: "value",
                    categoryYField: "category",
                })
            );

            series2.columns.template.setAll({
                width: am5.p100,
                strokeOpacity: 0,
                tooltipText: "{category}: {valueX}%",
                cornerRadius: 20,
                templateField: "columnSettings",
            });

            series2.data.setAll(data);

            // Animate chart and series in
            // https://www.amcharts.com/docs/v5/concepts/animations/#Initial_animation
            series1.appear(1000);
            series2.appear(1000);
            chart.appear(1000, 100);
        }
        setMonthlyData();
    }
}
</script>

<style scoped>
.category-chart {
    width: 100%;
    height: 400px;
    /* 원하는 높이로 설정하세요 */
}
</style>