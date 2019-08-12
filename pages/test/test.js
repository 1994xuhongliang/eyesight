var e = getApp();

console.log('global:', e.globalData);

var t, a, s, l, i, o = e.globalData, n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], r = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], h = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

wx.getSystemInfo({
  success: function (e) {
    console.log(e), console.log(e.model), console.log(e.pixelRatio), console.log(e.windowWidth),
      console.log(e.windowHeight), console.log(e.language), console.log(e.version), console.log(e.platform),
      t = e.windowWidth, a = e.windowHeight, s = a - 53, l = e.pixelRatio, i = e.model;
  }
});

var c = t / 23 * 28, d = 1, g = 1;
Page({
  data: {
    isShowToast: false,
    toastText: '',
    isTestEnd: false,
    resultCollect: {}, //结果收集
    toView: '4',
    valueSingle: [5],
    value: [5, 5],
    column: n,
    columnf: r,
    columns: h,
    plusHeight: "",
    plusTop: "",
    plusObj: {
      interHeight: 50,
      bottomHeight: 390,
      topHeight: 50
    },
    centerHeight: "",
    singleMaskTop: "",
    tableTop: 0,
    filePath: "",
    filePaths: "",
    flag: 1,
    width: t,
    model: i,
    height: a,
    viewHeight: s,
    pixelRatio: l,
    randomChange: 1,
    ceTwo: !1,
    scrollTo: c,
    ceHeight: 360,
    sanVal: "",
    seTrueOrFalseOne: "",
    seTrueOrFalseTwo: "",
    seTrueOrFalseThree: "",
    seTrueOrFalseFour: "",
    seFalseNum: 0,
    seFive: 0,
    oneOrTwo: "",
    seCurrentNumber: 5,
    seCurrentDecadeNumber: 5,
    seCurrentSingleNumber: 5,
    ceCount: {
      flagSum: [],
      flagFalse: 0,
      flagTrue: 0
    },
    interI: 32,
    scrollTop: 155,
    scrollTopOne: 155,
    scrollTopTwo: 155,
    seNumber: ["", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "", ""],
    tableScroll: {
      lastX: 0,
      lastY: 0,
      text: "没有滑动"
    },
    seScroll: {
      lastX: 0,
      lastY: 0,
      text: "没有滑动"
    },
    seImages: [10, 12, 15, 16, 18, "2&2", 2, 29, "42&2", 42, "5&2", 5, "57&2", 57, "6&2", 6, 7, "74&2", 74, 8, 96],
    seImage: "",
    rrCurrent: 13,
    rrArray: [],
    sanitems: [{
      name: "get",
      value: "图中某线条黑而清晰"
    }, {
      name: "no",
      value: "图中各线条粗细均匀"
    }],
    huangitems: [{
      name: "get",
      value: "图中出现弯曲、变形、或空缺"
    }, {
      name: "no",
      value: "图中空格线条规整、连续、整齐"
    }],
    presbyopia: [
      {
        name: "get",
        value: "红字清楚"
      }, 
      {
        name: "normal",
        value: "一样黑"
      },
      {
        name: "no",
        value: "绿字清楚"
      }, 
    ],
    ceitems: [{
      id: "a",
      big: 3,
      smail: .01,
      millimeter: 36.359985
    }, {
      id: "b",
      big: 3.1,
      smail: .012,
      millimeter: 28.879974
    }, {
      id: "c",
      big: 3.2,
      smail: .015,
      millimeter: 22.939972
    }, {
      id: "d",
      big: 3.3,
      smail: .02,
      millimeter: 18.21997
    }, {
      id: "e",
      big: 3.4,
      smail: .025,
      millimeter: 14.47998
    }, {
      id: "f",
      big: 3.5,
      smail: .03,
      millimeter: 11.5
    }, {
      id: "g",
      big: 3.6,
      smail: .04,
      millimeter: 9.129974
    }, {
      id: "h",
      big: 3.7,
      smail: .05,
      millimeter: 7.2599792
    }, {
      id: "i",
      big: 3.8,
      smail: .06,
      millimeter: 5.7599792
    }, {
      id: "j",
      big: 3.9,
      smail: .08,
      millimeter: 4.5799866
    }, {
      id: "k",
      big: 4,
      smail: .1,
      millimeter: 3.6399841
    }, {
      id: "l",
      big: 4.1,
      smail: .12,
      millimeter: 2.8899841
    }, {
      id: "m",
      big: 4.2,
      smail: .15,
      millimeter: 2.2999878
    }, {
      id: "n",
      big: 4.3,
      smail: .2,
      millimeter: 1.8199768
    }, {
      id: "o",
      big: 4.4,
      smail: .25,
      millimeter: 1.4499817
    }, {
      id: "p",
      big: 4.5,
      smail: .3,
      millimeter: 1.1499939
    }, {
      id: "q",
      big: 4.6,
      smail: .4,
      millimeter: .9100001
    }, {
      id: "r",
      big: 4.7,
      smail: .5,
      millimeter: .73
    }, {
      id: "s",
      big: 4.8,
      smail: .6,
      millimeter: .58000004
    }, {
      id: "t",
      big: 4.9,
      smail: .8,
      millimeter: .46000004
    }, {
      id: "u",
      big: 5,
      smail: 1,
      millimeter: .36
    }, {
      id: "v",
      big: 5.1,
      smail: 1.2,
      millimeter: .28999996
    }, {
      id: "w",
      big: 5.2,
      smail: 1.5,
      millimeter: .23000002
    }],
    tableHeight: 0
  },
  onLoad: function (e) {
    console.log(e);
    // 每次进测试清空数据
    o.resultItems = {
      huangbanResult: null,
      laohuaResult: null,
      sanguangResult: null,
      semangResult: null,
      viewResult: null,
    };
    
    console.log('全局数据是', o);
    this.setData({
      flag: e.flag
    });
  },
  onReady: function () {
    console.log("一开始就加载tableCanvas"), this.cecanvas(), this.sancanvas(),
      this.firstSeSure(), this.data.height > 667 && this.setData({
        singleMaskTop: 35,
        centerHeight: 50,
        plusObj: {
          interHeight: 45,
          bottomHeight: 380,
          topHeight: 25
        }
      }), this.data.height < 600 && this.setData({
        plusObj: {
          interHeight: 53,
          bottomHeight: 450,
          topHeight: 40
        }
      });
  },
  onShow: function () {
    this.tableCanvas();
  },
  onHide: function () { },
  onUnload: function () {
    wx.reLaunch({
      url: '../index/index',
    });
  },
  bindChangepicker: function (e) {
    var t = e.detail.value ? e.detail.value : 5;
    console.log(t), this.setData({
      seCurrentNumber: this.data.column[t[0]]
    }), console.log("此刻" + this.data.seCurrentNumber);
  },
  navUpper: function (e) {
      console.log('滚动到顶部')
  },
  navLower: function (e) {
      console.log('滚动到底部')
  },
  navScroll: function (e) {
      console.log(e)
  },
  bindChangepickerTwo: function (e) {
    var t = e.detail.value;
    this.setData({
      seCurrentDecadeNumber: this.data.columnf[t[0]],
      seCurrentSingleNumber: this.data.columns[t[1]]
    });
  },
  tabletouchMove: function (e) {
    console.log("move过程中"), console.log(e);
    var t = e.touches[0].pageX, a = e.touches[0].pageY, s = a - this.data.tableScroll.lastY;
    console.log("distance" + s), s < 0 ? ("上滑", console.log("此时是往上走"), Math.abs(this.data.tableTop + s - 5) < this.data.tableHeight - this.data.height + 20 && this.setData({
      tableTop: this.data.tableTop + s - 5
    })) : s > 0 && ("下拉", console.log("此时是往下走"), console.log(this.data.tableTop), this.data.tableTop + s + 5 < 0 ? this.setData({
      tableTop: this.data.tableTop + s + 5
    }) : this.setData({
      tableTop: 0
    })), this.setData({
      tableScroll: {
        lastX: t,
        lastY: a,
        text: "滑动开始"
      }
    }), console.log(this.data.tableScroll);
  },
  tabletouchStart: function (e) {
    console.log(e);
    var t = this;
    console.log("滑动开始"), console.log(e.touches[0].pageX), console.log(e.touches[0].pageY),
      t.setData({
        tableScroll: {
          lastX: e.touches[0].pageX,
          lastY: e.touches[0].pageY,
          text: "滑动开始"
        }
      }), console.log(t.data.tableScroll);
  },
  tabletouchEnd: function (e) {
    console.log(e);
  },
  firstSeSure: function () {
    var e = this;
    wx.downloadFile({
      url: "../images/daltonismo10.png",
      type: "image",
      success: function (t) {
        console.log("success"), e.setData({
          filePath: t.tempFilePath
        }), console.log(t), console.log(e.data.filePath);
      },
      fail: function (e) {
        console.log(e);
      }
    });
    var t = this.data.seImages.length - 1, a = Math.floor(Math.random() * t), s = this.data.seImages[a];
    if (e.setData({
      filePaths: s
    }), wx.downloadFile({
      url: "https://xjk001.com/wx/daltonismo" + s + ".png",
      success: function (t) {
        console.log("success"), e.setData({
          filePaths: t.tempFilePath
        }), console.log(e.data.filePaths);
      },
      fail: function (e) {
        console.log(e);
      }
    }), this.setData({
      seImage: "../images/daltonismo" + s + ".png",
      seFive: 1
    }), "string" == typeof s && s.constructor == String) {
      console.log("是第二张需要分割");
      var l = s.split("&")[0];
      0 == Math.floor(l / 10) ? (console.log("第二张确定一下个位数时是否出发事件"), this.setData({
        oneOrTwo: 1
      }), console.log(this.data.oneOrTwo)) : (console.log("确定一两位数事件"), this.setData({
        oneOrTwo: 2
      }));
    } else console.log("是第一张"), 0 == Math.floor(s / 10) ? (console.log("第一张确定一下个位数时是否出发事件"),
      this.setData({
        oneOrTwo: 1
      }), console.log(this.data.oneOrTwo)) : (console.log("确定一两位数事件"), this.setData({
        oneOrTwo: 2
      }));
  },
  seSure: function (e) {
    var isTestEnd;
    console.log("点击按钮时此时的选择的数字是" + this.data.seCurrentNumber);
    var t = this;
    console.log("确认输入的事件");
    var a = t.data.seImages.length - 1;
    console.log(a);
    var s = t.data.seImage.split("daltonismo")[1].split(".")[0];
    if ("string" == typeof s && s.constructor == String) {
      console.log("是第二张");
      r = s.split("&")[0];
      if (console.log("根据照片得来的当前数字" + r), 0 == Math.floor(r / 10)) r == t.data.seCurrentNumber ? (console.log("个位数匹配"),
        1 == t.data.seFive && t.setData({
          seTrueOrFalseOne: "T"
        }), 2 == t.data.seFive && t.setData({
          seTrueOrFalseTwo: "T"
        }), 3 == t.data.seFive && t.setData({
          seTrueOrFalseThree: "T"
        }), 4 == t.data.seFive && t.setData({
          seTrueOrFalseFour: "T"
        })) : (console.log("个位数不匹配"), t.data.seFalseNum++ , 1 == t.data.seFive && t.setData({
          seTrueOrFalseOne: "F"
        }), 2 == t.data.seFive && t.setData({
          seTrueOrFalseTwo: "F"
        }), 3 == t.data.seFive && t.setData({
          seTrueOrFalseThree: "F"
        }), 4 == t.data.seFive && t.setData({
          seTrueOrFalseFour: "F"
        })); else {
        console.log("十位数字为" + t.data.seCurrentDecadeNumber);
        l = 10 * t.data.seCurrentDecadeNumber + t.data.seCurrentSingleNumber;
        console.log("数字之和" + l), r == l ? (console.log("两位数匹配"), 1 == t.data.seFive && t.setData({
          seTrueOrFalseOne: "T"
        }), 2 == t.data.seFive && t.setData({
          seTrueOrFalseTwo: "T"
        }), 3 == t.data.seFive && t.setData({
          seTrueOrFalseThree: "T"
        }), 4 == t.data.seFive && t.setData({
          seTrueOrFalseFour: "T"
        })) : (console.log("两位数不匹配"), t.data.seFalseNum++ , 1 == t.data.seFive && t.setData({
          seTrueOrFalseOne: "F"
        }), 2 == t.data.seFive && t.setData({
          seTrueOrFalseTwo: "F"
        }), 3 == t.data.seFive && t.setData({
          seTrueOrFalseThree: "F"
        }), 4 == t.data.seFive && t.setData({
          seTrueOrFalseFour: "F"
        }));
      }
    } else if (0 == Math.floor(s / 10)) s == t.data.seCurrentNumber ? (console.log("个位数匹配"),
      1 == t.data.seFive && t.setData({
        seTrueOrFalseOne: "T"
      }), 2 == t.data.seFive && t.setData({
        seTrueOrFalseTwo: "T"
      }), 3 == t.data.seFive && t.setData({
        seTrueOrFalseThree: "T"
      }), 4 == t.data.seFive && t.setData({
        seTrueOrFalseFour: "T"
      })) : (console.log("个位数不匹配"), t.data.seFalseNum = t.data.seFalseNum + 1, 1 == t.data.seFive && t.setData({
        seTrueOrFalseOne: "F"
      }), 2 == t.data.seFive && t.setData({
        seTrueOrFalseTwo: "F"
      }), 3 == t.data.seFive && t.setData({
        seTrueOrFalseThree: "F"
      }), 4 == t.data.seFive && t.setData({
        seTrueOrFalseFour: "F"
      })); else {
      var l = 10 * t.data.seCurrentDecadeNumber + t.data.seCurrentSingleNumber;
      console.log("数字之和" + l), s == l ? (console.log("两位数匹配"), 1 == t.data.seFive && t.setData({
        seTrueOrFalseOne: "T"
      }), 2 == t.data.seFive && t.setData({
        seTrueOrFalseTwo: "T"
      }), 3 == t.data.seFive && t.setData({
        seTrueOrFalseThree: "T"
      }), 4 == t.data.seFive && t.setData({
        seTrueOrFalseFour: "T"
      })) : (console.log("两位数不匹配"), t.data.seFalseNum++ , 1 == t.data.seFive && t.setData({
        seTrueOrFalseOne: "F"
      }), 2 == t.data.seFive && t.setData({
        seTrueOrFalseTwo: "F"
      }), 3 == t.data.seFive && t.setData({
        seTrueOrFalseThree: "F"
      }), 4 == t.data.seFive && t.setData({
        seTrueOrFalseFour: "F"
      }));
    }
    console.log(t.data.seTrueOrFalseOne);
    var i = Math.floor(Math.random() * a), n = t.data.seImages[i];
    if (t.data.seFive < 5) if (t.setData({
      filePaths: n
    }), wx.downloadFile({
      url: "https://xjk001.com/wx/daltonismo" + n + ".png",
      success: function (e) {
        console.log("success"), t.setData({
          filePaths: e.tempFilePath
        }), console.log(t.data.filePaths);
      },
      fail: function (e) {
        console.log(e);
      }
    }), t.setData({
      seImage: "../images/daltonismo" + n + ".png",
      seFive: t.data.seFive + 1
    }), "string" == typeof n && n.constructor == String) {
      console.log("是第二张需要分割");
      var r = n.split("&")[0];
      0 == Math.floor(r / 10) ? t.setData({
        oneOrTwo: 1
      }) : t.setData({
        oneOrTwo: 2
      });
    } else console.log("是第一张"), 0 == Math.floor(n / 10) ? (t.setData({
      oneOrTwo: 1
    }), console.log(t.data.seCurrentNumber)) : t.setData({
      oneOrTwo: 2
    }); else console.log("显示了五次了 跳转出结果 错误结果" + t.data.seFalseNum), o.resultItems.semangResult = Math.floor(100*(t.data.seFalseNum)/5),
      console.log("色盲测试"), console.log(o.resultItems), 
      isTestEnd = o.resultItems.viewResult && o.resultItems.sanguangResult && o.resultItems.semangResult && o.resultItems.huangbanResult && o.resultItems.laohuaResult,
      this.setData({
        isShowToast: true,
        isTestEnd,
        toastText: '色盲概率：' + o.resultItems.semangResult + '%'
      })
  },
  sePass: function (e) {
    var t = this;
    var isTestEnd;
    1 == t.data.seFive && t.setData({
      seTrueOrFalseOne: "F"
    }), 2 == t.data.seFive && t.setData({
      seTrueOrFalseTwo: "F"
    }), 3 == t.data.seFive && t.setData({
      seTrueOrFalseThree: "F"
    }), 4 == t.data.seFive && t.setData({
      seTrueOrFalseFour: "F"
    });
    var a = t.data.seImages.length, s = Math.floor(Math.random() * a), l = t.data.seImages[s];
    if (t.data.seFalseNum++ , t.data.seFive < 5) if (t.setData({
      filePaths: l
    }), wx.downloadFile({
      url: "https://xjk001.com/wx/daltonismo" + l + ".png",
      success: function (e) {
        console.log("success"), t.setData({
          filePaths: e.tempFilePath
        }), console.log(t.data.filePaths);
      },
      fail: function (e) {
        console.log(e);
      }
    }), t.setData({
      seImage: "../images/daltonismo" + l + ".png",
      seFive: t.data.seFive + 1
    }), "string" == typeof l && l.constructor == String) {
      console.log("是第二张需要分割");
      var i = l.split("&")[0];
      0 == Math.floor(i / 10) ? t.setData({
        oneOrTwo: 1
      }) : t.setData({
        oneOrTwo: 2
      });
    } else console.log("是第一张"), 0 == Math.floor(l / 10) ? (t.setData({
      oneOrTwo: 1
    }), console.log(t.data.seCurrentNumber)) : t.setData({
      oneOrTwo: 2
    }); else console.log("错误的有几个要跳转了" + t.data.seFalseNum),
      o.resultItems.semangResult = Math.floor(100 * (t.data.seFalseNum) / 5),
      console.log("色盲测试"), console.log(o.resultItems), 
      isTestEnd = o.resultItems.viewResult && o.resultItems.sanguangResult && o.resultItems.semangResult && o.resultItems.huangbanResult && o.resultItems.laohuaResult,
      this.setData({
        isShowToast: true,
        isTestEnd,
      toastText: '色盲概率：' + o.resultItems.semangResult + '%'
      });
  },
  tableCanvas: function () {
    var e = wx.createCanvasContext("tableCanvas");
    e.beginPath(), e.setFontSize(14), e.setFillStyle("black"), this.data.width <= 320 ? (e.fillText("小数", 15, 30),
      e.fillText("五分", this.data.width - 40, 30)) : (e.fillText("小数", 0, 30), e.fillText("五分", this.data.width - 30, 30)),
      e.fillText("标准视力表", this.data.width / 2 - 30, 30), e.closePath(), e.stroke();
    for (var t = 0, a = 0; a < 23; a++) {
      var s = 11.194 * this.data.ceitems[a].millimeter / this.data.pixelRatio + .6;
      t += s;
      var l, i, o = i;
      l = this.data.width / 2 - s / 2, i = 150 - s / 2, 0 != a && (i = o + 60 + s);
      var n = s + 30, r = Math.floor(300 / n);
      if (r > 1) {
        e.beginPath(), e.setFillStyle("black"), e.fillRect(l, i, s, s), this.data.width <= 320 ? (e.setFontSize(8),
          e.fillText(this.data.ceitems[a].smail, 4, i + s / 2), e.fillText(this.data.ceitems[a].big, this.data.width - 17, i + s / 2)) : (e.fillText(this.data.ceitems[a].smail, 2, i + s / 2),
            e.fillText(this.data.ceitems[a].big, this.data.width - 20, i + s / 2)), e.closePath();
        for (var h = 0; h < r; h++) {
          e.beginPath(), e.setFillStyle("black"), l = (this.data.width - 300) / 2 + (300 - r * n + 30) / 2 + h * s + 30 * h,
            e.fillRect(l, i, s, s), h != r - 1 && (e.setFillStyle("#ffffff"), e.fillRect(l + s, i - 1, 30, s + 2)),
            e.closePath(), e.beginPath(), e.setLineWidth("0"), e.setFillStyle("#ffffff");
          c = Math.ceil(4 * Math.random());
          switch (e.beginPath(), c) {
            case 1:
              e.fillRect(l + s / 5, i - 1, s / 5, 4 * s / 5 + 1), e.fillRect(l + 3 * s / 5, i - 1, 1 * s / 5, 4 * s / 5 + 1);
              break;

            case 2:
              e.beginPath(), e.fillRect(l + s / 5, i + s / 5, 4 * s / 5 + 1, 1 * s / 5), e.fillRect(l + s / 5, i + 3 * s / 5, 4 * s / 5 + 1, 1 * s / 5);
              break;

            case 3:
              e.beginPath(), e.fillRect(l + s / 5, i + s / 5, 1 * s / 5, 4 * s / 5 + 1), e.fillRect(l + 3 * s / 5, i + s / 5, 1 * s / 5, 4 * s / 5 + 1);
              break;

            case 4:
              e.fillRect(l - 1, i + s / 5, 4 * s / 5, s / 5), e.fillRect(l - 1, i + 3 * s / 5, 4 * s / 5, 1 * s / 5);
          }
          e.closePath(), e.stroke();
        }
      } else {
        e.beginPath(), e.setFillStyle("black"), e.fillRect(l, i, s, s), e.setLineWidth(0),
          e.setFontSize(10), this.data.width <= 320 ? (e.setFontSize(8), e.fillText(this.data.ceitems[a].smail, 4, i + s / 2),
            e.fillText(this.data.ceitems[a].big, this.data.width - 17, i + s / 2)) : (e.fillText(this.data.ceitems[a].smail, 2, i + s / 2),
              e.fillText(this.data.ceitems[a].big, this.data.width - 20, i + s / 2)), e.closePath(),
          e.beginPath(), e.setLineWidth("0"), e.setFillStyle("#ffffff");
        var c = Math.ceil(4 * Math.random());
        switch (console.log(c), c) {
          case 1:
            e.beginPath(), e.fillRect(l + s / 5, i - 1, s / 5, 4 * s / 5 + 1), e.fillRect(l + 3 * s / 5, i - 1, 1 * s / 5, 4 * s / 5 + 1),
              e.closePath();
            break;

          case 2:
            e.beginPath(), e.fillRect(l + s / 5, i + s / 5, 4 * s / 5 + 1, 1 * s / 5), e.fillRect(l + s / 5, i + 3 * s / 5, 4 * s / 5 + 1, 1 * s / 5),
              e.closePath();
            break;

          case 3:
            e.beginPath(), e.fillRect(l + s / 5, i + s / 5, 1 * s / 5, 4 * s / 5 + 1), e.fillRect(l + 3 * s / 5, i + s / 5, 1 * s / 5, 4 * s / 5 + 1),
              e.closePath();
            break;

          case 4:
            e.beginPath(), e.fillRect(l - 1, i + s / 5, 4 * s / 5, s / 5), e.fillRect(l - 1, i + 3 * s / 5, 4 * s / 5, 1 * s / 5),
              e.closePath();
        }
        e.stroke();
      }
    }
    this.setData({
      tableHeight: t + 1320
    }), 2 == this.data.pixelRatio && this.setData({
      tableHeight: t + 1200
    }), e.beginPath(), e.setLineWidth(1), this.data.width <= 320 ? (e.moveTo(3, 0),
      e.lineTo(3, this.data.tableHeight), e.moveTo(this.data.width - 3, 0), e.lineTo(this.data.width - 3, this.data.tableHeight)) : (e.moveTo((this.data.width - 300) / 2, 0),
        e.lineTo((this.data.width - 300) / 2, this.data.tableHeight), e.moveTo((this.data.width - 300) / 2 + 300, 0),
        e.lineTo((this.data.width - 300) / 2 + 300, this.data.tableHeight)), e.closePath(),
      e.stroke(), e.draw(), console.log("生成视力表结束");
  },
  cecanvas: function () {
    this.data.height < 500 ? this.setData({
      ceHeight: 230
    }) : this.data.height < 600 ? this.setData({
      ceHeight: 310
    }) : this.data.height > 600 && this.setData({
      ceHeight: 340
    });
    var e = this.data.rrCurrent, t = wx.createCanvasContext("cecanvas");
    t.beginPath(), t.moveTo((this.data.width - 300) / 2, 0), this.data.height > 600 ? t.lineTo((this.data.width - 300) / 2, 320) : this.data.height > 500 ? t.lineTo((this.data.width - 300) / 2, 290) : t.lineTo((this.data.width - 300) / 2, 210),
      t.setStrokeStyle("#7f7f7f"), t.closePath(), t.stroke(), t.beginPath(), t.moveTo((this.data.width - 300) / 2 + 300, 0),
      this.data.height > 600 ? t.lineTo((this.data.width - 300) / 2 + 300, 320) : this.data.height > 500 ? t.lineTo((this.data.width - 300) / 2 + 300, 290) : t.lineTo((this.data.width - 300) / 2 + 300, 210),
      t.setStrokeStyle("#7f7f7f"), t.closePath(), t.stroke(), t.beginPath(), this.data.height > 600 ? (t.moveTo(0, 320),
        t.lineTo(this.data.width, 320)) : this.data.height > 500 ? (t.moveTo(0, 290), t.lineTo(this.data.width, 290)) : (t.moveTo(0, 210),
          t.lineTo(this.data.width, 210)), t.closePath(), t.stroke();
    for (var a = 0, s = 0; s < this.data.width; s++) t.beginPath(), t.setLineWidth(2),
      a % 50 == 0 ? this.data.height > 600 ? (t.moveTo(a, 320), t.lineTo(a, 338)) : this.data.height > 500 ? (t.moveTo(a, 290),
        t.lineTo(a, 308)) : (t.moveTo(a, 210), t.lineTo(a, 228)) : a % 25 == 0 ? this.data.height > 600 ? (t.moveTo(a, 320),
          t.lineTo(a, 334)) : this.data.height > 500 ? (t.moveTo(a, 290), t.lineTo(a, 304)) : (t.moveTo(a, 210),
            t.lineTo(a, 224)) : this.data.height > 600 ? (t.moveTo(a, 320), t.lineTo(a, 330)) : this.data.height > 500 ? (t.moveTo(a, 290),
              t.lineTo(a, 304)) : (t.moveTo(a, 210), t.lineTo(a, 220)), a += 5, t.closePath(),
      t.stroke();
    t.beginPath();
    var l, i, o = 11.194 * this.data.ceitems[e].millimeter / this.data.pixelRatio;
    l = this.data.width / 2 - o / 2, i = this.data.height > 600 ? 170 - o / 2 : this.data.height > 500 ? 150 - o / 2 : 105 - o / 2,
      t.setFillStyle("black"), t.fillRect(l, i, o, o), t.closePath(), t.beginPath(), t.setFontSize(10),
      this.data.height < 600 ? (t.fillText(this.data.ceitems[e].smail, 15, i + o / 2),
        t.fillText(this.data.ceitems[e].big, this.data.width - 30, i + o / 2)) : (t.fillText(this.data.ceitems[e].smail, 5, i + o / 2),
          t.fillText(this.data.ceitems[e].big, this.data.width - 30, i + o / 2)), t.closePath(),
      t.stroke(), t.setLineWidth("0"), t.setFillStyle("#ffffff");
    var n = Math.ceil(4 * Math.random());
    switch (console.log(n), t.beginPath(), n) {
      case 1:
        this.setData({
          randomChange: 1
        }), t.fillRect(l + o / 5, i - 1, o / 5, 4 * o / 5 + 1), t.fillRect(l + 3 * o / 5, i - 1, 1 * o / 5, 4 * o / 5 + 1);
        break;

      case 2:
        this.setData({
          randomChange: 2
        }), t.beginPath(), t.fillRect(l + o / 5, i + o / 5, 4 * o / 5 + 1, 1 * o / 5), t.fillRect(l + o / 5, i + 3 * o / 5, 4 * o / 5 + 1, 1 * o / 5);
        break;

      case 3:
        this.setData({
          randomChange: 3
        }), t.beginPath(), t.fillRect(l + o / 5, i + o / 5, 1 * o / 5, 4 * o / 5 + 1), t.fillRect(l + 3 * o / 5, i + o / 5, 1 * o / 5, 4 * o / 5 + 1);
        break;

      case 4:
        this.setData({
          randomChange: 4
        }), t.fillRect(l - 1, i + o / 5, 4 * o / 5, o / 5), t.fillRect(l - 1, i + 3 * o / 5, 4 * o / 5, 1 * o / 5);
    }
    t.stroke();
    for (var r = 0, s = 0; s < this.data.ceCount.flagSum.length; s++) t.beginPath(),
      t.setFontSize(10), t.setFillStyle("black"), 1 == this.data.ceCount.flagSum[s] ? t.fillText("✅", (this.data.width - 300) / 2 + 280 - 20 * r, 15) : t.fillText("❌", (this.data.width - 300) / 2 + 280 - 20 * r, 15),
      r++ , t.closePath(), t.stroke();
    t.draw();
  },
  sancanvas: function () {
    var e = wx.createCanvasContext("canvas1");
    e.setLineWidth(2), e.setFontSize(12), e.beginPath(), e.arc(this.data.width / 2, 150, 130, 0, 2 * Math.PI, !0),
      e.closePath(), e.stroke();
    for (t = 0; t <= 5; t++) e.beginPath(), e.moveTo(this.data.width / 2, 150), e.lineTo(this.data.width / 2 + 110 * Math.sin(15 * t / 180 * Math.PI), 150 - 110 * Math.cos(15 * t / 180 * Math.PI)),
      t % 2 == 0 && (0 == t ? e.fillText(12, this.data.width / 2 + 115 * Math.sin(15 * t / 180 * Math.PI) - 6, 150 - 115 * Math.cos(15 * t / 180 * Math.PI)) : e.fillText(Math.floor(t / 2), this.data.width / 2 + 115 * Math.sin(15 * t / 180 * Math.PI), 150 - 115 * Math.cos(15 * t / 180 * Math.PI) + 3)),
      e.stroke();
    for (t = 0; t <= 5; t++) e.beginPath(), e.moveTo(this.data.width / 2, 150), e.lineTo(this.data.width / 2 + 110 * Math.cos(15 * t / 180 * Math.PI), 150 + 110 * Math.sin(15 * t / 180 * Math.PI)),
      t % 2 == 0 && e.fillText(Math.floor((t + 6) / 2), this.data.width / 2 + 115 * Math.cos(15 * t / 180 * Math.PI), 150 + 115 * Math.sin(15 * t / 180 * Math.PI) + 3),
      e.stroke();
    for (t = 0; t <= 5; t++) e.beginPath(), e.moveTo(this.data.width / 2, 150), e.lineTo(this.data.width / 2 - 110 * Math.sin(15 * t / 180 * Math.PI), 150 + 110 * Math.cos(15 * t / 180 * Math.PI)),
      t % 2 == 0 && e.fillText(Math.floor((t + 12) / 2), this.data.width / 2 - 115 * Math.sin(15 * t / 180 * Math.PI) - 4, 150 + 115 * Math.cos(15 * t / 180 * Math.PI) + 8),
      e.stroke();
    for (var t = 0; t <= 5; t++) e.beginPath(), e.moveTo(this.data.width / 2, 150),
      e.lineTo(this.data.width / 2 - 110 * Math.cos(15 * t / 180 * Math.PI), 150 - 110 * Math.sin(15 * t / 180 * Math.PI)),
      t % 2 == 0 && e.fillText(Math.floor((t + 18) / 2), this.data.width / 2 - 115 * Math.cos(15 * t / 180 * Math.PI) - 10, 150 - 115 * Math.sin(15 * t / 180 * Math.PI) + 3),
      e.stroke();
    e.beginPath(), e.arc(this.data.width / 2, 150, 50, 0, 2 * Math.PI, !1), e.setFillStyle("#ffffff"),
      e.fill(), e.lineWidth = 0, e.closePath(), e.draw();
  },
  radioChange: function (e) {
    this.setData({
      sanVal: e.detail.value
    });
  },
  sanSubmmit: function (e) {
    var isTestEnd;
    if (this.data.sanVal) {
      console.log(this.data.sanVal), console.log(e.currentTarget);
      var t = e.currentTarget.dataset.index;
      o.resultItems.sanguangResult = (t=='get'?'疑似':null) || (t=='no'?'正常':null), 
      console.log("散光测试"), console.log(o.resultItems),
        isTestEnd = o.resultItems.viewResult && o.resultItems.sanguangResult && o.resultItems.semangResult && o.resultItems.huangbanResult && o.resultItems.laohuaResult,
        this.setData({
          isShowToast: true,
          isTestEnd,
        toastText: o.resultItems.sanguangResult
        })
    } else wx.showToast({
      title: "请选择您观测的结果",
      duration: 1500
    });
  },
  huangGuangSubmmit: function (e) {
    var isTestEnd;
    if (this.data.sanVal) {
      console.log(this.data.sanVal), console.log(e.currentTarget);
      var t = e.currentTarget.dataset.index;
      o.resultItems.huangbanResult = (t == 'get' ? '疑似' : null) || (t == 'no' ? '正常' : null),
        isTestEnd = o.resultItems.viewResult && o.resultItems.sanguangResult && o.resultItems.semangResult && o.resultItems.huangbanResult && o.resultItems.laohuaResult,
        this.setData({
          isShowToast: true,
          isTestEnd,
        toastText: o.resultItems.huangbanResult
        })
    } else wx.showToast({
      title: "请选择您观测的结果",
      duration: 1500
    });
  },
  // 老花眼提交
  presbyopiaSubmit: function (e) {
    var result = e.currentTarget.dataset.index;
    console.log(result);
    var isTestEnd;
    o.resultItems.laohuaResult = (result == 'get' ? '近视' : null) || (result == 'no' ? '远视' : null) || (result == 'normal' ? '正常' : null),
      isTestEnd = o.resultItems.viewResult && o.resultItems.sanguangResult && o.resultItems.semangResult && o.resultItems.huangbanResult && o.resultItems.laohuaResult,
      this.setData({
        isShowToast: true,
        isTestEnd,
      toastText: o.resultItems.laohuaResult
      })
  },
  ceUp: function (e) {
    var t = this;
    this.btnControl(1, e, t);
  },
  ceRight: function (e) {
    var t = this;
    this.btnControl(2, e, t);
  },
  ceDown: function (e) {
    var t = this;
    this.btnControl(3, e, t);
  },
  ceLeft: function (e) {
    var t = this;
    this.btnControl(4, e, t);
  },
  cecenter: function (e) {
    var t = this;
    this.btnControl(5, e, t);
  },
  btnControl: function (e, t, a) {
    var isTestEnd;
    a.setData({
      ceTwo: !0
    }), a.data.randomChange == e ? (a.data.ceCount.flagTrue++ , a.data.ceCount.flagSum.push("1"),
      console.log(a.data.ceTwo)) : (a.data.ceCount.flagFalse++ , a.data.ceCount.flagSum.push("0"),
        console.log("false"));
    var s = a.data.ceCount.flagTrue, l = a.data.ceCount.flagFalse;
    console.log("trues" + s), console.log("falses" + l);
    var i = 3 == s && 0 == l, n = 5 == s && l <= 4, r = 4 == l && s <= 4;
    if (i || n) {
      console.log("前往下一个"), a.data.rrArray.push("F");
      u = a.data.rrArray;
      console.log(u), "F" == u[(m = a.data.rrArray.length) - 2] && 18 == m && (a.setData({
        ceResult: a.data.ceitems[a.data.rrCurrent - 1].big
      }), o.resultItems.viewResult = a.data.ceitems[a.data.rrCurrent].big, console.log("视力检测"),
        console.log(o.resultItems), 
        isTestEnd = o.resultItems.viewResult && o.resultItems.sanguangResult && o.resultItems.semangResult && o.resultItems.huangbanResult && o.resultItems.laohuaResult,
        a.setData({
          isShowToast: true,
          isTestEnd,
          toastText: o.resultItems.viewResult
        })
        ), a.data.rrCurrent < 23 && a.setData({
          rrCurrent: a.data.rrCurrent + 1
        });
      var h = c + 50 * d;
      d++ , console.log(h + "llll"), a.setData({
        scrollTo: h
      }), console.log(a.data.rrCurrent), a.data.ceCount.flagSum = [], a.data.ceCount.flagTrue = 0,
        a.data.ceCount.flagFalse = 0, a.cecanvas(), a.setData({
          ceTwo: !1
        });
    } else if (r) {
      a.data.rrArray.push("B");
      var u = a.data.rrArray;
      console.log(u);
      var m = a.data.rrArray.length;
      "F" == u[m - 2] && (o.resultItems.viewResult = a.data.ceitems[a.data.rrCurrent - 1].big,
        console.log("视力检测"), console.log(o.resultItems), 
        isTestEnd = o.resultItems.viewResult && o.resultItems.sanguangResult && o.resultItems.semangResult && o.resultItems.huangbanResult && o.resultItems.laohuaResult,
        a.setData({
          isShowToast: true,
          isTestEnd,
        toastText: o.resultItems.viewResult
        })
        ), "B" == u[m - 2] && 6 == m && (console.log("现在是到最左边的终点了"), o.resultItems.viewResult = 3,
          console.log("视力检测"), console.log(o.resultItems), 
        isTestEnd = o.resultItems.viewResult && o.resultItems.sanguangResult && o.resultItems.semangResult && o.resultItems.huangbanResult && o.resultItems.laohuaResult,
        a.setData({
          isShowToast: true,
          isTestEnd,
          toastText: o.resultItems.viewResult
        })
          ), a.data.rrCurrent > 0 && a.setData({
            rrCurrent: a.data.rrCurrent - 1
          });
      var f = c - 50 * g;
      --g < 0 && (g = 0, f = 0), a.setData({
        scrollTo: f
      }), console.log(a.data.scrollTo), a.data.ceCount.flagSum = [], a.data.ceCount.flagTrue = 0,
        a.data.ceCount.flagFalse = 0, a.cecanvas(), a.setData({
          ceTwo: !1
        });
    } else a.cecanvas();
  },
  changeTap: function (e) {
    this.setData({
      flag: e.currentTarget.id
    }, () => {
      this.data.flag == '1' && console.log('flag ===1'), this.cecanvas();
      this.data.flag == '3' && console.log('flag == 3'), this.sancanvas();
    });
    this.sancanvas(), 1 == this.data.flag && (d = 1, g = 1, this.setData({
      scrollTo: c,
      rrCurrent: 5
    }), this.data.ceCount.flagSum = [], this.cecanvas()), 2 == this.data.flag && this.setData({
      seFive: 0,
      seTrueOrFalseOne: "",
      seTrueOrFalseTwo: "",
      seTrueOrFalseThree: "",
      seTrueOrFalseFour: "",
      seFalseNum: 0,
      seCurrentNumber: 5,
      seCurrentDecadeNumber: 5,
      seCurrentSingleNumber: 5,
      valueSingle: [5],
      value: [5, 5],
      rrArray: []
    }), this.firstSeSure();
  },
  presbyopiaSelect: (e) => {
    console.log(e);
  },
  onShareAppMessage: function () {
    return {
      title: "查视力",
      desc: "体检宝测视力 - 测色盲 - 测色弱 - 眼睛保健 - 视力恢复",
      path: "page/index/index?flag=1"
    };
  },



  // 关闭弹窗
  closeResultTest: function(e) {
    this.setData({
      isShowToast: false,
      toastText: null,
    });
  },
  //去下一项测试
  goNextTest: function(e) {
    let maps = {
      viewResult: '1', //视力值
      semangResult: '2', // 色盲
      sanguangResult: '3', // 散光
      huangbanResult: '4', // 眼底黄斑
      laohuaResult: '5', // 老花
    };
    let nextFlag='1';
    if (!o.resultItems.viewResult) { nextFlag = '1' } 
    else if (!o.resultItems.semangResult){nextFlag = '2'}
    else if(!o.resultItems.sanguangResult){nextFlag = '3'}
    else if(!o.resultItems.huangbanResult){nextFlag = '4'}
    else if(!o.resultItems.laohuaResult){nextFlag = '5'};
    this.setData({
      flag: nextFlag,
      isShowToast: false,
      toastText: null
    }, () => {
      this.data.flag == '1' && this.cecanvas();
      this.data.flag == '3' && this.sancanvas();
    });
  },
  // 提交测试结果
  goTestResult: function(e) {
    let app = getApp();
    let testResult = app.globalData && app.globalData.resultItems,
        id = app.globalData && app.globalData.userData && app.globalData.userData.id,
        auth = app.globalData && app.globalData.userData && app.globalData.userData.auth;
    console.log('提交结果： ', testResult);

    wx.showLoading({
      title: 'loading',
    });
    wx.request({
      url: 'https://wechat.zmc-vital.com/eyesight/addEyeSight',
      data: {
        id,
        auth,
        eyeSight: testResult
      },
      method: "POST",
      success: function (res) {
        console.log('请求结果', res);
        wx.hideLoading();
        wx.navigateTo({
          url: '../result/result',
        });
      },
      fail: function(e) {
        console.log('发生错误', e);
        wx.hideLoading();
      }
    });
  }
});