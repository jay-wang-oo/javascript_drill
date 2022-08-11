// ================== 第一題 ==================
// 雅萱是上班族，每次領薪水時，都要再扣勞保費跟健保費，請幫雅萱算出她的薪資級距要扣減多少錢：
// 級距一：24000 ~ 25199，扣勞保552元、健保372元。
// 級距二：25200 ~ 26399，扣勞保579元、健保391元。
// 級距三：26400 ~ 27599，扣勞保607元、健保409元。
// 級距四：27600 ~ 28799，扣勞保635元、健保428元。

// 變數名稱對照表
// wangShuanMoney 雅萱薪水
// laborIsurancePrice 勞保金額
// healthIsurancePrice 健保金額

//請利用以下變數，規劃 if else if 判斷雅萱級距，並計算出雅萱實領金額
//步驟一 建立 if() 判斷式，判斷雅萱金額是否在各級距內。ex：是否在24000~25199區間
//步驟二 將各個級距的勞保金額、健保金額放入 if 判斷式的大括號{}內
//步驟三 將雅萱薪水放入各級距大括號{}內並用雅萱薪水扣除勞保金額、健保金額
let wangShuanMoney = 26800;
let laborIsurancePrice;
let healthIsurancePrice;

if (wangShuanMoney >= 24000 && wangShuanMoney <= 25199) {
  laborIsurancePrice = 552
  healthIsurancePrice = 372
} else if (wangShuanMoney >= 25200 && wangShuanMoney <= 26399) {
  laborIsurancePrice = 579
  healthIsurancePrice = 391
} else if (wangShuanMoney >= 26400 && wangShuanMoney <= 27599) {
  laborIsurancePrice = 607
  healthIsurancePrice = 409
} else if (wangShuanMoney >= 27600 && wangShuanMoney <= 28799) {
  laborIsurancePrice = 635
  healthIsurancePrice = 428
}

wangShuanMoney -= laborIsurancePrice + healthIsurancePrice


//印出雅萱實領薪水
console.log(`雅萱實領薪水為${wangShuanMoney}元`)