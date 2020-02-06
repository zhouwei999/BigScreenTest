// 入口文件
import './index.scss'  
const $ = require('jquery');
const echarts = require('echarts'); 
require('datatables.net');

const common = require('./pages/js/common.js');
let scale = sessionStorage.getItem("scale")
 console.log(22,scale,common.scale)

 /*
// 地图部分
let colors = ["#035594", "#117aab", "#28a2b8", "#64c4c1", "#86cfbb"];
let infoMarker = [];  

var map = new AMap.Map('container', {
    mapStyle: 'amap://styles/f9dc19577b889055541eb1b760ef102a',
    features: ['bg', 'road'], //'point'
    center: [116.468537, 39.990434],
    zoom: 16,
    pitch: 55,
    // rotation: 35,
    viewMode: '3D'
});
  
// 设置光照
map.AmbientLight = new AMap.Lights.AmbientLight([1, 1, 1], 0.5);
map.DirectionLight = new AMap.Lights.DirectionLight([0, 0, 1], [1, 1, 1], 1);

var object3Dlayer = new AMap.Object3DLayer();
map.add(object3Dlayer);
    
let pathsArr = [
    // [
    //     [116.436342,39.978092],[116.435695,39.977086],[116.435587,39.977127],[116.435481,39.977168],[116.436128,39.978174],[116.43624,39.978131],[116.436342,39.978092],[116.436342,39.978092]
    // ],
    // [
    //     [116.391531, 39.922912],
    //     [116.401938, 39.923241],
    //     [116.402431, 39.913334],
    //     [116.398354, 39.913103],
    //     [116.398311, 39.912659],
    //     [116.396273, 39.912643],
    //     [116.396101, 39.913108],
    //     [116.392067, 39.912959]
    // ]
];
for(let i in area){  
    pathsArr.push(area[i].lnglat)  
}  console.log(pathsArr.length)
for(let i=0;i<500;i++){
    var bounds = pathsArr[i].map(function(path) { 
        return new AMap.LngLat(path[0], path[1]); 
    });

    var height = 3000;
    var color = colors[i % colors.length];//colors[i]; // rgba 
    var prism = new AMap.Object3D.Prism({
        path: bounds,
        height: height,
        color: color
    });
    //prism.transparent = true;
 
    let lngs = [];let lats = [];
    bounds.map(item=>{
        lngs.push(item.lng);
        lats.push(item.lat);
    })
    let lngmax = Math.max(...lngs); let lngmin = Math.min(...lngs)
    let latmax = Math.max(...lats); let latmin = Math.min(...lats) 

    let text = new AMap.Text({
        text: "一号" +i+ '</br>(' + 1200 + ')',
        verticalAlign: 'bottom',
        position: [lngmin+(lngmax-lngmin)/2, latmin+(latmax-latmin)/2],
        height: 5000,
        style: {
            'background-color': 'transparent', 
            'text-align': 'left',
            'border': 'none',
            'color': 'white',
            'font-size': '2rem',
            'font-weight': 600
        },  
    });

    text.on('click',ev=>{
        var pixel = ev.pixel;
        var px = new AMap.Pixel(pixel.x, pixel.y);
        var obj = map.getObject3DByContainerPos(px, [object3Dlayer], false) || {};

//     // 选中的 face 所在的索引
//     var index = obj.index;
//     // 选中的 object3D 对象，这里为当前 Mesh
//     var object = obj.object;
//     // 被拾取到的对象和拾取射线的交叉点的3D坐标
//     var point = obj.point;
//     // 交叉点距透视原点的距离
//     var distance = obj.distance;

        console.log(12,obj)
        console.log(ev)
        let boxDetail = new AMap.Text({
            text: '<div style="font-size: 2.2rem;font-weight: 100;padding: 0.5rem 1.8rem;display: inline-grid;border:0.4rem solid #26729F;background-color:rgba(13, 35, 94, 0.76);box-shadow:rgb(11, 234, 235) 0px 0px 18px inset;">'+
                  '<div>TBR六厂'+i+'</div>'+
                  '<div>用电量：<span style="color:#01D2F7">1366MW</span></div>'+
                  '<div>用气量：<span style="color:#01D2F7">1366t/h</span></div>'+
                  '<div>用水量：<span style="color:#01D2F7">1366t/h</span></div>'+
                  '<div>产量：<span style="color:#01D2F7">1366个</span></div>'+
                  '</div>',
            verticalAlign: 'bottom',
            position: [ev.lnglat.lng, ev.lnglat.lat],
            height: 5000,
            style: {
                'background-color': 'transparent',  
                'border': 'none',
                'color': 'white',
                'font-size': '2rem',
                'font-weight': 600
            }, 
            extData:{
                id:i
            }
        });
        
        infoMarker.push(boxDetail)
        if(infoMarker.length>1){
            for(let i=0;i<infoMarker.length;i++){
                if(i!=infoMarker.length-1){
                    map.remove(infoMarker[i]);
                }
            } 
        } 
        boxDetail.setMap(map);
    })
    
    text.setMap(map);

    object3Dlayer.add(prism);
}  
 
function updateMesh(obj) {
    var mesh = meshes.find(function (mesh) {
        return mesh == obj;
    });

    // 重置 Mesh 颜色
    meshes.forEach(function (mesh) {
        updateMeshColor(mesh, color);
    });

    // 更新选中 Mesh 的 vertexColors
    if (mesh) {
        updateMeshColor(mesh, selectColor);
    }

}
*/
function updateMeshColor(mesh, color) {
    var vertexColors = mesh.geometry.vertexColors;
    var len = vertexColors.length;
    for (var i = 0; i < len / 4; i++) {
        var r = color[0];
        var g = color[1];
        var b = color[2];
        var a = color[3];
        // 不能重新赋值，只允许修改内容
        vertexColors.splice(i * 4, 4, r, g, b, a);
    }

    mesh.needUpdate = true;
    mesh.reDraw();
}

