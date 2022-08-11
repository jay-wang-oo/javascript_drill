// ================== 第一題 ==================
//近期水果售價，請勿更動
let applePrice = 50;
let mangoPrice = 30;
let guavaPrice = 30;
let bananaPrice = 20;
let papayaPrice = 40;
let cost;

//請依提示幫小明買水果，並印出水果金額
//範例 cost = papayaPrice*1 + applePrice*1 + bananaPrice*1;
cost = papayaPrice*1 + applePrice*1 + bananaPrice*1
console.log(`小明總共買了${cost}元`);

// ================== 第二題 ==================
//醬油、鹽售價，請勿更動
const soySaucePrice = 80;
const saltPrice = 40;
let sale = 0.9;
let mingMoney = 200;

//請幫小明算出還剩下多少錢，並印出結果
mingMoney = mingMoney - (soySaucePrice+saltPrice) * sale
console.log(`小明還剩${mingMoney}元`);

// ================== 第三題 ==================
let cabbageNum = 12;
// 情境題
// 農夫種了12顆高麗菜
// 早上賣掉了2顆高麗菜
// 中午賣掉了3顆高麗菜
// 晚上又種了1顆高麗菜
//請依早、中、晚的順序去記算高麗菜數量，並使用 console.log 印出最終數量
cabbageNum -= 2;
cabbageNum -= 3;
cabbageNum += 1;

console.log(`農夫的高麗菜剩下${cabbageNum}顆`)