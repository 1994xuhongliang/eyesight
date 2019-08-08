//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    directionData: ["up", "right", "down", "left"],
    showCanNotSignToast: false,
  },
  getPhoneNumber (e) {
    console.log(e);
    if(e.detail.iv&&e.detail.encryptedData){
      //用户同意
      var id=app.globalData.userData.id,session=app.globalData.userData.session,t="http://zmc-vital.com/wechat/gate/getPhoneNumber";
      wx.request({
        url: t,
        data: {
          name:"eyesight",
          id:id,
          session:session,
          iv:e.detail.iv,
          encryptedData:e.detail.encryptedData
        },
        method: "POST",
        success: function (e) {
          console.log(e);
        }
      });
    }
  },
  startTest: function () {
    wx.navigateTo({
      url: "../about/about"
    });
  },
  goDailySign: function () {
    let testResult = app.globalData && app.globalData.resultItems,
      eyeSight = app.globalData && app.globalData.userData && app.globalData.userData.eyeSight;
    if (eyeSight) {
     return wx.navigateTo({
        url: "../dailySign/dailySign"
      });
    }
    this.setData({
      showCanNotSignToast: true
    });
  },

  /**
   * 关闭提示测试再打卡弹窗
   */
  closeCanNotSignToast: function() {
    this.setData({
      showCanNotSignToast: false
    });
  },

  /**
   * 弹窗，去测试
   */
  goTestPage: function() {
    wx.navigateTo({
      url: "../test/test"
    });
  },

  onLoad: function () {
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
