// ================== 題目一 ==================
// 請同學依步驟指引將臺中市夜間急診或24小時急診動物醫院名冊 JSON 檔案資料渲染在網頁上：
// JSON 檔案網址
const url = "https://datacenter.taichung.gov.tw/swagger/OpenData/d7fbd4a8-0116-4a38-bfed-dbdbfe313e82";
const card = document.querySelector(".js-body");
let data = [];

/** 步驟一 **/
//打開註解，透過底下 axios.get 撈取 url 資料
//透過 console.log 觀看是否正確撈取資料
//將撈取回來的資料賦予在變數 data 上
// axios.get(帶入url)
//   .then(function (response) {
//     console.log(response.data);
//   });
axios.get(url)
  .then(res => {
    console.log(res.data)
    data = res.data
    renderData()
  })

/** 步驟二 **/
//定義一個函式命名為 renderData
/** 以下步驟皆在函式內執行 **/
//請宣告一個變數 str 並賦予值為字串型別的空字串
//請透過 data 陣列跑 forEach ，並至少帶入第一個參數
function renderData () {
  let str = ''
  data.forEach(item => {
    str += `<div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
      <div class="card-header">${item.醫院名稱}</div>
      <div class="card-body">
        <h5 class="card-title">${item.醫院電話}</h5>
        <p class="card-text">${item.急診服務}</p>
      </div>
    </div>`;
  })
  card.innerHTML = str
}


/** 步驟三 **/
//以下步驟在函式內 forEach {} 大括號內執行
//請將以下內容賦予給 str
// str += `<div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
//   <div class="card-header">${請填入醫院名稱}</div>
//   <div class="card-body">
//     <h5 class="card-title">${請填入醫院電話}</h5>
//     <p class="card-text">${請填入急診服務}</p>
//   </div>
// </div>`;

/*＊ 步驟四 **/
//以下步驟在 forEach {} 大括號外執行
//請透過 innerHTML 給 card 變數賦予值
//該值為變數 str


/** 步驟五 **/
//在步驟一的 axios.get 內呼叫 renderData()