// map.on('click', function(ev) {
//     var pixel = ev.pixel;
//     var px = new AMap.Pixel(pixel.x, pixel.y);
//     var obj = map.getObject3DByContainerPos(px, [object3Dlayer], false) || {};

//     // 选中的 face 所在的索引
//     var index = obj.index;
//     // 选中的 object3D 对象，这里为当前 Mesh
//     var object = obj.object;
//     // 被拾取到的对象和拾取射线的交叉点的3D坐标
//     var point = obj.point;
//     // 交叉点距透视原点的距离
//     var distance = obj.distance;

//     console.log(obj)
    
// })

initChart1();
initChart2();
initChart3();
initChart4();
initChart5();
// initChart6();
initChart7();
initChart8();
initChart9();
initChart10();
initWarningTable();

function showWarn(){
    $(".centerTable").show();
}

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
        // backgroundColor:'rgba(13, 35, 94, 0.2)',
        tooltip: {
            trigger: 'axis',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 25 * scale, 
            },
        },
        legend: {
            data: charts.names,
            textStyle: {
                fontSize: 25*scale,
                color: 'white', 
            },  
            left:'center',
        },
        grid: {
            top: '14%',
            left: '0',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: charts.lineX,
            axisLabel: {
                textStyle: {
                    color: 'white',
                    fontSize: 25*scale,
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
                    color: 'rgb(44,85,123,0.5)', 
                    width: 5 * scale 
                } 
            },
        },
        yAxis: { 
            type: 'value',
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: 'white',
                    fontSize: 25*scale,
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
                    color: 'rgb(44,85,123,0.5)', 
                    width: 5 * scale 
                }
            }
        },
        series: lineY
    }
 
    chart.setOption(option);
}

