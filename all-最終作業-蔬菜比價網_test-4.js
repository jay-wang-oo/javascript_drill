
// JSON 檔案網址
const url = "https://shannon945.github.io/farm_produce/data.json";
const productsList = document.querySelector(".showList");
const sortAdvanced = document.querySelector(".js-sort-advanced");

let data = [];



// ==================================================

// function getData() {
//   axios.get(url).then(function (response) {
//     data = response.data;
//     renderData(data);
//   });
// }
// getData();

// function renderData(showData) {
//   let str = "";
//   showData.forEach((item) => {
//     str += `
//       <tr>
//         <td>${item.作物名稱}</td>
//         <td>${item.上價}</td>
//         <td>${item.中價}</td>
//         <td>${item.下價}</td>
//         <td>${item.平均價}</td>
//         <td>${item.交易量}</td>
//       </tr>
//     `
//   });
//   productsList.innerHTML = str;
// }




// sortAdvanced.addEventListener('click', (e) => {
//   // console.log(e.target.nodeName)
//   // console.log(e.target.closest('i').getAttribute('data-sort'))
//   if (e.target.nodeName == 'I') {
//     // let sortPrice = e.target.dataset.price;
//     // let sortCaret = e.target.dataset.sort;
//     let sortPrice = e.target.closest('i').getAttribute('data-price')
//     let sortCaret = e.target.closest('i').getAttribute('data-sort')
//     if (sortCaret == 'up') {
//       data.sort((a, b) => {
//         // b - a 可實現從大排到小
//         return b[sortPrice] - a[sortPrice]
//       })
//     } else {
//       data.sort((a, b) => {
//         // a -  b 可實現從小排到大
//         return a[sortPrice] - b[sortPrice]
//       })
//     }
//   }
//   renderData(data)
// })

/** 題目填答區開始  **/
/** 步驟一 **/
//註冊監聽 sortAdvanced 的點擊事件
//並帶入事件參數

/** 步驟二 **/
//以下步驟於監聽函式大括號內執行
//透過 if 撰寫判斷式
//判斷點擊到的標籤是否為 <i></i> I 標籤

/** 步驟二 **/
//以下步驟於 if 判斷式內執行

//請宣告一個變數命名為 sortPrice
//將點擊時取出埋藏於 i 標籤的 data-price 值
//賦予給 sortPrice

//請宣告一個變數命名為 sortCaret
//將點擊時取出埋藏於 i 標籤的 data-sort 值
//賦予給  sortCaret

/** 步驟三 **/
//撰寫 if else 流程判斷
//在 if 的小括號內條件應填入"如果 sortCaret 取出的值相等於 "up"

/** 步驟四 **/
//以下步驟於在 if 判斷式大括號內執行
//透過 data 執行陣列方法 sort
//帶入 compareFunction 函式，並於函式內帶入 a 、 b 兩參數
//透過 return 回傳 b[sortPrice] -  a[sortPrice];
// b - a 可實現從大排到小

/** 步驟五 **/
//以下步驟在 else 大括號內執行
//透過 data 執行陣列方法 sort
//帶入 compareFunction 函式，並於函式內帶入 a 、 b 兩參數
//透過 return 回傳 a[sortPrice] -  b[sortPrice];
// a -  b 可實現從小排到大

/** 步驟六 **/
//以下步驟於 if（"判斷點擊到的為 I 標籤"）內
//if（"如果 sortCaret 取出的值相等於 "up"） else 大括號外執行
//呼叫函式 renderData 並帶入參數 data

/** 題目填答區結束  **/
