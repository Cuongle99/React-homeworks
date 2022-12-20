
$(function () {

    $(".test").each(function() {
        var e = $(this)
          , t = e.find(".widget-tab-title")
          , i = e.find(".tab-item")

        t.on("click", function() {
            var e;
            e = this.dataset.tab,
            i.removeClass('active'),
            i.filter('[data-tab="' + e + '"]').addClass('active')
        });
    });
    
});


$(document).ready(function () {
    var offSetImage = $(".banner_img").offset();
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        var space = -(scrollTop + 400 - offSetImage.top)/3
        if (space < -400) {
            space = -400
        } else if(kc > 0) {
            space = 0
        }

        $(".banner_img").css({
            "background-position-y": space + "px",
        });
    });
});
