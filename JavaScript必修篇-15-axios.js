// axios.get('放入想撈取的 JSON 連結')
//   .then(function (response) {
//     //回傳的結果
//     console.log(response);
//     //抓回來的 JSON 資料
//     console.log(response.data);
//     //回傳的狀態碼
//     console.log(response.status);
//   });

// ================== 問題一 ==================
// 執行順序 / 印出結果
// 2 印出空陣列
// 1 印出 response.data 回傳結果

// let array = [];
// axios.get("https://hexschool.github.io/ajaxHomework/data.json")
//   .then(function (response) {
//     array = response.data;
//     console.log('array1:', array); // 1
//   });

// console.log('array2:', array); // 2

// ================== 問題二 ==================
// 執行順序 / 印出結果
// 3 印出空陣列
// 1 印出 response.data 回傳結果
// 2 印出 response.data 回傳結果

// let ary = [];
// axios.get("https://hexschool.github.io/ajaxHomework/data.json")
//   .then(function (response) {
//     ary = response.data;
//     console.log('ary1', ary); // 1
//     renderData()
//   });

// function renderData() {
//   console.log('ary2:', ary); // 2
// }

// console.log('ary3:', ary); // 3

