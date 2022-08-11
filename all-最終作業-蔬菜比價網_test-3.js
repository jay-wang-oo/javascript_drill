
// JSON 檔案網址
const url = "https://shannon945.github.io/farm_produce/data.json";
const productsList = document.querySelector(".showList");
const select = document.querySelector('.sort-select');

let data = [];

// ==================================================

// function getData () {
//   axios.get(url)
//     .then((res) => {
//       data = res.data
//       console.log(data)
//       renderData(data)
//     })
// }
// getData()

// function renderData (showData) {
//   let str = ''
//   data.forEach(item => {
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
//   })
//   productsList.innerHTML = str
// }

// // 註冊監聽 select 的 change 事件
// select.addEventListener('change', (e) => {
//   switch (e.target.value) {
//     case '依上價排序':
//       selectChange('上價') // 銀龍柳, 甘藍-其他, 波羅蜜
//       break;
//     case '依中價排序':
//       selectChange('中價') // 銀龍柳, 甘藍-其他, 波羅蜜
//       break;
//     case '依下價排序':
//       selectChange('下價') // 雜柑-檸檬, 其他, 銀龍柳
//       break;
//     case '依平均價排序':
//       selectChange('平均價') // 銀龍柳, 甘藍-其他, 波羅蜜
//       break;
//     case '依交易量排序':
//       selectChange('交易量') // 甘藍-甘藍芽, 香蕉-旦蕉, 酪梨-進口
//       break;
//   }
//   function selectChange (value) {
//     data.sort((a, b) => {
//       return a[value] - b[value]
//     })
//   }
//   renderData(data)
// })


/** 題目填答區開始 **/
/** 步驟一 **/
//註冊監聽 select 的 change 事件

/** 步驟二 **/
//底下步驟於監聽函式大括號內執行
// 使用 switch 並於 switch 後方小括號內填入(e.target.value)
//判斷撰寫五個 case ，五個 case 比對的值如下：
//"依上價排序"
//"依中價排序"
//"依下價排序"
//"依平均價排序"
//"依交易量排序"
//記得每個 case 後方需透過 break; 終止

/** 步驟三 **/
//以下步驟於監聽函式內 switch 外執行
//定義一個 function 並命名為 selectChange
//帶入一個參數 value

/** 步驟四 **/
//以下步驟於 selectChange 函式內執行
//透過 data 執行陣列方法 sort
//帶入 compareFunction 函式，並於函式內帶入 a 、 b 兩參數
//透過 return 回傳 a[value] -  b[value];

/** 步驟五 **/
//以下步驟於 selectChange 函式內 sort 大括號外執行
//執行函式 renderData 並帶入參數 data

/** 步驟六 **/
//以下步驟於 switch 五個 case 內執行：
//"依上價排序"：呼叫 selectChange 函式並帶入參數"上價"
//"依中價排序"：呼叫 selectChange 函式並帶入參數"中價"
//"依下價排序"：呼叫 selectChange 函式並帶入參數"下價"
//"依平均價排序"：呼叫 selectChange 函式並帶入參數"平均價"
//"依交易量排序"：呼叫 selectChange 函式並帶入參數"交易量"

/** 題目填答區結束 **/