var e = getApp();

console.log(e.globalData);

var t, s, a;
var o = e.globalData;
wx.getSystemInfo({
  success: function (e) {
    console.log(e.system), console.log(e.model), console.log(e.pixelRatio), console.log(e.windowWidth),
      console.log(e.windowHeight), console.log(e.language), console.log(e.version), console.log(e.platform),
      a = e.windowWidth, t = e.model, s = e.system;
  }
}), 
Page({
  data: {
    viewResult: null,
    testItems: []
  },
  onLoad: function (a) {
    var maps = {
      viewResult: '视力检测', //视力值
      semangResult: '色盲检测', // 色盲
      sanguangResult: '散光检测', // 散光
      huangbanResult: '黄斑检测', // 眼底黄斑
      laohuaResult: '老花检测', // 老花
    };
    var resultArr = [], viewResult;
    for (let key in o.resultItems) {
      resultArr.push({
        label: maps[key],
        value: o.resultItems[key] || '未检测'
      });
      if (key == 'viewResult') {
        viewResult = o.resultItems[key] || '未检测';
      }
    };
  
    this.setData({
      testItems: resultArr,
      viewResult
    });
  },
  onUnload: function() {
    wx.reLaunch({
      url: '../index/index',
    });
  },
  
  onShareAppMessage: function (options) {
    var that = this;
    var shareObj = { 
      title: "转发的标题",        // 默认是小程序的名称(可以写slogan等)
      path: '/pages/share/share',        // 默认是当前页面，必须是以‘/’开头的完整路径
      imageUrl: '',  
      success: function (res) {
        // 转发成功之后的回调
        if (res.errMsg == 'shareAppMessage:ok') {
        }
      },
      fail: function () {
        // 转发失败之后的回调
        if (res.errMsg == 'shareAppMessage:fail cancel') {
          // 用户取消转发
        } else if (res.errMsg == 'shareAppMessage:fail') {
          // 转发失败，其中 detail message 为详细失败信息
        }
      }, 
      complete: function(){
        // 转发结束之后的回调（转发成不成功都会执行）
      }
    };
　　// 返回shareObj
　　return shareObj;
  }
    

});