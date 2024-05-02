//body要素からidを持つ要素を取得し定数に代入
const text = document.getElementById('text');
const btn = document.getElementById('btn');

//イベント処理 ボタンがクリックされたとき
btn.addEventListener('click',() => {
    //2秒後にtext要素に「ボタンをクリックしました」と表示する
    setTimeout(() => {
        text.textContent = 'ボタンをクリックしました';
},2000);
});