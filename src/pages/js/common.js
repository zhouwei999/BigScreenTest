const $ = require('jquery');

const defaultValue = {
    designW: 6150,  // 设计图宽度
    designH: 1590,  // 设计图高度
}

let scale = 1; // 縮放大小
let [pageH, pageW] = [$(window).height(), $(window).width()]  // 页面显示的宽高
 
// 页面缩放 
function pageResize() {
    [pageH, pageW] = [$(window).height(), $(window).width()];
    let isWider = pageW/pageH  >  defaultValue.designW/defaultValue.designH;
    let [scaleW, scaleH] = [pageW/defaultValue.designW, pageH/defaultValue.designH];  // 长宽缩放比例
 
    scale = isWider ? scaleH : scaleW;
    $("html").css("font-size", scale*16 + "px");

    console.log(1,pageH, pageW,scale,defaultValue)
}

// 获取指定坐标中间点
function getCenter(paths){ 
    let lngs = [];let lats = [];
    paths.map(item=>{
        lngs.push(item[0]);
        lats.push(item[1]);
    })
    let lngmax = Math.max(...lngs); let lngmin = Math.min(...lngs)
    let latmax = Math.max(...lats); let latmin = Math.min(...lats) 
  
    return {lng:(lngmax+lngmin)/2,lat:(latmax+latmin)/2}
}
 
// 未来七天天气
function get7Weather(){
    let data = [];
    $.ajax({
        type: 'post',
        url: 'http://route.showapi.com/9-9',
        dataType: 'json',
        async: false,
        data: {
            // "showapi_timestamp": formatterDateTime(),
            "showapi_appid": 27292,
            "showapi_sign": '829aecc822384203adc70d2c4853f5e3',
            "areaid": "", 
            "area": '常州',//北京
        },
        error: function (XmlHttpRequest, textStatus, errorThrown) {
            console.log("未来15天天气数据获取失败!");
        },
        success: function (result) { 
            data = result['showapi_res_body']['dayList'];
        }
    });
    return data;
}
   
export {
    scale,
    pageResize,
    getCenter,
    get7Weather
}