function initChart2(){
    // 图表数据
    let data = [{
            value: 909,
            name: '密炼'
        },
        {
            value: 1212,
            name: '四厂'
        },
        {
            value: 1612,
            name: '吴产'
        },
        {
            value: 1012,
            name: '六产'
        }
    ];
     
    // 初始化图表
    let chart = echarts.init(document.getElementById("chart2"));  
    let color = ['rgb(131,249,103)', '#FBFE27', '#FE5050', '#1DB7E5'] 
     
    let option = { 
        tooltip: {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)",
            textStyle: {
                fontWeight: 'normal',
                fontSize: 25 * scale, 
            },
        },
    
        visualMap: {
            show: false,
            min: 500,
            max: 600,
            inRange: {
                //colorLightness: [0, 1]
            }
        },
        series: [{ 
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            color: color, 
            data: data.sort(function(a, b) {
                return a.value - b.value
            }),
            roseType: 'radius',
    
            label: {
                normal: {
                    formatter: ['{a|{b}}', '{b|{d}%,{c} kWh}'].join('\n'),
                    rich: {
                        a: {
                            color: '#fff',
                            fontSize: 30*scale,
                            // fontWeight:'bold',
                            lineHeight: 20*scale
                        }, 
                        b: {
                            color: 'rgb(1,210,247)',
                            fontSize: 25*scale,
                            height: 30*scale
                        },
                    },
                } 
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: '#fff',
                    },
                    smooth: 0.2,
                    length: 10*scale,
                    length2: 20*scale,
    
                }
            },
            itemStyle: {
                normal: {
                    shadowColor: 'rgba(0, 0, 0, 0.8)',
                    shadowBlur: 50,
                }
            }
        }]
    };
 
    chart.setOption(option);
}

function initChart3(){
    // 图表数据
    let xData = function() {
        var data = [];
        for (var i = 0; i < 7; i++) {
            data.push('11-' + (22+i));
        }
        return data;
    }()
     
    // 初始化图表
    let chart = echarts.init(document.getElementById("chart3"));   
    let option = { 
        "tooltip": {
            "trigger": "axis",
            "axisPointer": {
                "type": "shadow",
                textStyle: {
                    color: "#fff"
                } 
            },
        },
        "grid": { 
            top: '14%',
            left: '0',
            right: '4%',
            bottom: '3%',
            containLabel: true,
            textStyle: {
                color: "#fff",
                // fontWeight: 'normal',
                fontSize: 25 * scale, 
            }
        },
        "legend": {
            x: '4%',
            top: '8%',
            left:'center',
            textStyle: {
                color: '#fff',
                fontSize: 25 * scale,
            },
            "data": ['煤', '天然气']
        }, 
        "calculable": true,
        "xAxis": [{
            "type": "category",
            axisLine: { 
                lineStyle: {
                    color: 'rgb(44,85,123,0.5)', 
                    width: 5 * scale 
                } 
            },
            "splitLine": {
                "show": false
            },
            "axisTick": {
                "show": false
            },
            "splitArea": {
                "show": false
            },
            "axisLabel": {
                "interval": 0,
                textStyle: {
                    color: 'white',
                    fontSize: 25*scale,
                }, 
            },
            "data": xData,
        }],
        "yAxis": [{
            "type": "value",
            "splitLine": {
                "show": false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgb(44,85,123,0.5)', 
                    width: 5 * scale 
                }
            },
            "axisTick": {
                "show": false
            },
            axisLabel: {
                "interval": 0,
                formatter: '{value}',
                textStyle: {
                    color: 'white',
                    fontSize: 25*scale,
                }
            }, 
            "splitArea": {
                "show": false
            },
    
        }], 
        "series": [{
                "name": "煤",
                "type": "bar",
                "stack": "总量",
                "barMaxWidth": 35*scale,
                "barGap": "10%",
                "itemStyle": {
                    "normal": {
                        "color": "#2B9FF8", 
                    }
                },
                "data": [
                    709,
                    1917,
                    2455, 
                    1719,
                    1433,
                    1544, 
                    2484, 
                ],
            },
    
            {
                "name": "天然气",
                "type": "bar",
                "barMaxWidth": 35*scale,
                "stack": "总量",
                "itemStyle": {
                    "normal": {
                        "color": "#FDBE03", 
                    }
                },
                "data": [
                    327,
                    1776,
                    507, 
                    800, 
                    204,
                    1390,  
                    220
                ]
            } 
        ]
    }
 
    chart.setOption(option);
}

