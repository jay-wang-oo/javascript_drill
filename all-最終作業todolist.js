let data = [];
const btnAdd = document.querySelector('.btn_add');
const txt = document.querySelector('.txt');
const list = document.querySelector('.list');


// 渲染
function render(listData){
  let str = '';
  const list = document.querySelector('.list');
  listData.forEach((item) => {
      str += `
            <li data-id="${item.id}">
                <label class="checkbox" for=""><input type="checkbox" ${item.checked}/><span>${item.content}</span></label>
                <a href="#" class="delete"></a>
            </li>
      `;
  })
  list.innerHTML = str;
}

// 新增
btnAdd.addEventListener('click', (e) => {
  let obj = {
      content: txt.value,
      id: new Date().getTime(),
      checked: "",
  };
  if(txt.value.trim() == ''){
      alert('請輸入代辦事項內容');
      return;
  }
  txt.value = '';
  data.push(obj);
  updataTab();
})

// 刪除
list.addEventListener('click', (e) =>{
  let targetId = e.target.closest('li').getAttribute('data-id');
  if(e.target.getAttribute('class') === 'delete'){
      e.preventDefault();
      let num = data.findIndex((item) => {
            return item.id == targetId;
      })
      data.splice(num,1);
  }else{
      data.forEach((item) => {
            if(item.id == targetId){
                if(item.checked == 'checked'){
                      item.checked = '';
                }else{
                      item.checked = 'checked';
                }
            }
      })
  }
  updataTab();
})

// tab 按鈕
const tab = document.querySelector('.tab');
let tabName = 'all';
tab.addEventListener('click', (e) => {

     tabName = e.target.closest('li').getAttribute('data-tab');

     // 清除 li active
     let tabs = document.querySelectorAll('.tab li');
     tabs.forEach((item) => {
          item.classList.remove('active');
     })

     //付於 li active
     e.target.setAttribute('class', 'active');

     updataTab();
})

// tab 切換
function updataTab(){
     let dataNew = [];
     if(tabName == 'all'){
          dataNew = data;
     }else if(tabName == 'reversoContext'){
          dataNew = data.filter((item) => {
               return item.checked == '';
          })
     }else if(tabName == 'Context'){
          dataNew = data.filter((item) => {
               return item.checked == 'checked';
          })
     }

     // 待完成項目
     const todoNum = document.getElementById('todoNum');
     let todoLength = data.filter((item) => {
          return item.checked == '';
     });
     todoNum.textContent = todoLength.length;

     render(dataNew);
}

//清除已完成項目
const deleteAll = document.getElementById('deleteAll')
deleteAll.addEventListener('click', (e)  => {
     e.preventDefault();
     data = data.filter((item) => {
          return item.checked !== 'checked';
     })
     updataTab();
});

