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
   
export {
    scale,
    pageResize
}