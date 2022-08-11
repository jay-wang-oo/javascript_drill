// ================== 題目一 ==================
//題目一
/* 填答區開始 */
/*步驟一*/
//請透過 querySelector 選取下方4個 HTML 標籤 :
//<input class="m-3 p-1" type="number">
//<button id="send" type="button" class="btn btn-dark">送出</button>
//<img class="picture" src="https://pse.is/3jxbf2" alt="">
//<span class="txt">0</span>
const input = document.querySelector('input')
const button = document.querySelector('button')
const picture = document.querySelector('.picture')
const txt = document.querySelector('.txt')

/*步驟二*/
//請利用步驟一選取的 button 送出按鈕
//透過 addEventListener 監聽 'click' 事件
button.addEventListener('click', (e) => {
  txt.textContent = input.value
  // picture.setAttribute('src', 'https://pse.is/3mcgfu')
  if (input.value >= 10000) {
    picture.setAttribute('src', 'https://pse.is/3le5vy')
  } else {
    picture.setAttribute('src', 'https://pse.is/3mcgfu')
  }
})

/*步驟三*/
//請注意：以下步驟皆在步驟二監聽函式的{}大括號內處理
//使用 .value 的方式取出步驟一選取的 input 欄位值
//將 input 欄位的值，使用 textContent 的方式，賦予到步驟一選取的<span class="txt">0</span>上
//針對步驟一選取的圖片 picture 使用 setAttribute 將 src 屬性值改為 "https://pse.is/3mcgfu"


/* 填答區結束 */

// ================== 題目二 ==================
//請依造 HackMD 步驟指引於題目一監聽函式內操作！
// 承上題，透過 if else 流程判斷，更換不一樣的貓貓圖片吧！
//以下步驟在題目一監聽函式{}大括號內操作：
// if (`input 內的值在10000以上`) {
//   //針對題目一選取的圖片 .picture
//   //使用 setAttribute 將 src 屬性值
//   //改為 "https://pse.is/3le5vy"
// } else {
//   //針對題目一選取的圖片 .picture
//   //使用 setAttribute 將 src 屬性值
//   //改為 "https://pse.is/3mcgfu"
// }