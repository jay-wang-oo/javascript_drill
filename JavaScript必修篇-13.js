let data = [
  {
    name: "艾草",
    stir: true
  },
  {
    name: "Vivian",
    stir: false
  },
  {
    name: "鵬聖",
    stir: true
  },
  {
    name: "雅萱",
    stir: true
  }
];

const list = document.querySelector('.list')

let str = ''

data.forEach(item => {
  if ( item.stir) {
    str += `<li>會攪拌咖哩飯的人有${item.name}</li>`
  } else {
    str += `<li>不會攪拌咖哩飯的人有${item.name}</li>`
  }
})

list.innerHTML = str
