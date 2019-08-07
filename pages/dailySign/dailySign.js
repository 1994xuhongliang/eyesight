// pages/dailySign/dailySign.js

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
    signStatus: true,
    today: {},
    totalDays: 30,
    sign_count: 15,
    showSignToast: false,
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


    // for(let i=1; i<36; i++) {
    //   calendarData.push({
    //     date: i,
    //     is_sign: Math.random() > .5
    //   });
    // };

    this.setData({
      today,
      calendarData: this.initCalendar(),
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
   * 关闭弹窗
   */
  closeSignToast: function() {
    this.setData({
      showSignToast: false
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
  initCalendar: function() {
    let first = this.firstDayOffset(),
    last = this.lastDayDate(),
    firstStemp= (new Date()).setDate(1),
    calendarData = [];

    let is_sign=false, is_empty=true;
    for (let i = 0; i < 35; i++) {
      let currentStemp = firstStemp + 1000 * 60 * 60 * 24 * (i - first - 1),
        currentDate = new Date(currentStemp),
        currentYear = String(currentDate.getFullYear()).padStart(4, '0'),
        currentMonth = String(currentDate.getMonth() + 1).padStart(2, '0'),
        currentDay = String(currentDate.getDate()).padStart(2, '0'),
        currentFull = currentYear + '-' + currentMonth + '-' + currentDay;
      if ((i >= first) && (i <= last)) {
        for (let j = 0; j < signData.length; j++) {
          if (currentFull === signData[j].date) {
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
  }
})