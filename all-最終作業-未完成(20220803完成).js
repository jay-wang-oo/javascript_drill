
const txt = document.querySelector('.txt')
const btnAdd = document.querySelector('.btn_add')
const list = document.querySelector('.list')
let arrData = [
  // {
  //     content : '代辦事項一',
  //     condition : 'undone',
  // },
  // {
  //     content : '把冰箱發霉的檸檬拿去丟',
  //     condition : 'undone',
  // },
]

// 新增
btnAdd.addEventListener('click', (e) => {
  e.preventDefault()
  const obj = {}
  obj.content = txt.value
  obj.id = new Date().getTime()
  obj.checked = ''
  if (txt.value == '') {
    alert('請輸入待辦事項')
    return
  }
  txt.value = ''
  arrData.push(obj)
  updataTab()
})

// 資料呈現在網頁上
function renderData (listData) {
  let str = ''
  listData.forEach((item) => {
    str += `
            <li data-id="${item.id}">
                <label class="checkbox" for="">
                <input type="checkbox" ${item.checked}/><span>${item.content}</span>
                </label>
                <a href="#" class="delete"></a>
            </li>
        `
  })
  list.innerHTML = str
}

// 刪除
list.addEventListener('click', (e) => {
  e.preventDefault()
  const targetId = e.target.closest('li').getAttribute('data-id')

  if (e.target.nodeName == 'A') {
    const num = arrData.findIndex(item => item.id == targetId)
    arrData.splice(num, 1)
  } else {
    arrData.forEach((item) => {
      if (item.id == targetId) {
        if (item.checked == 'checked') {
          item.checked = ''
        } else {
          item.checked = 'checked'
        }
      }
    })
  }
  updataTab()
})

// tab按鈕
const tab = document.querySelector('.tab')
let tabName = 'all'

tab.addEventListener('click', (e) => {
  e.preventDefault()
  tabName = e.target.closest('li').getAttribute('data-tab')

  const tabs = document.querySelectorAll('.tab li')
  tabs.forEach((item) => {
    item.classList.remove('active')
  })

  e.target.setAttribute('class', 'active')
  updataTab()
})

// tab切換
function updataTab () {
  let dataNew = []
  if (tabName == 'all') {
    dataNew = arrData
  } else if (tabName == 'reversoContext') {
    dataNew = arrData.filter(item => item.checked == '')
  } else if (tabName == 'Context') {
    dataNew = arrData.filter(item => item.checked == 'checked')
  }

  // 待完成
  const todoNum = document.querySelector('#todoNum')
  const todoLenght = arrData.filter(item => item.checked == '')
  todoNum.textContent = todoLenght.length

  renderData(dataNew)
}

// 清除已完成
const deleteAll = document.querySelector('#deleteAll')
deleteAll.addEventListener('click', (e) => {
  arrData = arrData.filter(item => item.checked !== 'checked')
  updataTab()
})