function initChart4(){
    // 图表数据
    let xData = function() {
        var data = [];
        for (var i = 0; i < 7; i++) {
            data.push('11-' + (22+i));
        }
        return data;
    }()
     
    // 初始化图表
    let chart = echarts.init(document.getElementById("chart4"));   
    let option = { 
        "tooltip": {
            "trigger": "axis",
            "axisPointer": {
                "type": "shadow"
            },
            textStyle: {
                fontWeight: 'normal',
                fontSize: 25 * scale, 
            },
        },
        grid: { 
            top: '24%',
            left: '0',
            right: '10%',
            bottom: '8%',
            containLabel: true, 
        },
        "legend": { 
            right: '10%',
            bottom: '4%',
            top:'3%',
            textStyle: {
                color: '#fff',
                fontSize: 25 * scale,
            },
            data: ['半钢轮胎', '全钢轮胎'],
            itemWidth:10*scale,
            itemHeight:10*scale,
        },  
        "xAxis": [{
            "type": "category",
            data: xData,
            axisLine: {
                lineStyle: {
                    // color: 'rgba(255,255,255,0.3)',
                    width: 0 
                }
          },
          axisTick:{
            show:false
          },
          axisLabel: { 
            textStyle: {
              fontFamily: 'Microsoft YaHei',
              color:'#fff',
              fontSize: 23*scale,  // x轴字大小
            }
          }, 
        }],
        yAxis: {
            type: 'value', 
            axisLine: {
              show: false,
              lineStyle: {
                color: 'white',  
                // width: 1.3* scale,    
              }
            },
            axisTick:{
              show:false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(255,255,255,0.3)',
                width: 1.3* scale,  // 中间分割线粗细
              }
            }, 
            axisLabel: {  
                textStyle: {
                    color: 'white',
                    fontSize: 25*scale,
                }
            }, 
        }, 
        series: [{
            name: '半钢轮胎',
            type: 'bar',
            barWidth: '15%',
            barGap:'80%',
            itemStyle: {
              normal: {
                  color: '#1170E4', 
              },
            },
            "label": {
              "normal": {
                  "show": true,
                  "position": "top",
                  "formatter": "{c}",
                   color:'#fff',
                   fontSize: 23*scale,
              }, 
            },
            data: [400, 400, 300, 300, 300, 400, 400, 400, 300]
          },
          {
            name: '全钢轮胎',
            type: 'bar',
            barGap:'80%',
            barWidth: '15%',
            itemStyle: {
              normal: {
                   color: '#25ECED', 
              }
              
            },
            "label": {
              "normal": {
                  "show": true,
                  "position": "top",
                  "formatter": "{c}",
                   color:'#fff',
                   fontSize: 23*scale,
              }, 
            },
            data: [500, 400, 500, 500, 500, 400,400, 500, 500]
        }]
    };
   
    chart.setOption(option);
}

