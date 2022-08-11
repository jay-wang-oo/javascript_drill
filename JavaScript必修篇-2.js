// ================== 第一題 ==================
// 餐廳正在提供九折促銷活動，只要滿足其中一項條件，就可以打折：
// 以下兩個條件達成其中一項，可打九折：
// 滿500元, 為 VIP
// 變數名稱對照表
// total 消費金額
// isVIP VIP資格
let total = 200;
let isVIP = true;

//請協助判斷顧客有沒有折扣
if(total == 500 || isVIP == true){
console.log(`你可以打九折`)
}else{
console.log(`你沒有折扣`)
}

// ================== 題目二 ==================
// 小美進便利商店前要達成以下三項條件，三項條件皆需達成才可完成任務：

// 掃描QRCode
// 用酒精消毒手部
// 額溫大於 37.5 不能進去
// 變數名稱對照表

// scanQrCode 掃描QRCode
// disinfectHand 消毒手
// temperature 體溫
let scanQrCode = true;
let disinfectHand = true;
let temperature = 36;

//請協助店員判斷小美能不能進入便利商店
if(scanQrCode == true && disinfectHand == true && temperature < 37.5){
console.log(`你可以進便利商店！`)
}else{
console.log(`你不能進便利商店！`)
}

// ================== 題目三 ==================
// 超商今日特賣，只要滿300元，就能打九折。
//步驟一 協助算出客人 Tom 售價
//步驟二 使用判斷式判斷 Tom 是否有打折
//商品售價、打折數，請勿更動
const coffeePrice = 50;
const sandwichPrice = 40;
let sale = 0.9;
//客人 Tom 買了 3 杯咖啡、4 個三明治
let tomTotal = coffeePrice*3 + sandwichPrice*4;

if (tomTotal >= 300) {
  tomTotal = tomTotal * sale;
  console.log(`可以打折，打折後金額為${tomTotal}元`)
}else{
  console.log(`不可以打折`)
}
