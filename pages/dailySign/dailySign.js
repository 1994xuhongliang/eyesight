// pages/dailySign/dailySign.js

const app = getApp(),
global = app.globalData;
console.log('global: ', global);

const mapWeek = {
  1: '周一',
  2: '周二',
  3: '周三',
  4: '周四',
  5: '周五',
  6: '周六',
  7: '周日'
};

const signData = [
  {
    date: '2019-08-02'
  },
  {
    date: '2019-08-03'
  },
  {
    date: '2019-08-04'
  },
];

Page({

  /**
   * 页面的初始数据
   */
  data: {
    weeks: ['日', '一', '二', '三', '四', '五', '六'],
    signStatus: true, // 今日是否打卡，暂无用
    today: {}, // 当天日期数据
    sign_count: 0, // 累计打卡
    showSignToast: false, // 是否展示10， 15， 30弹窗
    showSignImage: false, // 是否展示图片弹窗
    sign_image_url: '', //打卡成功的图片弹窗url
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let today = {}, calendarData=[];
    let date = new Date();
    today = {
      week: mapWeek[date.getDay()],
      date: String(date.getDate()).padStart(2, '0'),
      year_month: (date.getMonth() + 1) + '月 ' + date.getFullYear()
    };

    let that = this;

    wx.showLoading({
      title: 'loading...',
    });
    wx.request({
      url: 'https://wechat.zmc-vital.com/eyesight/check',
      data: {
        id: global && global.userData && global.userData.id,
        auth: global && global.userData && global.userData.auth
      },
      method: "POST",
      success: function (res) {
        console.log(res);
        wx.hideLoading();
        let sign_count = res.data && res.data.sign_count,
          sign_image_url = res.data && res.data.sign_image,
          showSignToast = [10, 15, 30].includes(sign_count),
          showSignImage = ![10, 15, 30].includes(sign_count);

        // 将请求回来的数据设置到页面
        that.setData({
          today,
          calendarData: that.initCalendar(res.data && res.data.list),
          sign_count,
          sign_image_url,
          showSignToast,
          showSignImage,
        });
      },
      fail: function(e) {
        console(e);
        wx.hideLoading();
      },
    });

    /**
     * 给个初始信息
     */
    that.setData({
      today,
      calendarData: that.initCalendar(),
    });
  },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  
  /**
   * 弹窗确认
   */
  sureSignToast:function(){
    switch(this.data.sign_count){
      case 10:
        this.setData({
          showSignToast: false
        });
      break;
      case 15:
        wx.navigateToMiniProgram({
          appId: 'wx675d79c292e7e4ee',
          path:"pages/market/coupon/pickcoupon?id=969&storeId=138777939"
        })
      break;
      case 30:
        wx.navigateToMiniProgram({
          appId: 'wx675d79c292e7e4ee',
          path: "/pages/goods/detail?id=55977920139&storeId=0"
        })
      break;
    }
  },

  /**
   * 关闭弹窗
   */
  closeSignToast: function() {
    this.setData({
      showSignToast: false
    });
  },

  /**
   * 挂壁图片弹窗
   */
  closeSignImage: function() {
    this.setData({
      showSignImage: false
    });
  },

  /**
   * 获取当月第一天偏移量
   */
  firstDayOffset: function() {
    let date = new Date(),
    firstDay = date.setDate(1),
    day = (new Date(firstDay)).getDay();
    const map = {
      7: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6
    };
    return map[day];
  },

  /**
   * 获取当月最后一天日期
   */
  lastDayDate: function () {
    let date = new Date(),
      year = String(date.getFullYear()),
      month = String(date.getMonth() + 1).padStart(2, '0'),
      lastDay = new Date(year, month, 0);
    return lastDay.getDate();
  },

  /**
   * 生成日历列表
   */
  initCalendar: function(serverdata=[]) {
    let first = this.firstDayOffset(),
    last = this.lastDayDate(),
    firstStemp= (new Date()).setDate(1),
    calendarData = [];

    for (let i = 0; i < 35; i++) {
      let is_sign = false, is_empty = true;
      let currentStemp = firstStemp + 1000 * 60 * 60 * 24 * (i - first),
        currentDate = new Date(currentStemp),
        currentYear = String(currentDate.getFullYear()).padStart(4, '0'),
        currentMonth = String(currentDate.getMonth() + 1).padStart(2, '0'),
        currentDay = String(currentDate.getDate()).padStart(2, '0'),
        currentFull = currentYear + '-' + currentMonth + '-' + currentDay;
      if ((i >= first) && (Number(currentDay)<=last)) {
        for (let j = 0; j < serverdata.length; j++) {
          if (currentFull === serverdata[j].date) {
            is_sign = true;
            break;
          }
        }
        is_empty = false;
      }
      calendarData.push({
        date: i - first + 1,
        is_sign,
        is_empty,
      });
    };

    console.log(calendarData);
    return calendarData;
  },

  /**
   * 预览图片， 可保存
   */
  lookImage: function(e) {
    const image_url = this.data.sign_image_url || '';
    console.log(image_url);
    wx.previewImage({
      urls: [image_url],
      current: image_url,
      success: function(res) {
        console.log('success', res);
      },
      fail: function(e) {
        console.log('fail', e);
      }
    })
  }
})