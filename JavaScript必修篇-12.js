// ================== 題目一 ==================
// 情境題：「我跟你媽一起掉進水裡之咖哩飯到底要不要攪拌？」
// 自古以來有個問題很常出現，出現頻率大概跟「我跟你媽一起掉進水裡，你會先救誰？」一樣常見。
// 那就是：「咖哩飯到底要不要攪拌？」
// 筑子為了了解大家的喜好，特別市場調查，並作成紀錄，請幫她算出到底是攪拌派多？還是不攪派多呢？
//市場調查資料
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
    name: "筑子",
    stir: false
  },
  {
    name: "魚魚",
    stir: false
  },
  {
    name: "鵬聖",
    stir: true
  }
];

//統計人數
let total = {
  stir: 0,
  noStir: 0
};

let peopleList = {
    stirName: [],
    noStirName: []
  };


/** 步驟一 **/
//請透過 data 陣列跑 forEach ，並至少帶入第一個參數
data.forEach((item) => {
  if (item.stir == true) {
    total.stir ++
    peopleList.stirName.push(item.name)
  } else {
    total.noStir ++
    peopleList.noStirName.push(item.name)
  }
})


/** 步驟二 **/
//以下步驟在 forEach {} 大括號內執行
//加入以下判斷式
if (" 第一個參數的 stir 屬性值為 true") {
  // total 物件內屬性 stir 的值加1

} else {
  // total 物件內屬性 noStir 的值加1

}
/** 步驟三 **/
//透過 console.log() 印出幾個人攪拌、不攪拌人數
console.log(`會攪拌咖哩飯人共有${total.stir}人`);
console.log(`會攪拌咖哩飯人有 ${peopleList.stirName}`);
console.log(`不會攪拌咖哩飯人共有${total.noStir}人`);
console.log(`不會攪拌咖哩飯人有 ${peopleList.noStirName}`);


// ================== 題目二 ==================
// peopleList 已複製於範例上
// let peopleList = {
//   stirName: [],
//   noStirName: []
// };

// ＊＊ if 判斷式無需重新複製 ＊＊//
if (" 第一個參數的 stir 屬性值為 true") {
  /** 步驟一 **/
  // 以下新增於題目一步驟二的判斷式內
  // 請將 data 陣列內的 name
  // 賦予到 peopleList 物件內屬性 stirName 的陣列上
} else {
  /** 步驟二 **/
  // 以下新增於題目一步驟二的判斷式內
  // 請將 data 陣列內的 name
  // 賦予到 peopleList 物件內屬性 noStirName 的陣列上
}
console.log(peopleList)