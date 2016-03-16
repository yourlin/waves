(function () {
    function genWave(target, duration, size) {
        var $wave = $('<div class="wave"></div>');
        target.append($wave);
        $wave.animate({
            'width': (10*size) + 'px',
            'height': (10*size) + 'px',
            'margin-top': -(10*size) / 2 + 'px',
            'margin-left': -(10*size) / 2 + 'px',
            'opacity' : 0.3
        }, duration, function(){
            $(this).remove();
        });
    }

    var $block = $('.block');
    setInterval(function(){
        genWave($block, 5000, 50);
    }, 1500);


    var $block2 = $('.block-overflow-hidden');
    setInterval(function(){
        genWave($block2, 5000, 50);
    }, 1500);
})();