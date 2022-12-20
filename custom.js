
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
