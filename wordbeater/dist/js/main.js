window.addEventListener('load', init);

// Globals

// Available Levels
const levels = {
  easy: 10,
  medium: 8,
  hard: 3
};

// To change level
const currentLevel = levels.medium;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  '我',
  '我们',
  '你',
  '你们',
  '他',
  '他们',
  '滑雪', '雪花', '雪糕', '雪人', '雪茄', '雪梨', '暴风雪', '滑雪板', '雪橇', '雪豹'
];

// Initialize Game
function init() {
  // Show number of seconds in UI   初始时间
  seconds.innerHTML = currentLevel;
  // Load word from array 随机取字并显示
  showWord(words);
  // Start matching on word input 侦听输入并比较
  wordInput.addEventListener('input', startMatch);
  // Call countdown every second倒计时
  setInterval(countdown, 1000); //每秒countdown处理一次
  // Check game status查看状态
  setInterval(checkStatus, 50); //每0.05秒处理一次
}

// Start match比较结果一样，恢复时间重新定义新字加分
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);   //重新定义新字
    wordInput.value = '';
    score++;
  }

  // If score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordInput比较输入
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!!!';    //显示信息
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

// Pick & show random word
function showWord(words) {
  // Generate random array index随机取字
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random word赋值
  currentWord.innerHTML = words[randIndex];
}

// Countdown timer倒计时
function countdown() {
  // Make sure time is not run out
  if (time > 0) {
    // Decrement
    time--;
  } else if (time === 0) {
    // Game is over
    isPlaying = false;
  }
  // Show time
  timeDisplay.innerHTML = time;  //页面显示时间
}

// Check game status游戏状态检测
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!!!';   //显示信息
    score = -1;
  }
}
