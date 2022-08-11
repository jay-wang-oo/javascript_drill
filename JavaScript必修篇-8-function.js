// ================== 題目一 ==================
// 請同學參考觀念二 - 參數寫法-兩個數字相加工具後，撰寫出兩個數字相減工具，
// 並透過 return 的方式，賦予回傳的值至以下變數：
let num;

function total (num1, num2) {
  return num1 + num2;
}
num = total(1, 2)
console.log(num)

// ================== 題目二 ==================
// 情境題：
// 炎炎夏日，小格到豆花專賣店前想吃一碗豆花：

// 豆花內用售價為 56 元
// 豆花外帶售價為 61 元
// 小格現有財產為 60 元

// 參數對照表：
// num 豆花數量
// price 豆花售價
// isTakeout 是否外帶

// 於是小格寫出以下程式碼想判斷自己能不能購買成功！
// 請同學參考以上四個 function 觀念，協助小格使用 console.log 印出結果。

function checkOrder(num, price, isTakeout) {
  if (isTakeout === true) {
    if (calTotal(num, price) <= 60) {
      return "外帶成功!";
    } else {
      return "外帶失敗!";
    }
  } else if (isTakeout === false) {
    if (calTotal(num, price) <= 60) {
      return "內用成功!";
    } else {
      return "內用失敗!";
    }
  } else {
    return "用餐方式輸入錯誤!";
  }
}
function calTotal(num, price) {
  return num * price;
}

//情境一：小格想內用一碗豆花
//請呼叫 checkOrder 函式並依照情境帶入參數
//使用下方 console.log() 印出結果
console.log(checkOrder (1, 56, false));

//情境二：小格想外帶一碗豆花
//請呼叫 checkOrder 函式並依照情境帶入參數
//使用下方 console.log() 印出結果
console.log(checkOrder (1, 61, true));