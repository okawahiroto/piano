console.log('script.js loaded');

// 12個の配列を作成
let note = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let audioCtx = new AudioContext();
const gainNode = audioCtx.createGain();
let oscillator = audioCtx.createOscillator();

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

