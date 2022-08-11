
// JSON 檔案網址
const url = "https://shannon945.github.io/farm_produce/data.json";
const productsList = document.querySelector(".showList");
const search = document.querySelector(".search-group");

let data = [];

//撈取資料
function getData () {
  axios.get(url)
    .then ((res) => {
      data = res.data
      // console.log(data)
      // renderData(data)
    })
}
getData()

function renderData (showData) {
  let str = ''
  showData.forEach(item => {
    str += `
        <tr>
          <td>${item.作物名稱}</td>
          <td>${item.上價}</td>
          <td>${item.中價}</td>
          <td>${item.下價}</td>
          <td>${item.平均價}</td>
          <td>${item.交易量}</td>
        </tr>
    `
  })
  productsList.innerHTML = str
}

search.addEventListener('click', (e) => {
  if (e.target.nodeName == 'BUTTON') {
    const input = document.querySelector('input')
    if (input.value.trim() == '') {
      alert('請輸入作物名稱！')
      return
    }
    let filterData = []
    filterData = data.filter(item => {
      return item.作物名稱.match(input.value)
    })
    if (filterData.length == 0) {
      productsList.innerHTML = `<tr><td colspan="6" class="text-center p-3">查詢不到交易資訊QQ</td></tr>`
    } else {
      renderData(filterData)
    }
  }
})

//撈取資料
// function getData(){
//   axios.get(url)
//     .then ((res) => {
//       data = res.data
//       console.log(data)
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

// search.addEventListener('click', (e) => {
//   // 透過 if 判斷點擊到的等於以下按鈕，<button type="button" class="search text-white btn mb-2">搜尋</button>
//   if (e.target.nodeName == 'BUTTON') {
//     const input = document.querySelector('#crop')
//     // 透過選取的節點 判斷 以上 input 欄位值濾掉空格後是否為空字串
//     if (input.value.trim() == '') {
//       alert('請輸入作物名稱！')
//       return
//     }
//     let filterData = []
//     filterData = data.filter((item) => {
//       // 透過 filter 篩選 出作物名稱 與 input 欄位值相等的結果
//       return item.作物名稱.match(input.value)
//     })
//     // 判斷 filterData 長度等於零
//     if (filterData.length == 0) {
//       // 將節點 productsList 透過 innerHTML 的方式賦予以下 HTML 標籤字串
//       productsList.innerHTML = `<tr><td colspan="6" class="text-center p-3">查詢不到交易資訊QQ</td></tr>`
//     } else {
//       // 不等於零的情況下執行函式 renderData 並帶入參數 filterData
//       renderData(filterData)
//     }
//   }
// })

/** 題目填答區開始  **/
/** 步驟一 **/
//註冊監聽 search 的點擊事件，並帶入事件參數
//以下步驟在監聽函式內執行
//透過 if 判斷點擊到的等於以下按鈕
//<button type="button" class="search text-white btn mb-2">搜尋</button>

/** 步驟二 **/
//以下步驟在 if 等於按鈕判斷式內執行
//選取以下節點
//<input class="rounded-end" type="search" placeholder="請輸入作物名稱" id="crop" name="crop">
//透過選取的節點判斷以上 input 欄位值濾掉空格後是否為空字串
//為空字串跳出 alert("請輸入作物名稱！") 並 return

/** 步驟三 **/
//宣告一個變數 filterData 並賦予值為空陣列
//透過 data 跑 filter，並至少帶入一個參數
//透過 filter 篩選出作物名稱與 input 欄位值相等的結果
//將篩選的值賦予給 filterData

/** 步驟四 **/
//判斷 filterData 長度等於零
//等於零的情況下
//將節點 productsList 透過 innerHTML 的方式賦予以下 HTML 標籤字串
// '<tr><td colspan="6" class="text-center p-3">查詢不到交易資訊QQ</td></tr>'
//不等於零的情況下執行函式 renderData 並帶入參數 filterData

/** 題目填答區結束  **/