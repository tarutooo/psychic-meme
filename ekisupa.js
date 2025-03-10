'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivision = document.getElementById('result-area');
const tweetDivision = document.getElementById('tweet-area');

assessmentButton.addEventListener(
  'click',
  () => {
    const userName = userNameInput.value;
    if (userName.length === 0) {
      // 名前が空の時は処理を終了する
      return;
    }

    // 診断結果表示エリアの作成
    resultDivision.innerText = '';
    const heading = document.createElement('h3');
    heading.innerText = '診断結果';
    resultDivision.appendChild(heading);

    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultDivision.appendChild(paragraph);

    // TODO ツイートエリアの作成
    tweetDivision.innerText = '';
  }
);

const answers = [
  '###userName###の運勢は大吉です。今日は何をしても上手くいくでしょう、今日中に色々とやってしまいましょう！。',
  '###userName###の運勢は大吉です。今日はとても良いことが起こります、楽しみにして待ってましょう！。',
  '###userName###の運勢は末吉です。今日は良い予感がします、何か行動してみましょう！',
  '###userName###の運勢は末吉です。今日は電車が空いているでしょう、もしかしたら座れるかも？',
  '###userName###の運勢は末吉です。今日は願いが叶うでしょう、ただし焦ってはいけません。',
  '###userName###の運勢は末吉です。今日は自販機の抽選が当たります、何か飲み物を買いましょう！',
  '###userName###の運勢は中吉です。今日は少しの間なんでも成功するでしょう、でも油断をしてはいけません',
  '###userName###の運勢は中吉です。明日いつもより気持ちよく起きられるでしょう、今日は早めに寝てみても良いかも？',
  '###userName###の運勢は中吉です。今日は道で転ぶことはないでしょう、でも気をつけて歩いてください',
  '###userName###の運勢は中吉です。今日の天気が晴れでしょう、日差しに気をつけて出かけてください',
  '###userName###の運勢は中吉です。今日はよく集中できるでしょう、でも休憩はしっかりしましょう',
  '###userName###の運勢は中吉です。今日はなくなったものが出てくるでしょう、今日は部屋掃除をしてみましょう',
  '###userName###の運勢は小吉です。今日は少し嫌な予感がしまう、でも、いつも通り過ごせば何も起こらないでしょう',
  '###userName###の運勢は小吉です。今日はイヤホンの調子が悪いでしょう、作業はまたべつ日にしましょう',
  '###userName###の運勢は小吉です。今日はお気に入りの席が他の人に座られてしまう確率が高いです、早めに出発して席を確保しましょう。',
  '###userName###の運勢は小吉です。今日の天気は大雨になります、傘をもって出かけましょう',
  '###userName###の運勢は凶です。今日は友達と喧嘩してしまいます、すぐに仲直りしましょう',
  '###userName###の運勢は凶です。今日は電車が遅延してしまうかもしれません、早く出発して予定に遅れないようにしましょう',
  '###userName###の運勢は凶です。今日は百円玉をうっかり自販機の下に落としてしまうでしょう、飲み物を買う時は注意してください',
  '###userName###の運勢は大凶です。今日は言葉では表せない恐ろしいことが起こるでしょう、気をつけてください',
  '###userName###の運勢は大凶です。今日は電車が大遅延をしてしまいます、気をつけてください'
];

/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザの名前
 * @return {string} 診断結果
 */
function assessment(userName) {
  // 全文字のコード番号を取得してそれを足し合わせる
  let sumOfCharCode = 0;
  for (let i = 0; i < userName.length; i++) {
    sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
  }

  // 文字のコード番号の合計を回答の数で割って添字の数値を求める
  const index = sumOfCharCode % answers.length;
  let result = answers[index];

  result = result.replaceAll('###userName###', userName);
  return result;
}

// テストを行う関数
function test() {
  console.log('診断結果の文章のテスト');

  //太郎
  console.log('太郎');
  console.assert(
    assessment('太郎') ===
    '太郎のいいところは決断力です。太郎がする決断にいつも助けられる人がいます。',
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
  );

  //次郎
  console.log('次郎');
  console.assert(
    assessment('次郎') ===
    '次郎のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる次郎が皆から評価されています。',
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
  );

  //花子
  console.log('花子');
  console.assert(
    assessment('花子') ===
    '花子のいいところはまなざしです。花子に見つめられた人は、気になって仕方がないでしょう。',
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
  );

  console.log('診断結果の文章のテスト終了');

  console.log('同じ名前なら、同じ結果を出力することのテスト');

  console.log('太郎');
  console.assert(
    assessment('太郎') === assessment('太郎'),
    '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
  )

  console.log('次郎');
  console.assert(
    assessment('次郎') === assessment('次郎'),
    '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
  )

  console.log('花子');
  console.assert(
    assessment('花子') === assessment('花子'),
    '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
  )

  console.log('同じ名前なら、同じ結果を出力することのテスト終了');
}

test();
