// const { default: axios } = require("axios");

// JSON 檔案網址
const url = "https://shannon945.github.io/farm_produce/data.json";
const productsList = document.querySelector(".showList");
const buttonGroup = document.querySelector(".button-group");
let data = [];

// ==================================================

// //撈取資料
// function getData(){
//   axios.get(url)
//     .then ((res) => {
//       data = res.data
//       console.log(data)
//       // renderData(data)
//     })
// }
// getData();

// // renderData(showData)，過此方式可以呼叫 renderData 並傳入參數，組出想渲染的字串
// function renderData(showData) {
//   let str = ''; //請宣告一個變數 str 並賦予值為字串型別的空字串
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
//   })
//   productsList.innerHTML = str;
// }

// //函式：篩選出 data 內的種類代碼為 "N04, N05, N06"
// function changeType (type) {
//   let filterData = [];
//   filterData = data.filter((item) => {
//     return item.種類代碼 == type
//   })
//   console.log(filterData)
//   renderData(filterData) //呼叫 renderData 並傳入參數 filterData
// }


// buttonGroup.addEventListener("click", (e) => {
//   console.log(e.target.dataset.type)

//   // 清除全按鈕 active
//   const buttonRemove = document.querySelectorAll('.button-group .btn')
//   buttonRemove.forEach((item) => {
//     item.classList.remove('active')
//   })

//   // 確認點擊到的是否為 BUTTON
//   if (e.target.nodeName === "BUTTON") {

//     // HTML button 上的 data-type 屬性值
//     // let type = e.target.dataset.type;
//     let type = e.target.getAttribute('data-type');

//     // let filterData = [];

//     if (type == 'N04') {
//       // filterData = data.filter((item) => {
//       //   return item.種類代碼 == 'N04' //篩選出 data 內的種類代碼為 "N04"
//       // })
//       changeType(type)
//       e.target.classList.add('active')
//       // console.log(filterData)
//     } else if (type == 'N05') {
//       // filterData = data.filter((item) => {
//       //   return item.種類代碼 == 'N05' //篩選出 data 內的種類代碼為 "N05"
//       // })
//       changeType(type)
//       e.target.classList.add('active')
//       // console.log(filterData)
//     } else if (type == 'N06') {
//       // filterData = data.filter((item) => {
//       //   return item.種類代碼 == 'N06' //篩選出 data 內的種類代碼為 "N06"
//       // })
//       changeType(type)
//       e.target.classList.add('active')
//       // console.log(filterData)
//     }

//     // renderData(filterData)  //呼叫 renderData 並傳入參數 filterData
//   }
// });

// //函式：篩選出 data 內的種類代碼為 "N04, N05, N06"
// function changeType (type) {
//   let filterData = [];
//   filterData = data.filter((item) => {
//     return item.種類代碼 == type
//   })
//   console.log(filterData)
//   renderData(filterData) //呼叫 renderData 並傳入參數 filterData
// }
