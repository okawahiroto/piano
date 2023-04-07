let keys = document.querySelectorAll('.key');

keys.forEach(function(key) {
    key.addEventListener('click', function() {
        let note = this.getAttribute('data-note');
        console.log('You clicked the ' + note + ' key.');
    });
});
