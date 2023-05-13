console.log('script.js loaded');

// キーボードを配列に格納
let keyAlphabet = ['a', 'w', 's', 'd', 'r', 'f', 't', 'g', 'h', 'u', 'j', 'i', 'k', 'o', 'l', ';', '@', ':', '[', ']'];
//              a,a#, b, c,c#, d,d#, e, f,f#, g,g#, a,a#, b, c,c#, d, d#, e, f, f#, g, g#
console.log(keyAlphabet[0]);
console.log(keyAlphabet.indexOf('a'));

let audioCtx = new AudioContext();
const gainNode = audioCtx.createGain();
let oscillator = audioCtx.createOscillator();
let oscillator02 = audioCtx.createOscillator();

// ゲインノードの設定
gainNode.gain.value = 0.1;

// 出力先に接続して、再生開始(gainNodeは音量を調整するオブジェクト)
gainNode.connect(audioCtx.destination);

let keys = document.querySelectorAll('.keys');

keys.forEach(function(key) {
  key.addEventListener('click', function() {
      let note = this.getAttribute('data-note');
      console.log('You clicked the ' + note + ' key.');
  });
});

// 押し下げたキーをコンソールに表示
document.addEventListener('keydown', function(event) {
  console.log("Key '" + event.key + "' has been pressed.");

  // 押し下げたキーのインデックス(Aを0番目として、半音ごとに+1)
  let halfStepOffset = keyAlphabet.indexOf(event.key);
  console.log(halfStepOffset);

  // 周波数を計算する(440HzのAを基準にインデックスを用いて計算)
  oscillator.frequency.value = 440 * Math.pow(2, halfStepOffset / 12);

  oscillator.type = "sine";
  oscillator.connect(gainNode);

  oscillator.start();

});

// 押し上げた(押された後離された)キーをコンソールに表示
document.addEventListener('keyup', function(event) {
  console.log("Key '" + event.key + "' has been released.");
  oscillator.stop();
  oscillator = audioCtx.createOscillator();
});

document.addEventListener('keydown', function(event) {
  console.log("Key '" + event.key + "' has been pressed.");
  console.log("Keys pressed: " + event.key + ", " + event.code + ", " + event.which);
});
