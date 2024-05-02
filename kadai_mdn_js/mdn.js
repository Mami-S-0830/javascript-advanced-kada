//日付を定数に設定
const today = new Date();

//年の取得
  const year = today.getFullYear();
//月の取得
  const month = today.getMonth() + 1;
//日の取得
  const day = today.getDate();

//出力
  console.log( year + '年' + month + '月' + day + '日');