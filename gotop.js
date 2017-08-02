function start(){
    var $win = 
        $(window),
        $ad = $(".gotop").css('opacity', 0).show(),
        _width = $ad.width(),
        _height = $ad.height(),
        _diffY = 80, _diffX = 1750,
        _moveSpeed = 500;

    $ad.css({
        top: $(document).height(),
        left: $win.width() - _width - _diffX,
        opacity: 1
    });
    $win.bind('scroll resize', function(){
        var $this = $(this);
        // 控制 #abgne_float_ad 的移動
        $ad.stop().animate({
            top: $this.scrollTop() + $this.height() - _height - _diffY,
            left: $this.scrollLeft() + $this.width() - _width - _diffX
        }, _moveSpeed);
    }).scroll();
};