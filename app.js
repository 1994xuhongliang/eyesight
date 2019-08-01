//app.js
var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
  return typeof e;
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

App({
  onLaunch: function (o) {
    console.log('start it...');
    console.log(o);
    var t = wx.getStorageSync("user") || {};
    if ("object" == (void 0 === t ? "undefined" : e(t)) && !t.openid && (t.expires_in || Date.now()) < Date.now() + 100) {
      var a = this;
      wx.login({
        success: function (e) {
          var o = a.globalData.wxData, t = "https://api.weixin.qq.com/sns/jscode2session?appid=" + o.appId + "&secret=" + o.appSecret + "&js_code=" + e.code + "&grant_type=authorization_code";
          wx.request({
            url: t,
            data: {},
            method: "GET",
            success: function (e) {
              var o = {};
              o.openid = e.data.openid, console.log("根据logincode 返回的sessionkey"), console.log(e.data),
                o.expires_in = Date.now() + e.data.expires_in, wx.setStorageSync("user", o);
            }
          });
          var n = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=" + o.appId + "&secret=" + o.appSecret;
          wx.request({
            url: n,
            method: "GET",
            data: {},
            success: function (e) {
              var o = {};
              o = e.data, console.log("获取token"), console.log(getApp().globalData.wxData), getApp().globalData.wxData.token = o.access_token,
                console.log("token测试值"), console.log(getApp().globalData.wxData);
            }
          });
        }
      });
    } else console.log(t);
  },
  onShow: function () { },
  onHide: function () {
    console.log("App Hide");
  },
  globalData: {
    wxData: {
      appId: "wxff78cd630b920a74",
      appSecret: "f11b23b26399a778cf67533823411882",
      token: ""
    },
    resultItems: {
      viewResult: null, //视力值
      semangResult: null, // 色盲
      sanguangResult: null, // 散光
      huangbanResult: null, // 眼底黄斑
      laohuaResult: null, // 老花
    }
  }
});