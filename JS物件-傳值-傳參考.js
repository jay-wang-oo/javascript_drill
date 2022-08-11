console.log('真相只有一個');

// ================== 1 ==================
// var person = '小明';
// var person2 = person;
// person2 = '杰倫';
// console.log(person, person2);
// ================== 1 ==================

// ================== 2 ==================
// var person = {
//   name: '小明'
// }

// var person1 = person;
// person1.name = '杰倫';

// console.log(person.name); // 1 小明 , 2. 杰倫
// ================== 2 ==================

// ================== 3 ==================
// var member = ['爸', '媽'];
// var member2 = member;
// member2.push('小三');
// console.log(member); // 1. 有 , 2 沒有
// ================== 3 ==================

// ================== 4 ==================
// function fn(name) {
//   return `${name}被抓到了`
// }
// var fn2 = fn;
// fn2.magicName = '奇怪的東西';
// // 不會出錯，正確的 1，會出錯、不對 2
// console.dir(fn2.magicName);
// ================== 4 ==================

// ================== 5 ==================
// function 函式(name) {
//   return `${name}被抓到了`
// }
// console.log(函式('漂亮阿姨')); // 3 可以動， 4 不行
// ================== 5 ==================


var 名偵探 = console;
名偵探.柯南 = console.log;

// 名偵探.柯南(函式('漂亮阿姨'))


// ================== 6 ==================
// ## let 5, const 6
// const person = {
//   name: '小明'
// }

// person.name = '杰倫';
// 名偵探.柯南(person)
// ================== 6 ==================

// 1 const, 2 let

// ================== 7 ==================
// const family = ['爸', '媽', '小三'];
// family.forEach((item, key) => {
//   if(item === '小三') {
//     family.splice(key, 1)
//   }
// });
// console.log(family);
// ================== 7 ==================

// ================== 8 ==================
// function fn(item) {
//   item.name = '杰倫';
// }
// const person = {
//   name: '小明',
// }
// fn(person);
// 名偵探.柯南(person); // 1 小明 , 2 杰倫
// ================== 8 ==================

// ================== 10 ==================
// function fn(item) {
//   const newItem = {
//     name: '杰倫'
//   }
//   // item = newItem;
//   // item.name = newItem;
//   Object.keys(item).forEach(key => {
//     名偵探.柯南(key);
//     item[key] = newItem[key];
//   })
//   console.log('item', item);
// }
// const person = {
//   name: '小明',
// }
// fn(person);
// console.log(person); // 1小明 , 2. 杰倫
// ================== 10 ==================

// 3 傳參考很棒  4. 傳參考很煩

// ================== 12 ==================
// #1 淺層複製
// const person = {
//   name: '小明'
// }
// const person2 = { ...person };
// person2.name = '杰倫';
// console.log(person2.name, person.name);
// console.log(person === person2);
// ================== 12 ==================

// ================== 13 ==================
// #2 深層複製
// var person = {
//   name: '小明',
//   family: {
//     name: '小明家',
//     members: ['爸', '媽']
//   }
// }
// const person2 = JSON.parse( JSON.stringify(person));
// person2.name = '杰倫';
// person2.family.name = '杰倫家'
// console.log(person, person2);
// console.log(person.family === person2.family);
// 1 相等、2 不相等
// 很難打的按 3
// ================== 13 ==================

// ================== 14 ==================
// 擴展
// const person = {
//   name: '小明',
//   fn: function() {
//     console.log(`我叫作 ${this.name}`);
//   }
// };

// const person2 = {
//   ...person,
//   name: '杰倫',
// };
// person.fn();
// person2.fn();
// 1. 小明 , 2. 杰倫
// 3. 小明 , 4. 杰倫
// ================== 14 ==================

// ================== 15 ==================
// const family = [{name: '爸'}, { name: '媽' }];
// family.forEach((item, key) => {
//   const newItem = {
//     name: '杰倫'
//   };

//   family[key] = newItem;
//   console.log('family[key]', family[key]);
//   console.log('item', item);
// });
// console.log(family); // 請問在此有加上 杰倫 ㄇ？
// 1有杰倫 , 2.沒有杰倫
// ================== 15 ==================

// ================== 16 ==================
// 真地獄
// var person = {
//   name: '小明'
// }
// person.person = person;

// console.log(person.person === person.person.person);
// 1.true , 2.false
// ================== 16 ==================

// ================== 17 ==================
var a = {
  x: '小明'
}
var b = a;
a.y = a = {
  x: '杰倫'
};

console.log(b === a); // 1一樣、 2不壹樣
console.log('a:', a );
console.log('b:', b );

// 1. a 結果
// 2. { x: '杰倫'}
// 3. 其它

console.log(b.y === a);
// 1一樣、 2不一樣
// ================== 17 ==================
