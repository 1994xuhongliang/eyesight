// const formatTime = date => {
//   const year = date.getFullYear()
//   const month = date.getMonth() + 1
//   const day = date.getDate()
//   const hour = date.getHours()
//   const minute = date.getMinutes()
//   const second = date.getSeconds()

//   return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
// }

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

var t = function (t) {
  return (t = t.toString())[1] ? t : "0" + t;
};

var formatTime=function (e) {
    return [e.getFullYear(), e.getMonth() + 1, e.getDate()].map(t).join(".");
};

var  getSmallEyeData= function () {
    return {
      1: "0.1",
      2: "0.12",
      3: "0.15",
      4: "0.2",
      5: "0.25",
      6: "0.3",
      7: "0.4",
      8: "0.5",
      9: "0.6",
      10: "0.8",
      11: "1.0",
      12: "1.2",
      13: "1.5",
      14: "2.0"
    };
};
var  getBigEyeData= function () {
    return {
      1: "4.0",
      2: "4.1",
      3: "4.2",
      4: "4.3",
      5: "4.4",
      6: "4.5",
      7: "4.6",
      8: "4.7",
      9: "4.8",
      10: "4.9",
      11: "5.0",
      12: "5.1",
      13: "5.2",
      14: "5.3"
    };
};
var  getE60SizeData=function () {
    return {
      1: "160",
      2: "126",
      3: "100",
      4: "80",
      5: "64",
      6: "50",
      7: "40",
      8: "32",
      9: "26",
      10: "20",
      11: "16",
      12: "12",
      13: "10",
      14: "8"
    };
};

var  getE30SizeData= function () {
    return {
      1: "80",
      2: "63",
      3: "50",
      4: "40",
      5: "32",
      6: "25",
      7: "20",
      8: "16",
      9: "13",
      10: "10",
      11: "8",
      12: "6",
      13: "5",
      14: "4"
    };
};
var getRowNumberData= function () {
    return {
      1: "1",
      2: "2",
      3: "2",
      4: "3",
      5: "3",
      6: "4",
      7: "4",
      8: "5",
      9: "6",
      10: "7",
      11: "8",
      12: "8",
      13: "8",
      14: "8"
    };
};

module.exports = {
  formatTime: formatTime,
  getSmallEyeData: getSmallEyeData,
  getBigEyeData: getBigEyeData,
  getE60SizeData: getE60SizeData,
  getE30SizeData: getE30SizeData,
  getRowNumberData: getRowNumberData
}
