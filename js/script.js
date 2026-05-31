/* ===== 鸚鵡小知識陣列 ===== */

// 建立一個陣列，存放多個有趣的鸚鵡小知識
const parrotFacts = [
    "🧠 鸚鵡的智力相當於 4-5 歲的孩子，有些甚至能數數和辨別顏色！",
    "🎤 非洲灰鸚鵡可以學習超過 1000 個單詞，是世界上最聰慧的鳥類之一。",
    "💚 鸚鵡是一夫一妻制的鳥類，牠們終身伴侶相隨，非常忠誠。",
    "👀 鸚鵡的視力非常優秀，牠們能看到紫外線光譜，看到的顏色比人類更豐富。",
    "🦜 金剛鸚鵡的壽命可以長達 50 年甚至更久，是世界上最長壽的鳥類之一。",
    "🗣️ 鸚鵡不但能模仿語言，還能理解語言的意思，能和主人進行簡單對話。",
    "🪶 虎皮鸚鵡的羽毛顏色多達 32 種組合，每隻虎皮鸚鵡都是獨一無二的。",
    "🎵 玄鳳鸚鵡的叫聲非常優美，牠們甚至能學會吹口哨和唱歌！",
    "🍎 鸚鵡喜歡吃新鮮蔬果，特別是蘋果、葡萄和胡蘿蔔。",
    "🏥 如果鸚鵡感到緊張或害怕，牠們的頭頂羽毛會豎起來，就像穿上一頂帽子。"
];

/* ===== 獲取 HTML 元素 ===== */

// 獲取「顯示小知識」按鈕元素
// 使用 document.getElementById() 找到 id 為 'factBtn' 的按鈕
const knowBtn = document.getElementById('factBtn');

// 獲取用來顯示小知識的容器元素
// 使用 document.getElementById() 找到 id 為 'factDisplay' 的 div
const factBox = document.getElementById('factDisplay');

/* ===== 主要功能函式 ===== */

// 定義一個函式，用來隨機顯示鸚鵡小知識
function showRandomFact() {
    // 計算陣列長度（陣列中有多少個小知識）
    const factsLength = parrotFacts.length;
    
    // 使用 Math.random() 生成 0 到 1 之間的隨機數
    // 乘以 factsLength 得到 0 到陣列長度之間的數字
    // 使用 Math.floor() 取整，得到 0 到 (factsLength-1) 的隨機整數
    const randomIndex = Math.floor(Math.random() * factsLength);
    
    // 根據隨機索引，從陣列中取出一個小知識
    const randomFact = parrotFacts[randomIndex];
    
    // 將小知識文本設定到 factBox 的內容中
    // innerHTML 用來設定或取得元素的 HTML 內容
    factBox.innerHTML = randomFact;
    
    // 為 factBox 添加 'show' 類別，觸發 CSS 中定義的顯示動畫
    // add() 方法用來添加一個 CSS 類別
    factBox.classList.add('show');
}

/* ===== 事件監聽 ===== */

// 為按鈕添加點擊事件監聽器
// 當使用者點擊按鈕時，執行 showRandomFact 函式
// addEventListener(事件類型, 執行的函式)
knowBtn.addEventListener('click', showRandomFact);

/* ===== 額外功能：按鍵監聽 ===== */

// 為整個文件添加鍵盤事件監聽
// 當使用者按下 Enter 鍵時，也會觸發 showRandomFact 函式
// 讓網頁的互動方式更多樣化
document.addEventListener('keypress', function(event) {
    // 檢查按下的鍵是否為 Enter 鍵（鍵碼為 'Enter'）
    if (event.key === 'Enter') {
        // 如果是 Enter 鍵，執行 showRandomFact 函式
        showRandomFact();
    }
});