function initChart5(){
    // 图表数据
    let xData = function() {
        var data = [];
        for (var i = 0; i < 7; i++) {
            data.push('2019 11-' + (24+i));
        }
        return data;
    }()
     
    // 初始化图表
    let chart = echarts.init(document.getElementById("chart5"));   
    let option = { 
        "tooltip": {
            "trigger": "axis",
            "axisPointer": {
                "type": "shadow"
            },
            textStyle: {
                fontWeight: 'normal',
                fontSize: 25 * scale, 
            },
        },
        grid: { 
            top: '24%',
            left: '0',
            right: '10%',
            bottom: '8%',
            containLabel: true, 
        },
        "legend": { 
            right: '10%',
            bottom: '4%',
            top:'3%',
            textStyle: {
                color: '#fff',
                fontSize: 25 * scale,
            },
            data: ['半钢轮胎', '全钢轮胎'],
            itemWidth:20*scale,
            itemHeight:20*scale,
        },  
        "xAxis": [{
            "type": "category",
            data: xData,
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0)',
                    width: 0 
                }
          },
          axisTick:{
            show:false
          },
          axisLabel: { 
            textStyle: {
              fontFamily: 'Microsoft YaHei',
              color:'#fff',
              fontSize: 23*scale,  // x轴字大小
            }
          }, 
        }],
        yAxis: {
            type: 'value', 
            axisLine: {
              show: false,
              lineStyle: {
                color: 'white',  
                // width: 1.3* scale,    
              }
            },
            axisTick:{
              show:false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(255,255,255,0.3)',
                width: 1.3* scale,  // 中间分割线粗细
              }
            }, 
            axisLabel: {  
                textStyle: {
                    color: 'white',
                    fontSize: 25*scale,
                }
            }, 
        }, 
        series: [{
            name: '半钢轮胎',
            type: 'bar',
            barWidth: '15%',
            barGap:'80%',
            itemStyle: {
              normal: {
                  color: '#1170E4', 
              },
            },
            "label": {
              "normal": {
                  "show": true,
                  "position": "top",
                  "formatter": "{c}",
                   color:'#fff',
                   fontSize: 23*scale,
              }, 
            },
            data: [400, 400, 300, 300, 300, 400, 400, 400, 300]
          },
          {
            name: '全钢轮胎',
            type: 'bar',
            barGap:'80%',
            barWidth: '15%',
            itemStyle: {
              normal: {
                   color: '#25ECED', 
              }
              
            },
            "label": {
              "normal": {
                  "show": true,
                  "position": "top",
                  "formatter": "{c}",
                   color:'#fff',
                   fontSize: 23*scale,
              }, 
            },
            data: [500, 400, 500, 500, 500, 400,400, 500, 500]
        }]
    };
   
    chart.setOption(option);
}

function initChart6(){
    // 图表数据
    let xData = function() {
        var data = [];
        for (var i = 0; i < 7; i++) {
            data.push('2019 11-' + (24+i));
        }
        return data;
    }()
     
    // 初始化图表
    let chart = echarts.init(document.getElementById("chart6"));   
    let option = { 
        "tooltip": {
            "trigger": "axis",
            "axisPointer": {
                "type": "shadow"
            },
            textStyle: {
                fontWeight: 'normal',
                fontSize: 25 * scale, 
            },
        },
        grid: { 
            top: '24%',
            left: '0',
            right: '10%',
            bottom: '8%',
            containLabel: true, 
        },
        "legend": { 
            right: '10%',
            bottom: '4%',
            top:'3%',
            textStyle: {
                color: '#fff',
                fontSize: 25 * scale,
            },
            data: ['半钢轮胎', '全钢轮胎'],
            itemWidth:20*scale,
            itemHeight:20*scale,
        },  
        "xAxis": [{
            "type": "category",
            data: xData,
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0)',
                    width: 0 
                }
          },
          axisTick:{
            show:false
          },
          axisLabel: { 
            textStyle: {
              fontFamily: 'Microsoft YaHei',
              color:'#fff',
              fontSize: 23*scale,  // x轴字大小
            }
          }, 
        }],
        yAxis: {
            type: 'value', 
            axisLine: {
              show: false,
              lineStyle: {
                color: 'white',  
                // width: 1.3* scale,    
              }
            },
            axisTick:{
              show:false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(255,255,255,0.3)',
                width: 1.3* scale,  // 中间分割线粗细
              }
            }, 
            axisLabel: {  
                textStyle: {
                    color: 'white',
                    fontSize: 25*scale,
                }
            }, 
        }, 
        series: [{
            name: '半钢轮胎',
            type: 'bar',
            barWidth: '15%',
            barGap:'80%',
            itemStyle: {
              normal: {
                  color: '#1170E4', 
              },
            },
            "label": {
              "normal": {
                  "show": true,
                  "position": "top",
                  "formatter": "{c}",
                   color:'#fff',
                   fontSize: 23*scale,
              }, 
            },
            data: [400, 400, 300, 300, 300, 400, 400, 400, 300]
          },
          {
            name: '全钢轮胎',
            type: 'bar',
            barGap:'80%',
            barWidth: '15%',
            itemStyle: {
              normal: {
                   color: '#25ECED', 
              }
              
            },
            "label": {
              "normal": {
                  "show": true,
                  "position": "top",
                  "formatter": "{c}",
                   color:'#fff',
                   fontSize: 23*scale,
              }, 
            },
            data: [500, 400, 500, 500, 500, 400,400, 500, 500]
        }]
    };
   
    chart.setOption(option);
}

