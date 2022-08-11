// 練習 1
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

const regexp = /[A-E]/gi;
const matches_array = str.match(regexp)

console.log(matches_array)

// =====================================================

// 練習 2

let data = [
  {
    作物名稱: "椰子"
  },
  {
    作物名稱: "釋迦"
  },
  {
    作物名稱: "藍莓-進口藍莓"
  }
];

const list = document.querySelector('ul')
const button = document.querySelector('button')

function renderData(showData) {
  let str = ''
  showData.forEach((item) => {
    str += `<li>${item.作物名稱}</li>`
  })
  list.innerHTML = str
}
renderData(data)

button.addEventListener('click', (e) => {
  const input = document.querySelector('input')
  let filterData = []
  filterData = data.filter(item => {
    return item.作物名稱.match(input.value)
  })
  console.log(filterData)
  renderData(filterData)
})