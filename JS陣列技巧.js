const people = [
  {
    name: '卡斯伯',
    order: '鍋燒意麵',
    price: 80
  },
  {
    name: '小明',
    order: '牛肉麵',
    price: 120
  },
  {
    name: '漂亮阿姨',
    order: '滷味切盤',
    price: 40
  },
  {
    name: 'Ray',
    order: '大麻醬乾麵',
    price: 60
  },
]

// 1. 請一一列出每個人的訂單
// people.forEach(function(obj, key) {
//   console.log(obj, key);
// });

people.forEach((item, i) => {
  console.log(item, i)
})


// 2. 小明看到今天有打八折！！，請將所有訂單新增一個新價格，金額是 80%
// 2.1 forEach
// 2.2 map
// const newOrders = people.map(function(item, index) {
//   return {
//     ...item,
//     newPrice: item.price * 0.8
//   }
// });




// 2.3 箭頭函式
// const newOrders = people.map((item, index) => ({
//   ...item,
//   newPrice: item.price * 0.8
// }));
// console.log(newOrders);

// ================= 2.結果 =================
console.log(newOrders)
// ================= 2.結果 =================


// 3. 老闆說，今天疫情沒有八折啦，不過 80 元的可以給滷蛋
// 3.1 forEach
// const newOrders2 = [];
// people.forEach(function(item, index) {
//   if (item.price >= 80) {
//     newOrders2.push(item)
//   }
// });


// 3.2 filter
// const newOrders22 = people.filter(function(item, index) {
//   return item.price >= 80; // 為真的，就會回傳該物件
// });





// 3.3 filter + arrow
// const newOrders2 = people.filter((item) => item.price >= 80);
// console.log(newOrders2);

// ================= 3.結果 =================
console.log(newOrders2);
console.log(newOrders22);
// ================= 3.結果 =================


// 4. 過一段時間後，老闆發現牛肉沒了，把點牛肉麵的換成牛肉湯麵
// 4.1 forEach
// let index = 0
// people.forEach(function(obj, key) {
//   if (obj.order === '牛肉麵') {
//     index = key;
//   }
// });
// people[index].order = '牛肉湯麵'

// people.forEach(item => {
//   if (item.order == '牛肉麵') {
//     item.order = '牛肉湯麵'
//   }
// })

// 4.2 findIndex
// const index = people.findIndex(function(item) {
//   return item.order === '牛肉麵'
// })

// const index = people.findIndex((item, i) => {
//   return item.order === '牛肉麵'
// })
// people[index].order = '牛肉湯麵2'


// 4.3 findIndex + arrow
// const index = people.findIndex(item => item.order === '牛肉麵')

// const index = people.findIndex(item => item.order == '牛肉麵')
// people[index].order = '牛肉湯麵3'


// ================= 4.結果 =================
// people[index].order = '牛肉湯麵'
// console.log(people[index]);
console.log(people)
// ================= 4.結果 =================


// 5. 老闆說 POS 機壞了，麻煩幫忙出一下 LI 結構，方便列印發
// 5.1
// let htmlTemplate = ''
// people.forEach(function(obj, key) {
//   htmlTemplate = htmlTemplate + `<li>
//       ${obj.order}, ${obj.price}
//     </li>`;
// });

// let str = ''
// people.forEach((item) => {
//   str += `
//   <li>${item.order} ${item.price}</li>
//   `
// })

// 5.2
// const htmlTemplate = people.map(function(obj, key) {
//   return `<li>
//     ${obj.order}, ${obj.price}
//   </li>`;
// }).join('');
// console.log(htmlTemplate);

// const str2 = people.map((item) => {
//   return `
//   <li>${item.order} ${item.price}</li>
//   `
// }).join('');

// 5.3
// const htmlTemplate = people.map((obj, key) =>  `<li>
//   ${obj.order}, ${obj.price}
// </li>`).join('');
// console.log(htmlTemplate);

// ================= 5.結果 =================
console.log(str);
console.log(str2);
// ================= 5.結果 =================

// 6. 老闆要收錢了，請問老闆應該收多少錢
// 6.1
// let total = 0;
// people.forEach(function(obj, key) {
//   total += obj.price;
// });





// 6.2
// const total = people.reduce(function(acc, cur) { //reduce(acc,cur)
//   console.log(acc);
//   return acc + cur.price;
// }, 0);





// 6.3
// const total = people.reduce((acc, cur) => acc + cur.price, 0);
// console.log(total);


// console.log(total);

// ================= 6.結果 =================
console.log(total);
console.log(total2);
// ================= 6.結果 =================


// 7. 今天誰吃最貴！請排序所有的金額
// const peopleSort = people.sort((a, b) => {
//   return b.price - a.price //-(a-b) or b-a
// });
// console.log(peopleSort);






// ================= 7.結果 =================
console.log(peopleSort);
// ================= 7.結果 =================