function initChart7(){
    // 图表数据
    let xData = function() {
        var data = [];
        for (var i = 0; i < 7; i++) {
            data.push('2019 11-' + (24+i));
        }
        return data;
    }()
     
    // 初始化图表
    let chart = echarts.init(document.getElementById("chart7"));   
    let option = { 
        "tooltip": {
            "trigger": "axis",
            "axisPointer": {
                "type": "shadow"
            },
            textStyle: {
                fontWeight: 'normal',
                fontSize: 25 * scale, 
            },
        },
        grid: { 
            top: '24%',
            left: '0',
            right: '10%',
            bottom: '8%',
            containLabel: true, 
        }, 
        "xAxis": [{
            "type": "category",
            data: xData,
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0)',
                    width: 0 
                }
          },
          axisTick:{
            show:false
          },
          axisLabel: { 
            textStyle: {
              fontFamily: 'Microsoft YaHei',
              color:'#fff',
              fontSize: 23*scale,  // x轴字大小
            }
          }, 
        }],
        yAxis: {
            type: 'value', 
            axisLine: {
              show: false,
              lineStyle: {
                color: 'white',  
                // width: 1.3* scale,    
              }
            },
            axisTick:{
              show:false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(255,255,255,0.3)',
                width: 1.3* scale,  // 中间分割线粗细
              }
            }, 
            axisLabel: {  
                textStyle: {
                    color: 'white',
                    fontSize: 25*scale,
                }
            }, 
        }, 
        series: [{ 
            type: 'bar', 
            barWidth: '20%',
            itemStyle: {
                normal: { 
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: 'rgba(0,244,255,1)'},
                            {offset: 1, color: 'rgba(0,77,167,1)'}
                        ]
                    )
                }
            },
            "label": {
              "normal": {
                  "show": true,
                  "position": "top",
                  "formatter": "{c}",
                   color:'#fff',
                   fontSize: 23*scale,
              }, 
            },
            data: [500, 400, 500, 500, 500, 400,400, 500, 500]
        }]
    };
   
    chart.setOption(option);
}

