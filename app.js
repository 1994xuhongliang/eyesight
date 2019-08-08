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
    var a=this;
    wx.login({
      success: function (e) {
        var o = a.globalData.userData,t="http://zmc-vital.com/wechat/gate/loginWithoutAuth"
        wx.request({
          url: t,
          data: {
            name:"eyesight",
            code:e.code
          },
          method: "POST",
          success: function (e) {
            console.log("login",e);
            o.id=e.data.id;
            o.session=e.data.session_key;
            o.auth=e.data.auth;
          }
        });

        // var o = a.globalData.wxData, t = "https://api.weixin.qq.com/sns/jscode2session?appid=" + o.appId + "&secret=" + o.appSecret + "&js_code=" + e.code + "&grant_type=authorization_code";
        // wx.request({
        //   url: t,
        //   data: {},
        //   method: "GET",
        //   success: function (e) {
        //     var o = {};
        //     o.openid = e.data.openid, console.log("根据logincode 返回的sessionkey",e),
        //       o.expires_in = Date.now() + e.data.expires_in;
        //   }
        // });
        // var n = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=" + o.appId + "&secret=" + o.appSecret;
        // wx.request({
        //   url: n,
        //   method: "GET",
        //   data: {},
        //   success: function (e) {
        //     var o = {};
        //     o = e.data, console.log("获取token",e), console.log(getApp().globalData.wxData), getApp().globalData.wxData.token = o.access_token,
        //       console.log("token测试值"), console.log(getApp().globalData.wxData);
        //   }
        // });
      }
    });
  },
  onShow: function () {},
  onHide: function () {
    console.log("App Hide");
  },
  globalData: {

    // wxData: {
    //   appId: "wxbff2a87fd6d3a6fc",
    //   appSecret: "b1c9bec5bb955a21495eddd8ef8708d9",
    //   token: ""
    // },
    miniName:"eyesight",
    userData:{
      id:1,
      session:null,
      auth:null,
      phoneNumber:null,
      eyesight:null
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