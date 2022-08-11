const list = document.querySelector('.list');
list.addEventListener('click', (e) => {
  if (e.target.nodeName === 'BUTTON') {
    console.log('123')
  }
});

const myLink = document.querySelector('.myLink')
myLink.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('有被點擊到')
})

const form = document.querySelector('form')
form.addEventListener('click', (e) => {
  e.preventDefault()
})
