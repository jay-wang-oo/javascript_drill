// ================== 題目一 ==================
// 美體健身房舉行了減肥促銷活動，只要滿足以下其中一項條件，就可以打九折：
// BMI 大於或等於 35
// 是健身房 VIP
// 請幫小美判斷她是否能打九折：

let mayStatus = {
  bmi: 34,
  isVip: true
}
if (mayStatus.bmi >= 35 || mayStatus.isVip == true) {
  console.log("小美可以打九折！");
} else {
  console.log("小美不能打九折！");
}

// ================== 題目二 ==================
// 台灣銀行開放申請學貸緩繳，申請學貸緩繳需要同時滿足以下兩項資格：
// 1. 月收入4萬元(含)以下
// 2. 歷史申請紀錄不得超過4次
// 請幫小明判斷他是否能申請學貸緩繳通過，如果能夠通過，請使用陣列方法將他的 name、salary 放入 successList 內的 name、salary 裡：
let successList = {
  name: ['小花', '小美', '小龜', '小茵'],
  salary: [3, 3.5, 2.8, 3.8]
};

let mingStatus = {
  name: '王小明',
  salary: 2.4,
  applyHistory:[2018,2019,2020]
};

//小提示：透過陣列方法 .length 判斷歷史申請年份 "applyHistory" 是否小於或等於4次
if (mingStatus.salary <= 4 && mingStatus.applyHistory.length <= 4) {
//透過物件方法取出小明的 name、salary
//並透過陣列方法將小明的 name、salary 加入 successList 物件內的 name、salary 陣列裡
  successList.name.push(mingStatus.name)
  successList.salary.push(mingStatus.salary)
  console.log("小明申請通過！");
  console.log(successList);
} else {
  console.log("小明申請失敗");
}