function initChart8(){
    // 图表数据 
    let xData = [];let rateData= [];
    for (var i = 0; i < 7; i++) {
        xData.push('2019 11-' + (24+i));
        rateData.push((300+i*Math.random()*300).toFixed(2))
    }  
     
    // 初始化图表
    let chart = echarts.init(document.getElementById("chart8"));   
    let option = { 
        tooltip: {
            "trigger": "axis",
            "axisPointer": {
                "type": "line"
            },
            lineStyle:{
                width:5*scale
            },
            textStyle: {
                fontWeight: 'normal',
                fontSize: 25 * scale, 
            },
        },
        grid: { 
            top: '24%',
            left: '0',
            right: '10%',
            bottom: '8%',
            containLabel: true, 
        },  
        tooltip: {
            trigger: 'axis', 
            axisPointer: {
                type: 'shadow',
                label: {
                    show: true,
                    backgroundColor: '#7B7DDC'
                }
            }
        },
        "legend": { 
            left: 'center',
            bottom: '4%',
            top:'3%',
            textStyle: {
                color: '#fff',
                fontSize: 25 * scale,
            },
            data: ['蒸汽', '负荷'],
            itemWidth:20*scale,
            itemHeight:20*scale,
        },  
        xAxis: [{
            "type": "category",
            data: xData,
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0)',
                    width: 0 
                }
            },
            axisTick:{
                show:false
            },
            axisLabel: { 
                textStyle: {
                    fontFamily: 'Microsoft YaHei',
                    color:'#fff',
                    fontSize: 23*scale,  // x轴字大小
                }
            }, 
        }],
        yAxis: [{
            name: '单位：t',
            nameTextStyle:{
                fontSize:23*scale,
                fontWeight:'normal',
                lineHeight:56*scale
            },
            type: 'value', 
            axisLine: {
              show: false,
              lineStyle: {
                color: 'white',  
                // width: 1.3* scale,    
              }
            },
            axisTick:{
              show:false
            },
            splitLine: {
              show: false, 
            }, 
            axisLabel: {  
                textStyle: {
                    color: 'white',
                    fontSize: 25*scale,
                }
            }, 
        },{
            name: '单位：GT',
            nameTextStyle:{
                fontSize:23*scale,
                fontWeight:'normal',
                lineHeight:56*scale
            },
            type: 'value', 
            axisLine: {
              show: false,
              lineStyle: {
                color: 'white',  
                // width: 1.3* scale,    
              }
            },
            axisTick:{
              show:false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(255,255,255,0.3)',
                width: 1.3* scale,  // 中间分割线粗细
              }
            }, 
            axisLabel: {  
                textStyle: {
                    color: 'white',
                    fontSize: 25*scale,
                }
            }, 
        }], 
        series: [{
            name: '蒸汽',
            type: 'line',
            smooth: true, 
            yAxisIndex: 1,
            itemStyle: {
                    normal: {
                    color:'#DDF776'
                },
            },
            data: rateData
        },{ 
            name: '负荷',
            type: 'bar', 
            barWidth: '15%',
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: 'rgba(0,244,255,1)'},
                            {offset: 1, color: 'rgba(0,77,167,1)'}
                        ]
                    )
                } 
            },
            data: [500, 400, 500, 500, 500, 400,400]
        }]
    };
   
    chart.setOption(option);
}

function initChart9(){
    // 图表数据
    let xData = function() {
        var data = [];
        for (var i = 0; i < 6; i++) {
            data.push('11-' + (22+i));
        }
        data.push('11-29(今天)');
        return data;
    }()
     
    // 初始化图表
    let chart = echarts.init(document.getElementById("chart9"));   
    let option = { 
        "tooltip": {
            "trigger": "axis",
            "axisPointer": {
                "type": "shadow"
            },
            textStyle: {
                fontWeight: 'normal',
                fontSize: 25 * scale, 
            },
        },
        grid: { 
            top: '24%',
            left: '0',
            right: '10%',
            bottom: '8%',
            containLabel: true, 
        }, 
        "xAxis": [{
            interval:1,
            "type": "category",
            data: xData,
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0)',
                    width: 0 
                }
          },
          axisTick:{
            show:false
          },
          axisLabel: { 
            textStyle: {
              fontFamily: 'Microsoft YaHei',
              color:'#fff',
              fontSize: 23*scale,  // x轴字大小
            }
          }, 
        }],
        yAxis: {
            type: 'value', 
            axisLine: {
              show: false,
              lineStyle: {
                color: 'white',  
                // width: 1.3* scale,    
              }
            },
            axisTick:{
              show:false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(255,255,255,0.3)',
                width: 1.3* scale,  // 中间分割线粗细
              }
            }, 
            axisLabel: {  
                textStyle: {
                    color: 'white',
                    fontSize: 25*scale,
                }
            }, 
        }, 
        series: [{ 
            type: 'bar', 
            barWidth: '20%',
            itemStyle: {
                normal: {
                    barBorderRadius: 15*scale,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#27AEF6'},
                            {offset: 1, color: '#6455F1'}
                        ]
                    )
                }
            },
            "label": {
              "normal": {
                  "show": true,
                  "position": "top",
                  "formatter": "{c}",
                   color:'#fff',
                   fontSize: 23*scale,
              }, 
            },
            data: [500, 400, 500, 500, 500, 400,400]
        }]
    };
   
    chart.setOption(option);
}

