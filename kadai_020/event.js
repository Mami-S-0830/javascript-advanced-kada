//body要素からidを持つ要素を取得し定数に代入
const text = document.getElementById('text');
const btn = document.getElementById('btn');

//イベント処理 ボタンがクリックされたとき
btn.addEventListener('click',() => {
    //text要素に「ボタンをクリックしました」と表示する
    text.textContent = 'ボタンをクリックしました'
});