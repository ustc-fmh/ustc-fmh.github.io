function make_animate(link_class, _class, index) {
    // link_class为点击的class, _class为控制的class
    $(link_class).unbind("click");
    $(link_class).click(function () {
        $("html, body").animate({
            scrollTop: $($(_class)[index]).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing",
        });
    });
}