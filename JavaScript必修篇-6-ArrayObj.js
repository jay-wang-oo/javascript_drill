// ================== 問題一 ==================
// 六角學院 Discord 頻道內，正在舉行三個活動，每個活動都有各別的頻道名稱、老師、助教：
let hexSchoolDiscord = [
  {
    channelName: "六角筆記王",
    teacher: "廖洧杰",
    teachingAssistant: "Vivian"
  },
  {
    channelName: "js-必修篇",
    teacher: "廖洧杰",
    teachingAssistant: "艾草"
  },
  {
    channelName: "Vue新手夏令營",
    teacher: "卡斯伯",
    teachingAssistant: "Ryder"
  }
];

//請取出 "Vue新手夏令營"
console.log(hexSchoolDiscord[2].channelName)

//請取出 "js-必修篇"
console.log(hexSchoolDiscord[1].channelName)

//請取出 "艾草"
console.log(hexSchoolDiscord[1].teachingAssistant)

//請取出 "Vivian"
console.log(hexSchoolDiscord[0].teachingAssistant)

// ================== 挑戰題 ==================
// 請在 hexSchoolDiscord 陣列內新增一個物件，物件裡面包含三個屬性：

// 第一個屬性、值：channelName：“自行發揮想要的頻道名稱”
// 第二個屬性、值：teacher: “自行發揮，也歡迎填入自己唷”
// 第三個屬性、值：teachingAssistant: “自行發揮”
hexSchoolDiscord.push(
  {
    channelName: '自行發揮想要的頻道名稱',
    teacher: '自行發揮，也歡迎填入自己唷',
    teachingAssistant: '自行發揮'
  }
)
console.log(hexSchoolDiscord)