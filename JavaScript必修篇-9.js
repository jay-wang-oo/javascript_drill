// ================== 題目一 ==================
//題目一
/*  填答區開始 */
//步驟1: <a class="error" src="https://is.gd/iOmM7A"></a>
// a 連結的 src 屬性放錯了， 是要用在步驟二 img 上，請協助取值
//請透過 querySelector 選取上方 HTML 標籤後
//使用 getAttribute 取出 src 屬性的網址 "https://is.gd/iOmM7A"
//並透過下方 console.log 印出

const erroe = document.querySelector('.error')
erroe.getAttribute('src')

console.log(erroe.getAttribute('src'))

//步驟2:<img class="picture" src="" alt="">
//請透過 querySelector 選取上方 HTML 標籤後
//將剛剛 a 連結 console.log() 印出的網址，使用 setAttribute 設定於上方 img src 屬性上
const picture = document.querySelector('.picture')
picture.setAttribute('src', erroe.getAttribute('src'))


//步驟3:
//<button type="button" class="btn btn-danger btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal">阿姨我不想努力了</button>
//請透過 querySelector 選取上方 HTML 標籤後
//使用 setAttribute("disabled", "") 的方式禁用該按鈕
const btn = document.querySelector('.btn')
btn.setAttribute('disabled', '')

/*   填答區結束  */