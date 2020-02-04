// 入口文件
import './index.scss'  
const $ = require('jquery');
const echarts = require('echarts'); 
require('datatables.net');

const common = require('./pages/js/common.js');
 console.log(22,common.scale)
// 地图部分
// let colors = ["#035594", "#117aab", "#28a2b8", "#64c4c1", "#86cfbb"];
  
// var map = new AMap.Map('container', {
//     mapStyle: 'amap://styles/f9dc19577b889055541eb1b760ef102a',
//     features: ['point','bg', 'road'],
//     center: [116.468537, 39.990434],
//     zoom: 14,
//     pitch: 80,
//     viewMode: '3D'
// });
  
// var layer = new Loca.PolygonLayer({
//     map: map,
//     fitView: false
// });

// layer.setData(area, {
//     lnglat: 'lnglat'
// });

// layer.setOptions({
//     style: {
//         opacity: 1,
//         color: function (res) {
//             var index = res.index;
//             return colors[index % colors.length];
//         },
//         height: function () {
//             return Math.random() * 500 + 100;
//         }
//     }
// });

// layer.render();

initChart1();
initWarningTable();

// 图表部分
function initChart1(){
    // 图表数据
    let lineXValue = [];
    for(let i=1;i<13;i++){
        lineXValue.push(2*i+":00")
    } 
    let charts = { 
        names: ['燃煤机组', '太阳能','购电'],
        lineX: lineXValue,
        value: [
            [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 260, 280],
            [220, 182, 191, 210, 230, 270, 270,201, 154, 140, 240, 250],
            [150, 232, 201, 154, 190, 180, 210,150, 182, 201, 154, 190]
        ]

    }
    
    // 初始化图表
    let chart = echarts.init(document.getElementById("chart1"));  

    let color = ['rgba(23, 255, 243', 'rgba(119,61,190','rgba(252,230,48']
    let lineY = [] 
    for (let i = 0; i < charts.names.length; i++) {
        let x = i
        if (x > color.length - 1) {
            x = color.length - 1
        }
        let data = {
            name: charts.names[i],
            type: 'line',
            color: color[x] + ')',
            smooth: true,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: color[x] + ', 0.3)'
                    }, {
                        offset: 0.8,
                        color: color[x] + ', 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 200   // 折现下面延伸的阴影范围
                }
            },
            symbol: 'circle',
            symbolSize: 3,
            data: charts.value[i]
        }
        lineY.push(data)
    }
 
    let option = {
        backgroundColor:'rgba(13, 35, 94, 0.2)',
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: charts.names,
            textStyle: {
                fontSize: 12,
                color: 'white'
            },
            right: '4%'
        },
        grid: {
            top: '14%',
            left: '1%',
            right: '4%',
            bottom: '8%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: charts.lineX,
            axisLabel: {
                textStyle: {
                    color: 'white'
                },   
                formatter: function(params) {
                    return params.split(' ')[0] 
                }
            },
            axisTick:{
                show:false
            },
            axisLine: { 
                lineStyle: {
                color: 'rgb(0,253,255,0.6)'
                }, 
            },
        },
        yAxis: { 
            type: 'value',
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: 'white'
                }
            },
            splitLine: {
                show:false
            },
            axisTick:{
                show:false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgb(0,253,255,0.6)'
                }
            }
        },
        series: lineY
    }
 
    chart.setOption(option);
}


// 告警列表
function initWarningTable() { 
    let warningData = [{name:'學校11',remark:"xxx",value:"123",level:"1",updateTime:"2019,23,22 00:00:00"},
        {name:'學校22',remark:"xxx",value:"123",level:"1",updateTime:"2019,23,22"},
        {name:'學校',remark:"xxx",value:"123",level:"1",updateTime:"2019,23,22"},
        {name:'學校',remark:"xxx",value:"123",level:"1",updateTime:"2019,23,22"},
        {name:'學校',remark:"xxx",value:"123",level:"1",updateTime:"2019,23,22"}]; 
    $('#warningTable').DataTable({
        data: warningData,
        destroy: true,
        // scrollCollapse: true,
        info: false,
        lengthChange: false,
        paging: false,
        searching: false,
        ordering: false,
        fixedHeader: true,
        serverSide: false,
        columns: [
            {
                title: '告警来源',
                data: "name",
                width: "21%",
                render: function (data, type, row, meta) {
                    if (row.serialNo === "*") {
                        return "全网";
                    } else {
                        return row.name;
                    }
                },
            }, {
                title: '告警内容',
                data: "remark",
                width: "18%",
                render: function (data, type, row, meta) {
                    return "<span title='" + data + "'>" + data.substring(0, 5) + "</span>";
                },
            }, {
                title: '异常值',
                data: "value",
                width: "15%",
            }, {
                title: '告警等级',
                data: "level",
                width: "18%",
                render: function (data, type, row, meta) {
                    if (data == 1) {
                        return "<div style='width:100%;text-align: center;'><div style='display: inline-block;width: 4.5rem;line-height: 3rem;color: #fff;text-align: center;background: #F8B356; border-radius: 0.3rem;font-weight: bold;'>一</div></div>"
                    } else if (data == 2) {
                        return "<div style='width:100%;text-align: center;'><div style='display: inline-block;width: 4.5rem;line-height: 3rem;color: #fff;text-align: center;background: #F8B356; border-radius: 0.3rem;font-weight: bold;'>二</div></div>"
                    } else if (data == 3) {
                        return "<div style='width:100%;text-align: center;'><div style='display: inline-block;width: 4.5rem;line-height: 3rem;color: #fff;text-align: center;background: #F8B356; border-radius: 0.3rem;font-weight: bold;'>三</div></div>"
                    } else if (data == 4) {
                        return "<div style='width:100%;text-align: center;'><div style='display: inline-block;width: 4.5rem;line-height: 3rem;color: #fff;text-align: center;background: #F8B356; border-radius: 0.3rem;font-weight: bold;'>四</div></div>"
                    }
                },

            }, {
                title: '生成时间',
                data: "updateTime",
                width: '28%',
            },
        ],
        columnDefs: [
            {
                "defaultContent": "-",
                "targets": "_all"
            }/*, {
                targets: [1, 2, 3, 4],
                render: function (data, type, row, meta) {
                    if (data || data == 0) {//data==undefined or null or NaN
                        return Number(data).toFixed(1);
                    }
                }
            }, {
                targets: [5, 6],
                render: function (data, type, row, meta) {
                    if (data || data == 0) {
                        return Number(data).toFixed(2);
                    }
                }
            },*/
        ],
        onInitComplete: function () {
            this.fnAdjustColumnSizing(true);
            $(window).resize(function () {
                this.columns.adjust().draw();
            });
        }
    });  
}