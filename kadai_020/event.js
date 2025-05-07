// 定数にHTML要素を代入
const text = document.getElementById('text');
const btn = document.getElementById('btn');

// ボタンをクリックしたときの処理
btn.addEventListener('click', function () {
  text.textContent = 'ボタンをクリックしました';
});