function initChart10(){
    // 图表数据
    let xData = function() {
        var data = [];
        for (var i = 0; i < 6; i++) {
            data.push('11-' + (22+i));
        }
        data.push('11-29(今天)');
        return data;
    }()
     
    // 初始化图表
    let chart = echarts.init(document.getElementById("chart10"));   
    let option = {  
        grid: { 
            top: '24%',
            left: '0',
            right: '10%',
            bottom: '8%',
            containLabel: true, 
        }, 
        "xAxis": [{
            interval:1,
            "type": "category",
            data: xData,
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0)',
                    width: 0 
                }
          },
          axisTick:{
            show:false
          },
          axisLabel: { 
            textStyle: {
              fontFamily: 'Microsoft YaHei',
              color:'#fff',
              fontSize: 23*scale,  // x轴字大小
            }
          }, 
        }],
        yAxis: {
            name: '单位：t',
            nameTextStyle:{
                fontSize:23*scale,
                fontWeight:'normal',
                lineHeight:56*scale
            },
            type: 'value', 
            axisLine: {
              show: false,
              lineStyle: {
                color: 'white',  
                // width: 1.3* scale,    
              }
            },
            axisTick:{
              show:false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(255,255,255,0.3)',
                width: 1.3* scale,  // 中间分割线粗细
              }
            }, 
            axisLabel: {  
                textStyle: {
                    color: 'white',
                    fontSize: 25*scale,
                }
            }, 
        }, 
        series:  [{ 
            type: 'pictorialBar',
            symbolSize: [35*scale, 16*scale],
            symbolOffset: [0, -10*scale],
            z: 12,
            itemStyle: {
                normal: {
                    color: '#14b1eb'
                }
            },
            data: [{
                value: 100,
                symbolPosition: 'end'
            }, {
                value: 50,
                symbolPosition: 'end'
            }, {
                value: 20,
                symbolPosition: 'end'
            }]
        }, { 
            type: 'pictorialBar',
            symbolSize: [35*scale, 16*scale],
            symbolOffset: [0, 10*scale],
            z: 12,
            itemStyle: {
                normal: {
                    color: '#14b1eb'
                }
            },
            data: [100, 50, 20]
        }, { 
            type: 'pictorialBar',
            symbolSize: [55*scale, 22*scale],
            symbolOffset: [0, 15*scale],
            z: 11,
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderColor: '#14b1eb',
                    borderWidth: 5
                }
            },
            data: [100, 50, 20]
        }, { 
            type: 'pictorialBar',
            symbolSize: [80*scale, 30*scale],
            symbolOffset: [0, 20*scale],
            z: 10,
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderColor: '#14b1eb',
                    borderType: 'dashed',
                    borderWidth: 5
                }
            },
            data: [100, 50, 20]
        }, {
            type: 'bar',
            itemStyle: {
                normal: {
                    color: '#14b1eb',
                    opacity: .7
                }
            },
            silent: true,
            barWidth: 35*scale,
            barGap: '-100%', // Make series be overlap
            data: [100, 50, 20]
        } 
        ]   
    };
   
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