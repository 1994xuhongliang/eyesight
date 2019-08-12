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
        var o = a.globalData.userData,t="https://wechat.zmc-vital.com/gate/loginWithoutAuth"
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

            ///////得到测试信息
            var tt="https://wechat.zmc-vital.com/eyesight/getEyeSight"
            wx.request({
              url: tt,
              data: {
                id:o.id,
                auth:o.auth
              },
              method: "POST",
              success: function (e) {
                console.log("get eyesight")
                o.eyeSight=e.data.eyeSight;
              }
            })
          }
        });
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
      eyeSight:null
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