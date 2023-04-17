console.log('script.js loaded');

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
});

// 押し上げた(押された後離された)キーをコンソールに表示
document.addEventListener('keyup', function(event) {
    console.log("Key '" + event.key + "' has been released.");
});